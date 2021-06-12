import AsyncStorage from '@react-native-community/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'sigup_error':
            return {
                ...state,
                errorMessage: action.payload,
            }
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        default:
            return state
    }
}

const signup =
    (dispatch) =>
    async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', {
                email,
                password,
            })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token })
            navigate('TrackList')
        } catch (err) {
            dispatch({
                type: 'sigup_error',
                payload: 'Something went wrong with signup process',
            })
        }
    }

const signin =
    (dispatch) =>
    ({ email, password }) => {
        // Try to signin
        // Handle success by updating state
        // Handle failure by showing error message (somehow)
    }

const signout = (dispatch) => () => {
    // somehow sign out!!!
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
)

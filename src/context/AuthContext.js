import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type) {
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
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data)
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
    { isSignedIn: false }
)

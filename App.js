import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator } from 'react-navigation'
import AccountScreen from './src/Screens/AccountScreen'
import TrackCreateScreen from './src/Screens/TrackCreateScreen'
import SigninScreen from './src/Screens/SigninScreen'
import SignupScreen from './src/Screens/SignupScreen'
import TrackDetailScreen from './src/Screens/TrackDetailScreen'
import TrackListScreen from './src/Screens/TrackListScreen'

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
        TrackFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
})

export default createAppContainer(switchNavigator)

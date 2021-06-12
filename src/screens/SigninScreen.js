import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext)
    return (
        <View>
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                buttonText="Sign In"
                onSubmit={signin}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Spacer>
                    <Text style={styles.link}>
                        Don&apos;t have account? Signup
                    </Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}
SigninScreen.navigationOptions = () => ({
    header: () => false,
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
    },
    link: {
        color: 'blue',
    },
})

export default SigninScreen

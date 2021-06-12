import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <AuthForm
                errorMessage={state.errorMessage}
                buttonText="Sign Up"
                onSubmit={signup}
                headerText="Sign Up for Tracker"
            />

            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>
                        Already have account? Signin
                    </Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

SignupScreen.navigationOptions = () => ({
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

export default SignupScreen

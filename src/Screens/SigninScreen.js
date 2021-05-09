import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const styles = StyleSheet.create({
    textFont: {
        fontSize: 48,
    },
})

const SigninScreen = ({ navigation }) => (
    <View>
        <Text style={styles.textFont}>SigninScreen</Text>
        <Button
            title="Go to Signup"
            onPress={() => navigation.navigate('Signup')}
        />
        <Button
            title="Go to main"
            onPress={() => navigation.navigate('mainFlow')}
        />
    </View>
)

export default SigninScreen

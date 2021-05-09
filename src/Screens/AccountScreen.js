import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    textFont: {
        fontSize: 48,
    },
})

const AccountScreen = () => (
    <View>
        <Text style={styles.textFont}>AccountScreen</Text>
    </View>
)

export default AccountScreen

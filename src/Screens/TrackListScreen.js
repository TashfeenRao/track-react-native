import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const styles = StyleSheet.create({
    textFont: {
        fontSize: 48,
    },
})

const TrackListScreen = ({ navigation }) => (
    <View>
        <Text style={styles.textFont}>TrackListScreen</Text>
        <Button
            title="Go to detail"
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </View>
)

export default TrackListScreen

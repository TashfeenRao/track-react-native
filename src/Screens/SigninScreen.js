import React from 'react'
import { View, StyleSheet } from 'react-native'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button } from '@material-ui/core'
import Spacer from '../Components/Spacer'

const SigninScreen = ({ navigation }) => (
    <View>
        <Spacer>
            <Typography variant="h5">Signin to see Tracks </Typography>
        </Spacer>
        <TextField
            label="Email"
            style={{ margin: 8 }}
            placeholder="Enter Your Email"
            fullWidth
            margin="normal"
        />
        <Spacer />
        <TextField
            label="Password"
            style={{ margin: 8 }}
            placeholder="Enter Your Password"
            fullWidth
            margin="normal"
        />
        <Spacer>
            <Button variant="outlined" color="primary">
                SignIn
            </Button>
        </Spacer>
    </View>
)

export default SigninScreen

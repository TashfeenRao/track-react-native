// import React, { useState, useContext } from 'react'
// import { View, StyleSheet } from 'react-native'
// import { Text, Input, Button } from 'react-native-elements'
// import Spacer from './Spacer'
// import { Context as AuthContext } from '../context/AuthContext'

// const Form = ({ navigation, title }) => {
//     const { state, signup, signin } = useContext(AuthContext)
//     const { email, setEmail } = useState('')
//     const { password, setPassword } = useState('')
//     return (
//         <View style={styles.container}>
//             <Spacer>
//                 <Text h3>{title} for Tracker</Text>
//             </Spacer>
//             <Input
//                 label="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//             />
//             <Spacer />
//             <Input
//                 secureTextEntry
//                 label="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//             />
//             {state.errorMessage ? (
//                 <Text style={styles.errorMessage}>{state.errorMessage}</Text>
//             ) : null}
//             <Spacer>
//                 <Button
//                     title={title}
//                     onPress={() => signin({ email, password })}
//                 />
//             </Spacer>
//             <Button
//                 onPress={() => {
//                     title === 'Sign Up'
//                         ? navigation.navigate('Signin')
//                         : navigation.navigate('Signup')
//                 }}
//             >
//                 Singin
//             </Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         marginBottom: 250,
//     },
//     errorMessage: {
//         color: 'red',
//         marginLeft: 15,
//     },
// })

// export default Form

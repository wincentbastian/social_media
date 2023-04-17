import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { createProfile } from '../store/actions/profileAction'

const RegisterScreen = () => {

    const globalProfileData = useSelector(store => store.profileReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(createProfile({
            username: 'Wincent',
            email: 'wincentbastian3@gmail.com',
            password: '123',
        }))
        console.log(globalProfileData)
    }, [])
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Username"
                        onChangeText={newText => setText(newText)}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Email"
                        onChangeText={newText => setText(newText)}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Password"
                        onChangeText={newText => setText(newText)}
                    />
                </View>
                <Button
                    title="Register"
                    color="#841584"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    loginText: {
        color: '#1A5B05',
        fontSize: 16,
    }

})

export default RegisterScreen
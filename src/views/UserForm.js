import React, {useState, useContext} from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'
import { LeftAvatar } from "react-native-elements";
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)

    return(
        <View style={style.form}>
            <Text style={style.text}>Nome</Text>
            <TextInput
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
                placeholderTextColor = 'gray'
            />
            <Text style={style.text}>E-mail</Text>
            <TextInput
            style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o e-mail"
                value={user.email}
                placeholderTextColor = 'gray'
            />
            <Text style={style.text}>URL do Avatar</Text>
            <TextInput
            style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do avatar"
                value={user.avatarUrl}
                placeholderTextColor = 'gray'
            />
            <Button
                title= "Salvar"
                onPress={()=>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    text:{
        color: 'black',
    },
    form:{
        padding: 12
    },
    input: {
        height: 40,
        color: 'gray',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})
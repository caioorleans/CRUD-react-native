import React, {useContext} from 'react'
import {View, Text, FlatList, Alert} from 'react-native'
import { ListItem, Avatar, Button, Icon } from "react-native-elements";
import UsersContext from "./../context/UsersContext";

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
            {
                text:'sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text:'não'
            }
        ])
    }

    function getUserItem({item: user}){
        return(
            <ListItem
                key={user.id}
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider
            >
                <Avatar source={{uri: user.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}    
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}    
                />
                
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
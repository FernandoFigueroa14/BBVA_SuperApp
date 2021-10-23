import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Perfil = ({navigation}) => {
    return (
        <View>
            <Text>Hola Mundo Perfil</Text>
            <Button
            title="Home"
            onPress={()=>navigation.navigate("Home")}
            ></Button>
            
        </View>
    )
}

export default Perfil;

const styles = StyleSheet.create({})
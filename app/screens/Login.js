import {React, useContext, useState} from "react";
import {Text, TextInput, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { AuthContext } from "../context/AuthContext";

const Login = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const val = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"/>

                <TextInput 
                style={styles.input} 
                value={password} 
                placeholder="Password" 
                onChangeText={(text) => setPassword(text)}
                secureTextEntry/>

                <Button title="Login"/>

                <View style={{flexDirection:'row', marginTop: 20}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    wrapper:{
        width:'80%',
    },
    input:{
        marginBottom:12,
        borderWidth:1,
        borderColor: '#bbb',
        borderRadius:5,
        paddingHorizontal:14,
        paddingVertical:5,
    },
    link:{
        color:'blue',
    }
})

export default Login;
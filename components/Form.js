import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native'
import Display from './Display'
import { useNavigation } from '@react-navigation/native'

const Form = () => {

    const navigation= useNavigation();

    const [name,setName] = useState('')
    const [age,setAge] = useState(null)
    const [school,setSchool] = useState('')
    const [college,setCollege] =useState('')

    const student ={
        name,
        age,
        school,
        college,
    }

    return (
        <>
        <View>
            <Text style={{color:'#E62C96',fontSize:22,fontWeight:'bold',margin:13}}>Welcome, Fill in your details ...</Text>
            <TextInput style={styles.input} placeholder='Enter your name' value={name} onChangeText={setName}  />
            <TextInput style={styles.input} placeholder='Enter your age' value={age} onChangeText={setAge} keyboardType={'numeric'} />
            <TextInput style={styles.input} placeholder='Enter your school' value={school} onChangeText={setSchool}  />
            <TextInput style={styles.input} placeholder='Enter your college' value={college} onChangeText={setCollege}  />
        </View>
        <View>
            <TouchableOpacity style={{borderRadius:10, borderWidth:2,borderColor:'#E62C96',backgroundColor:'#E62C96', height:35,width:90,marginLeft:140,marginTop:70,}}
                              onPress={() => navigation.navigate('Display',{student}) }>
                <Text 
                style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:20}}>
                    Submit
                    </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Form

const styles= StyleSheet.create({
    input:{
        borderRadius:4,
        borderColor:'#E62C96',
        borderWidth:1,
        margin:12
    }
})



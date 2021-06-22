import React from 'react'
import { View, Text ,Button,StyleSheet } from 'react-native'


import { useRoute ,useNavigation} from '@react-navigation/native'
import Mentorbox from './Mentorbox'

const Display = () => {
    const route = useRoute();
    const navigation =useNavigation()
    
    // console.log(route.params.student);
    const {name,age,school,college} = route.params.student;
    return (
        <View>
            <Text style ={{color:'#E62C96',fontSize:22,fontWeight:'bold',margin:13}}>Here is what you filled..</Text>
            <Text style={[styles.text , {marginTop:30}]} >Name : {JSON.stringify(name)}</Text>
            <Text style={styles.text}>Age : {JSON.stringify(age)}</Text>
            <Text style={styles.text}>School : {JSON.stringify(school)}</Text>
            <Text style={[styles.text , {marginBottom:30}]}>College : {JSON.stringify(college)}</Text>
            <Button title='Back to the Home page <-' color='#F515ED' margin={18} onPress={()=>navigation.navigate('Mentorbox')} />
            <Text style ={{color:'#E62C96',fontSize:22,fontWeight:'bold',margin:13,textAlign:'center',marginTop:120}}>Thank You!!</Text>
            <Text style ={{color:'#E62C96',fontSize:10,fontWeight:'bold',margin:13,textAlign:'center',marginTop:140}}>Assignment Completed!</Text>

        </View>
    )
}

export default Display;

const styles = StyleSheet.create({
    text: {color:'#E62C96',fontSize:18,fontWeight:'bold',margin:13}
})

import React from 'react';
import {Text,View,StyleSheet,Image,useWindowDimensions,Button,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Form from './Form';


const MentorboxItem = ({item}) => {
  const navigation=useNavigation();
    const {width} = useWindowDimensions()
  return (
    <>
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width,resizeMode:'contain'}]} />
      <Button title='Continue ->' color='#E62C96' onPress={() => navigation.navigate('Form')} width={9} />
      {/* <TouchableOpacity style={{backgroundColor:'#E62C96',marginLeft:100,marginRight:50,width:20,height:20}} >
      <Text style={{marginLeft:180}}>Continue</Text>
      </TouchableOpacity> */}
      </View>
     
    </>
  );
};

export default MentorboxItem;

const styles = StyleSheet.create({
  container:{
   backgroundColor:'white',
   height:529
  },

  image:{
      flex:1,
      height:60
      
  }
})
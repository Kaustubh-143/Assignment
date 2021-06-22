import React,{useState,useRef} from 'react';
import {Text,View,StyleSheet,FlatList,Animated,Button} from 'react-native'

import images from '../images'
import MentorboxItem from './MentorboxItem';
import Paginator from './Paginator';
import Form from './Form';

// import { useNavigation } from '@react-navigation/native';

const Mentorbox = () => {
  // const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;

  const viewConfig =useRef({viewAreaCoveragePercentThreshold:50}).current;  //next slide should be 50% on screen before it changes

  return (
    <>
    <View style={styles.container}>
       <View style={{flex:3}}>
         <FlatList data={images} renderItem={({item}) => <MentorboxItem item={item} /> } 
      horizontal 
      showsHorizontalScrollIndicator={false}
      pagingEnabled 
      bounces={false}
      keyExtractor= {(item) =>item.id }
      onScroll={Animated.event([{nativeEvent:{contentOffset:{ x:scrollX }}}],{
        useNativeDriver:false,
      })} 
      onViewableItemsChanged={viewableItemsChanged}
      scrollEventThrottle={32}
      viewableItemsChanged={viewConfig}
      ref={slidesRef} />

        </View>

        {/* <Button title='Continue' color='#E62C96' onPress={() => console.warn('Pressed') }  /> */}

       <Paginator data={images} scrollX={scrollX}  />

      </View>
    </>
  );
};

export default Mentorbox;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})
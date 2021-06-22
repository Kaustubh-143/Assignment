import React from 'react'
import { StyleSheet, Text, View,Animated,useWindowDimensions } from 'react-native'

const Paginator = ({data,scrollX}) => {
 
    const {width} =useWindowDimensions() //get the width of the screen

    return (
        <View style={{flexDirection:'row', height:64}}>
            {data.map((_, i)=>{
                const inputRange = [(i-1) *width,i*width,(i+1)*width] //this corresponds you the previous dot, current dot and the next dot
                
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10], //width of the previus,current and next dot
                    extrapolate:'clamp',
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3], //width of the previus,current and next dot
                    extrapolate:'clamp',
                })

                return <Animated.View style={[styles.dot, {width:dotWidth,opacity}]} key={i.toString()} />
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:'#493d8a',
        marginHorizontal:8,
    }
})

import { View, Text,Animated,TouchableOpacity,Image,FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants/Theme'
import { Header } from './Header'
import { IMAGES } from '../Constants/Images'
import SubCard from './SubCard'


export default function MainCard({
    name,
    urdu_name,
    time,
    favourite=false
}) {
  return (
    <Animated.View >
      <View style={{
          backgroundColor:COLORS.primary,
          height:520,
          width:SIZES.width-30,
          alignSelf:"center",
          borderRadius:SIZES.padding,
          marginTop:15,
          justifyContent:"flex-end"
      }}>
        <Header title={name} containerStyle={{
        marginTop:0
        }}
        titleStyle={{
          color:COLORS.background
        }}
        />
        <Header title={urdu_name} containerStyle={{
        marginTop:-20
        }}
        titleStyle={{
          color:COLORS.background
        }}
        />
        <View style={{
          backgroundColor:COLORS.background,
          height:410,
          width:SIZES.width-50,
          alignSelf:"center",
          borderRadius:SIZES.padding,
          marginBottom:10
        }}>
        <Header title={"Time وقات"} containerStyle={{
        marginTop:0
        }}
         titleStyle={{
          ...FONTS.h3,
          marginLeft:60
        }}
        rightComponent={
          <TouchableOpacity style={{
            alignSelf:"center",
            backgroundColor:COLORS.primary,
            height:30,
            width:30,
            borderRadius:12,
            justifyContent:"center",
            marginRight:20
        }}
        // onPress={onPress}
        >
        <Image source={IMAGES.heart} style={{
            width:22,
            height:22,
            alignSelf:"center",
            tintColor:favourite?COLORS.red:COLORS.inactive
        }}/>
        </TouchableOpacity>
        }
        />
        <FlatList
        data={time}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>{
          return(
            <SubCard name={item.name} urdu_name={item.urdu_name} time={item.time}/>
          )
        }}
        />
        </View>
      </View>
    </Animated.View>
  )
}
import {View, Text, FlatList,Image,Animated,ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import VerticalCard from '../../Component/VerticalCard';
import {data} from '../../Constants/dummyData';
import FormInput from '../../Component/InputForm';
import {IMAGES} from '../../Constants/Images';
export default function Search() {
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        
      }}>
      <Header title={'Search تفص'} />
      <FormInput
        prependComponent={<View style={{
          justifyContent:"center",
          height:35,
          width:35,
          backgroundColor:COLORS.background,
          borderRadius:12,
          alignSelf:"center"
        }}>
          <Image source={IMAGES.search} style={{
            height:22,
            width:22,
            alignSelf:"center",
            justifyContent:"center"
          }}/> 
        </View>}
        placeholder={'search... تفص'}
        img={IMAGES.filter}
      />
      <Animated.FlatList
        style={{
          marginBottom: SIZES.height < 700 ? 20 : 10,
        }}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return( 
            <Animated.View 
          >
          <VerticalCard key={index} name={item.name} urdu_name={item.urdu_name} is_favourite={item.is_favourite} distance={item.distance} type={item.type}
          />
          </Animated.View>
          )
        }}
      />
    </View>
  );
}

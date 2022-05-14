import {View, Text, FlatList,StyleSheet,Dimensions} from 'react-native';
import React from 'react';
import MainCard from '../../Component/mainCard';
import {COLORS,SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import { data } from '../../Constants/dummyData';
export default function HomeScreen() {    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Header title={'Masjid مسجد'} />
      <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      
      keyExtractor={(item) => item.id}
      horizontal
        renderItem={({item, index}) => {
          return( 
        <View key={index} style={styles.itemWrapper}>
          <MainCard />
          </View>
          )
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    itemWrapper: {
        width:SIZES.width,
        heigth:SIZES.height
    }
})

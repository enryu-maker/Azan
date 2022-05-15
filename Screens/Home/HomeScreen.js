import {View, Text, FlatList,StyleSheet,Animated} from 'react-native';
import React from 'react';
import MainCard from '../../Component/mainCard';
import {COLORS,SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import { data } from '../../Constants/dummyData';
export default function HomeScreen() {    
  const xOffset = new Animated.Value(0);
  const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["45deg", "0deg", "45deg"]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["-45deg", "0deg", "45deg"]
          })
        }
      ]
    };
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Header title={'Masjid مسجد'} />
      <Animated.FlatList
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
        { useNativeDriver: true }
      )}
      pagingEnabled={true}
      data={data}
      showsHorizontalScrollIndicator={false}
      
      keyExtractor={(item) => item.id}
      horizontal
        renderItem={({item, index}) => {
          return( 
        <Animated.View key={index} style={[styles.itemWrapper, transitionAnimation(index)]}>
          <MainCard />
          </Animated.View>
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

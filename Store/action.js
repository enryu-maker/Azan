import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateFavourite = (current_List, newItem) => {
  return async dispatch => {
    if (current_List && newItem) {
      let favourite_list = current_List.push(newItem);
      await AsyncStorage.setItem('favourite', favourite_list);
    }
    dispatch({
      type: 'UPDATE_FAVOURITE',
      payload: favourite_list,
    });
  };
};

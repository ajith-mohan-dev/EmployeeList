import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppTheme from '../../config';
import styles from './style';
const {colors, fontfamily} = AppTheme || {};

const SearchComponent = props => {
  const {data, onSearchList = () => {}} = props || {};
  const [entries, setEntries] = useState('');

  const onSearchPress = async () => {
    let text = entries.toLowerCase();
    let storedData = await AsyncStorage.getItem('EMPLOYEE_DATA');
    let employeeList = JSON.parse(storedData);
    if (entries !== '') {
      const filteredData =
        employeeList &&
        Array.isArray(employeeList) &&
        employeeList.filter((item, index) => {
          return (
            item.name.toLowerCase().match(text) ||
            item.email.toLowerCase().match(text)
          );
        });
      onSearchList(filteredData);
    }
  };

  const onClearPress = async () => {
    setEntries('');
    let storedData = await AsyncStorage.getItem('EMPLOYEE_DATA');
    let employeeList = JSON.parse(storedData);
    onSearchList(employeeList);
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Employee"
          value={entries}
          onChangeText={val => setEntries(val)}
          style={styles.textInput}
          returnKeyType="search"
          onSubmitEditing={onSearchPress}
        />
        {entries !== '' ? (
          <TouchableOpacity onPress={onClearPress}>
            <MaterialIcons name="clear" size={25} color={colors.COLOR_BLACK} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {}}>
            <AntDesignIcon
              name="search1"
              size={25}
              color={colors.COLOR_BLACK}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default SearchComponent;

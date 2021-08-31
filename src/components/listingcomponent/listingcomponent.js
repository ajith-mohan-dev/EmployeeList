import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import AppTheme from '../../config';
import SearchComponent from '../searchcomponent';
import styles from './style';

const {fontfamily, colors} = AppTheme || {};

const Listingcomponent = props => {
  const {dataList, navigation, loading = false} = props || {};

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    setEmployeeList(dataList);
  }, [dataList]);

  const onDetailPress = itemList => {
    navigation.navigate('DetailScreen', {itemList});
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onDetailPress(item)}
        style={{backgroundColor: colors.COLOR_LIGHT_BLACK, marginBottom: 0.8}}>
        <View style={styles.rowContainer}>
          <Image source={{uri: item.profile_image}} style={styles.imageRound} />
          <View style={styles.column}>
            <Text style={styles.bigText}>{item.name}</Text>
            <Text style={styles.normalText}>{item.company?.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <SearchComponent
          data={employeeList}
          onSearchList={filterList => setEmployeeList(filterList)}
        />
        {loading ? (
          <ActivityIndicator size="small" color={colors.COLOR_LIGHT_BLACK} />
        ) : (
          <FlatList
            data={employeeList}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            style={{backgroundColor: colors.COLOR_PISTA}}
          />
        )}
      </View>
    </>
  );
};

export default Listingcomponent;

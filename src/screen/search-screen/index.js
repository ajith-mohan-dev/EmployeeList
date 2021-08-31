import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Listingcomponent from '../../components/listingcomponent/listingcomponent';
import {withNavigation} from 'react-navigation';
import AppTheme from '../../config';

const SearchScreen = ({navigation}) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://www.mocky.io/v2/5d565297300000680030a986')
      .then(response => {
        const {status, data} = response || {};
        if (status === 200) {
          if (Array.isArray(data) && data.length > 0) {
            setEmployeeData(data);
            AsyncStorage.setItem('EMPLOYEE_DATA', JSON.stringify(data));
            setLoading(false);
          }
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Listingcomponent
          dataList={employeeData}
          navigation={navigation}
          loading={loading}
        />
      </View>
    </>
  );
};

export default withNavigation(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

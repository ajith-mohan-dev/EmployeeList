import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './style';

const DetailScreen = props => {
  const {
    route: {
      params: {itemList},
    },
  } = props || {};

  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: itemList.profile_image}}
            style={styles.imageRound}
          />
          <View style={styles.profileColumn}>
            <Text style={styles.nameText}>{itemList.name}</Text>
            <Text style={styles.normalText}>{itemList.email}</Text>
            <Text style={styles.normalText}>{itemList.phone}</Text>
          </View>
        </View>
        <View
          style={[
            styles.profileColumn,
            {
              marginHorizontal: 10,
              marginTop: 10,
            },
          ]}>
          <Text style={styles.nameText}>Address</Text>

          <View style={styles.profileColumn}>
            <Text style={styles.normalText}>
              {`${itemList.address?.suite}, ${itemList.address?.street}`}
            </Text>
            <Text style={styles.normalText}>{itemList.address?.city}</Text>
            <Text style={styles.normalText}>{itemList.address?.zipcode}</Text>
          </View>
        </View>
        <View
          style={[styles.profileColumn, {marginHorizontal: 10, marginTop: 10}]}>
          <Text style={styles.nameText}>Company Details</Text>
          <View style={styles.profileColumn}>
            <Text style={styles.normalText}>{itemList.company?.name}</Text>
            <Text style={styles.normalText}>{itemList.company?.bs}</Text>
            <Text style={styles.normalText}>
              {itemList.company?.catchPhrase}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailScreen;

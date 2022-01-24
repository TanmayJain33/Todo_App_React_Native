import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Delete from 'react-native-vector-icons/MaterialIcons';

export default function TodoItems({item, pressHandler}) {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler(item.key);
      }}>
      <View style={styles.text}>
        <Delete name="delete" size={18} color="#333" />
        <Text style={styles.item}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  item: {
    marginLeft: 10,
  },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
export default class SearchScreen extends Component
{
    render()
    {
    return (
      <View style={styles.container}>
        <Text>Search Screen Here</Text>
      </View>
    )
  }
}
  const styles = StyleSheet.create({
    container:
    {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
  });

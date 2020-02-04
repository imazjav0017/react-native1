import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import PostsScreen from '../screens/postsScreen';
import ProfileScreen from '../screens/profileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';  
import React from 'react'
import SearchScreen from '../screens/searchScreen';
import { createStackNavigator } from 'react-navigation-stack';
const postsStack=createStackNavigator({
    Posts:
    {
        screen:PostsScreen,  
        navigationOptions: {
            headerShown: false,
          } 
    },
    
})
const searchStack=createStackNavigator({
    Search:
    {
        screen:SearchScreen,
        navigationOptions: {
            headerShown: false,
          }
        
    },
})
const profileStack=createStackNavigator({
    Profile:
    {
        screen:ProfileScreen,
        navigationOptions: {
            headerShown: false,
          }
        
    }
})
const screens={
    Posts:{
        screen:postsStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
              <Ionicons name='ios-paper' size={25} color={tintColor} />
            )
          })
    },
    Search:{
        screen:searchStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
              <Ionicons name='ios-search' size={25} color={tintColor} />
            )
          })
    },
    Profile:{
        screen:profileStack,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
              <Ionicons name='ios-person' size={25} color={tintColor} />
            )
          })
    }
}
const TabNavigator=createBottomTabNavigator(screens)
export default createAppContainer(TabNavigator)
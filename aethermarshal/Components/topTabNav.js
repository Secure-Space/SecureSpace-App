import React, {
    useState,
    useEffect
  } from 'react';
  import { StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PersonalScreen from '../Pages/Screens/personalScreen';
import SystemScreen from '../Pages/Screens/systemScreen';
import ActivityScreen from '../Pages/Screens/activityScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

const TopTabNav = ({navigation}) => {
    return(
        <TopTab.Navigator 
          initialRouteName='Personal'
          screenOptions={({ route }) => ({
            tabBarStyle: styles.topTabBarStyle,
            tabBarIcon: ({ focused, color, size, style }) => {
              let iconName;

              if (route.name === 'Personal') {
                  iconName = focused
                      ? 'person-circle'
                      : 'person-circle-outline';
              } else if (route.name === 'System') {
                        iconName = focused 
                            ? 'cog' 
                            : 'cog-outline';
              } else if (route.name === 'Activity') {
                        iconName = focused
                            ? 'stats-chart'
                            : 'stats-chart-outline';
              }

              return <Ionicons name={iconName} size={35} color={color} style={styles.iconHolder} />;
          },
          tabBarActiveTintColor: '#FFBD59',
          tabBarInactiveTintColor: '#606061',
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            opacity: 0
          },
      })}>
            <TopTab.Screen name = 'System' component = {SystemScreen}/>
            <TopTab.Screen name = 'Personal' component = {PersonalScreen}/>
            <TopTab.Screen name = 'Activity' component = {ActivityScreen}/>
        </TopTab.Navigator>
    );
  }

  export default TopTabNav;

  const styles = StyleSheet.create({
    topTabBarStyle: {
      backgroundColor: '#2B2B2B',
      height: 60,
      borderRadius: 10,
      marginBottom: 10,
    },
    iconHolder: {
      height: 40,
      width: 40,
      textAlign: 'center',
      position: 'absolute',
      left: -10,
      bottom: -15,
    }
  })

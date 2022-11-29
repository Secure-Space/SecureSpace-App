import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import {
    Text,
    View
}from 'react-native';

import styles from '../StyleSheet/signInStyle'

const SignIn = () => {
    return(
        <View style={styles.mainView}>
            <Text>SignIn</Text>
        </View>
    )
}

export default SignIn;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import {
    Text,
    View
}from 'react-native';
import styles from '../StyleSheet/signUpStyle'

const SignUp = () => {
    return(
        <View style={styles.mainView}>
            <Text>SignUp</Text>
        </View>
    )
}

export default SignUp;
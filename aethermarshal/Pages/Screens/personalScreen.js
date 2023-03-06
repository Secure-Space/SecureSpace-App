 import React from 'react';
 import {
    View,
    Text,
    StyleSheet,
    ScrollView
 } from 'react-native';

const PersonalScreen = () => {
    return(
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.perDetContainer}></View>
            <View style={styles.emerContContainer}></View>
            <View style={styles.otherContainer}></View>
        </ScrollView>
    );
}

export default PersonalScreen;

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    perDetContainer: {
        width: '95%',
        height: 200,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 10
    },
    emerContContainer: {
        width: '95%',
        height: 160,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 10
    },
    otherContainer: {
        width: '95%',
        height: 100,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 20
    }
});

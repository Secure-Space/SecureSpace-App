 import { EmailAuthProvider } from 'firebase/auth';
import React from 'react';
 import {
    View,
    Text,
    StyleSheet,
    ScrollView
 } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/Entypo'

const PersonalScreen = () => {


    return(
        <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={styles.perDetContainer}>
            <Icon name='user' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 24,
                top: 10,
                left: 10
            }}/>
            <IconS name='dots-three-vertical' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 20,
                top: 12,
                right: 10
            }}/>
            <Text style = {{
                position: 'absolute',
                color: '#FFBD59',
                left: 45,
                top: 10,
                fontSize: 18,
                fontWeight: 600
            }}>Personal Details</Text>
                <View style={styles.lineView}>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2,
                        width: '95%',
                        marginTop: 45,
                        alignItems: 'center'
                    }}
                />
                </View>
                <View style={styles.perDetTextView}>
                    <Text style={styles.perText}> Name: </Text>
                    <Text style={styles.perText}> Age: </Text>
                    <Text style={styles.perText}> Gender: </Text>
                    <Text style={styles.perText}> Email: </Text>
                    <Text style={styles.perText}> Address: </Text>
                    <Text style={styles.perText}> Phone: </Text>
                </View>
             </View>

            <View style={styles.emerContContainer}>
            <Icon name='phone-call' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 22,
                top: 12,
                left: 12
            }}/>
            <IconS name='dots-three-vertical' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 20,
                top: 12,
                right: 10
            }}/>
            <Text style = {{
                position: 'absolute',
                color: '#FFBD59',
                left: 45,
                top: 10,
                fontSize: 18,
                fontWeight: 600
            }}>Emergency Contacts</Text>
                <View style={styles.lineView}>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2,
                        width: '95%',
                        marginTop: 45,
                        alignItems: 'center'
                    }}
                />
                </View>
                <View style={styles.emerContTextView}>
                    <Text style={styles.perText}> 1. -</Text>
                    <Text style={styles.perText}> 2. -</Text>
                    <Text style={styles.perText}> 3. -</Text>
                    <Text style={styles.perText}> Hospital Details: </Text>
                </View>
            </View>

            <View style={styles.otherContainer}>
            <Icon name='bookmark' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 22,
                top: 12,
                left: 12
            }}/>
            <IconS name='dots-three-vertical' 
            style={{
                color: '#FFBD59',
                position: 'absolute',
                fontSize: 20,
                top: 12,
                right: 10
            }}/>
            <Text style = {{
                position: 'absolute',
                color: '#FFBD59',
                left: 45,
                top: 10,
                fontSize: 18,
                fontWeight: 600
            }}>Miscellaneous</Text>
                <View style={styles.lineView}>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2,
                        width: '95%',
                        marginTop: 45,
                        alignItems: 'center'
                    }}
                />
                </View>
                <View style={styles.emerContTextView}>
                    <Text style={styles.perText}> Miscellaneous: </Text>
                </View>
            </View>
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
        height: 220,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 10,
    },
    lineView: {
        alignItems: 'center',
    },
    perDetTextView: {
        marginTop: 5,
        marginLeft: 10
    },
    perText: {
        color: '#FFBD59',
        fontSize: 16,
        lineHeight: 26
    },
    emerContContainer: {
        width: '95%',
        height: 180,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 10
    },
    emerContTextView: {
        marginTop: 5,
        marginLeft: 10
    },
    otherContainer: {
        width: '95%',
        height: 140,
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        marginBottom: 20
    }
});

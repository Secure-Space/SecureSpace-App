import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
}from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome';
import IconII from 'react-native-vector-icons/Ionicons';

import styles from 'aethermarshal/StyleSheet/homeScreenStyle.js'

import { Calendar } from 'react-native-calendars';
import Analytics from '../../Functions/analytics';
import Charts from '../../Functions/charts';

const HomeScreen = ({navigation}) => {

    const navigateF = () => {
        navigation.navigate('Feed')
    }
    const navigateC = () => {
        navigation.navigate('Cloud')
    }
    return(
        <ScrollView style={styles.container}>

            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={require("./../../assets/Images/SSspellwhiteNB.png")}
                />
            </View>

            <View style={styles.calendarView}>
                <Text style={styles.calendarTxt}>Calendar</Text>
                <View style={styles.calendarContainer}>
                    <Calendar 
                        style={{
                            borderRadius: 30,
                            height: '99%',
                          }}
                          theme={{
                            calendarBackground: '#2B2B2B',
                            dayTextColor: '#FFFFFF',
                            textDisabledColor: '#444',
                            monthTextColor: '#FFBD59',
                            arrowColor: '#FFBD59',
                            'stylesheet.calendar.header': {
                                dayTextAtIndex0: {
                                  color: '#FFBD59'
                                },
                              },
                            todayTextColor: '#FFBD59',
                          }}
                    />
                </View>
            </View>
            
            <View style={styles.toolView}>
                <Text style={styles.toolTxt}>Surviellance</Text>
                <View style={styles.toolBtnView}>
                    <TouchableOpacity style={styles.feedBtnP} onPress={navigateF}>
                        <IconFA name='podcast' style={styles.iconP} /> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.feedBtnC} onPress={navigateC}>
                        <IconII name='cloud-upload' style={styles.iconC} /> 
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.userActView}>
                <Text style={styles.userTxt}>User Activities</Text>
                <View style={styles.userActContainer}><Analytics/></View>
            </View>

            <View style={styles.userAnalysis}>
                <View style={styles.userAnalysisContainer}></View>
            </View>

            <View style={styles.notification}>
                <Text style={styles.notifTxt}>Notifications</Text>
                <View style={styles.notifContainer}></View>
            </View>

    </ScrollView>
    );
}

export default HomeScreen;
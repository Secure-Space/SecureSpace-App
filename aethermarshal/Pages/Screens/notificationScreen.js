import React, { useState } from 'react';
import { 
    Text,
    View,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

import styles from 'aethermarshal/StyleSheet/notificationScreenStyle.js'

const NotificationScreen = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [expanded, setExpanded] = useState(true)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const triggerExpanded = () => {
        setExpanded(!expanded);
    }


    return(
    <ScrollView style={styles.container}>

        <View style={styles.logoView}>
            <Text style={styles.heading}>Notification</Text>
            <Image
                style={styles.logo}
                source={require("./../../assets/Images/SSLONB.png")}
            />
        </View>

        <View style={styles.notifView1}>
            <Text style={styles.notifTxt}>Today</Text>
            <View style={styles.notifContainer1}></View>
        </View>

        
        <View style={styles.notifView2}>
            <Text style={styles.notifTxt}>Yesterday</Text>
                <View style={styles.notifContainer2}></View>
        </View>


                <TouchableWithoutFeedback onPress={toggleCollapsed}>
                <View style={styles.header3}>
                    <Text style={styles.notifTxt}>Last week</Text>
                </View>
                </TouchableWithoutFeedback>
                <Collapsible collapsed={collapsed}>
                <View style={styles.notifView3}>
                    <Animatable.View
                        animation={collapsed ? undefined : 'zoomIn'}
                        duration={500}
                        useNativeDriver
                        style={styles.notifContainer3}
                    >
                    </Animatable.View>
                </View>
                </Collapsible>

        {collapsed ?
            <View></View>
            :
            <View></View>
        }

              <TouchableWithoutFeedback onPress={triggerExpanded}>
                <View style={styles.header4}>
                    <Text style={styles.notifTxt}>Miscellaneous</Text>
                </View>
                </TouchableWithoutFeedback>
                <Collapsible collapsed={expanded}>
                <View style={styles.notifView4}>
                    <Animatable.View
                        animation={expanded ? undefined : 'zoomIn'}
                        duration={500}
                        useNativeDriver
                        style={styles.notifContainer4}
                    >
                    </Animatable.View>
                </View>
                </Collapsible>

        {expanded  ?
            <View style={styles.miscellaneousView1}></View>
            :
            <View style={styles.miscellaneousView2}></View>
        }


    </ScrollView>
    );
}

export default NotificationScreen;




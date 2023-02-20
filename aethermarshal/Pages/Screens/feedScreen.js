import React from 'react';
import { 
    Text,
    View,
    ScrollView,
    Image,TouchableOpacity
} from 'react-native';

import styles from 'aethermarshal/StyleSheet/feedScreenStyle.js'


const FeedScreen = () => {
    return(
    <ScrollView style={styles.container}>

        <View style={styles.logoView}>
            <Text style={styles.heading}>Feed</Text>
            <Image
                style={styles.logo}
                source={require("./../../assets/Images/SSLONB.png")}
            />
        </View>

        <View style={styles.feedView}>
            <View style={styles.feedContainer}></View>
        </View>


        <View style={styles.notification}>
            <Text style={styles.notifTxt}>Recent Alerts</Text>
            <View style={styles.notifContainer}></View>
        </View>

    </ScrollView>
    );
}

export default FeedScreen;
import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity, 
    Image
} from 'react-native';

import styles from 'aethermarshal/StyleSheet/profileStyleScreen.js';

import { firebase } from '../../firebase/firebase';
import { getAuth } from 'firebase/auth';

import Icon from 'react-native-vector-icons/Feather';
import TopTabNav from '../../Components/topTabNav';

const ProfileScreen = ({navigation, route}) => {

    const signOut = () => {
        getAuth().signOut();
    }

    const navigateEF = () => {
        navigation.navigate('Edit')
    }
    
    return(

        <View style={styles.fullView}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={signOut} style={styles.icnBtn1}>
                    <Icon name='log-out' style={styles.IconEx}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateEF} style={styles.icnBtn2}>
                    <Icon name='edit' style={styles.IconEd}/>
                </TouchableOpacity>

            </View>
            <View style={styles.bottomView}>
                <View style={styles.profilePicView}>
                </View>
                <Text style={styles.profileTxt}>Allen Baxter</Text>
                <Text style={styles.locationTxt}>London{', '}UK</Text>

                <View style={styles.topTabContainer}>
                    <TopTabNav />
                </View>
            </View>
        </View>

    );
}

export default ProfileScreen;
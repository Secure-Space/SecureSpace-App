import React from 'react';
import {
   View,
   Text,
   StyleSheet,
   ScrollView
} from 'react-native';

const ActivityScreen = () => {
   return(
    <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.UserActContainer}></View>
    </ScrollView>
   );
}

export default ActivityScreen;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2B2B2B'
    },
    UserActContainer: {
        width: '95%',
        height: 200,
        backgroundColor: '#000000',
        borderRadius: 20,
        marginBottom: 10 
    }
});
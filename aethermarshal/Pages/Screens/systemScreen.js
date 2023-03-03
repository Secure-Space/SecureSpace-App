import React, {useState} from 'react';
import {
   View,
   Text,
   Switch,
   StyleSheet,
   ScrollView
} from 'react-native';

const SystemScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   return(
       <ScrollView style={styles.topView}>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>NIGHT MODE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>WORK MODE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>PREMISE LOCKED</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>EMERGENCY ALERTS</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>NOTIFICATION</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>SURVEILLANCE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>FRAME CAPTURE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>BACK UP</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
        </View>
       </ScrollView>
   );
}

export default SystemScreen;

const styles = StyleSheet.create({
    topView: {
        flexGrow: 1, 
        backgroundColor: '#000000',
    },
    switchView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    switchTxt1: {
        fontSize: 18,
        color: '#FFFF',
        marginLeft: 5,
    },
});
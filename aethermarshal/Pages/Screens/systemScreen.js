import React, {useState} from 'react';
import {
   View,
   Text,
   Switch,
   StyleSheet,
   ScrollView
} from 'react-native';

const SystemScreen = () => {

    const [isEnabled_NM, setIsEnabled_NM] = useState(false);
    const [isEnabled_WM, setIsEnabled_WM] = useState(false);
    const [isEnabled_PL, setIsEnabled_PL] = useState(false);
    const [isEnabled_EA, setIsEnabled_EA] = useState(false);
    const [isEnabled_N, setIsEnabled_N] = useState(false);
    const [isEnabled_S, setIsEnabled_S] = useState(false);
    const [isEnabled_FC, setIsEnabled_FC] = useState(false);
    const [isEnabled_BU, setIsEnabled_BU] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch_NM = () => setIsEnabled_NM(previousState => !previousState);
    const toggleSwitch_WM = () => setIsEnabled_WM(previousState => !previousState);
    const toggleSwitch_PL = () => setIsEnabled_PL(previousState => !previousState);
    const toggleSwitch_EA = () => setIsEnabled_EA(previousState => !previousState);
    const toggleSwitch_N = () => setIsEnabled_N(previousState => !previousState);
    const toggleSwitch_S = () => setIsEnabled_S(previousState => !previousState);
    const toggleSwitch_FC = () => setIsEnabled_FC(previousState => !previousState);
    const toggleSwitch_BU = () => setIsEnabled_BU(previousState => !previousState);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


   return(
       <ScrollView style={styles.topView}>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>NIGHT MODE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_NM}
                value={isEnabled_NM}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>WORK MODE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_WM}
                value={isEnabled_WM}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>PREMISE LOCKED</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_PL}
                value={isEnabled_PL}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>EMERGENCY ALERTS</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_EA}
                value={isEnabled_EA}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>NOTIFICATION</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_N}
                value={isEnabled_N}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>SURVEILLANCE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_S}
                value={isEnabled_S}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>FRAME CAPTURE</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_FC}
                value={isEnabled_FC}
                />
        </View>
        <View style={styles.switchView}>
            <Text style={styles.switchTxt1}>BACK UP</Text>
            <Switch
                trackColor={{false: '#767577', true: '#FFBD59'}}
                thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor="#606061"
                onValueChange={toggleSwitch_BU}
                value={isEnabled_BU}
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
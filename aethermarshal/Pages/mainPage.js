import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import * as Font from 'expo-font';

import React, {
  useRef,
  useState
} from 'react';

import styles from '../StyleSheet/mainPageStyle';
import { 
    Button, 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from 'react-native';
 
const MainPage = ({navigation}) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  const navigate = () => {
    navigation.navigate('InfoPage');
  }
  
  const loadFonts = async () => {
    await Font.loadAsync({
      'Blinker-Bold': require('aethermarshal/assets/fonts/blinker/Blinker-Bold.ttf'),
      'Blinker-SemiBold': require('aethermarshal/assets/fonts/blinker/Blinker-SemiBold.ttf'),
      'Blinker-Regular': require('aethermarshal/assets/fonts/blinker/Blinker-Regular.ttf'),
      'RobotoMono-Light': require('aethermarshal/assets/fonts/roboto/RobotoMono-Light.ttf'),
      'GiantRobotArmy': require('aethermarshal/assets/fonts/GiantRobotArmy-Medium.ttf')
    });
    setFontLoaded(true);
  }
  
  React.useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded){
        return (
            <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source = {require('../assets/Images/SSLONB.png')} 
                />
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.heading}>
                    SECURE{'\n'}
                    SPACE
                </Text>
                <TouchableOpacity style={[styles.iconPress, styles.shadowProp]} onPress={navigate}>
                  <Icon name='arrow-right-circle' style={styles.icon} /> 
                </TouchableOpacity>
            </View>
        </View>
        );
  }
   else {
    return null;
  }
};

export default MainPage;



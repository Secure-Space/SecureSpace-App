import Icon from 'react-native-vector-icons/SimpleLineIcons';

import * as Font from 'expo-font';

import React, {
  useState
} from 'react';

import styles from '../StyleSheet/mainPageStyle';
import { 
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
              <Image
                style={styles.logo}
                source = {require('../assets/Images/SSLONB.png')} 
              />
              <Text style={styles.heading}>
                  SECURE{'\n'}
                  SPACE
              </Text>
              <TouchableOpacity style={[styles.iconPress, styles.shadowProp]} onPress={navigate}>
                  <Icon name='arrow-right-circle' style={styles.icon} /> 
              </TouchableOpacity>
        </View>
        );
  }
   else {
    return null;
  }
};

export default MainPage;



import { Overlay } from '@rneui/themed';
import React, {
    useState
} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Components/formSuccStyle';


const FormSuccess = (props) => {

    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
        await Font.loadAsync({
          'Blinker-Bold': require('aethermarshal/assets/fonts/blinker/Blinker-Bold.ttf'),
          'Blinker-SemiBold': require('aethermarshal/assets/fonts/blinker/Blinker-SemiBold.ttf'),
          'RobotoMono-Light': require('aethermarshal/assets/fonts/roboto/RobotoMono-Light.ttf'),
          'RobotoMono-Regular': require('aethermarshal/assets/fonts/roboto/RobotoMono-Regular.ttf')
        });
        setFontLoaded(true);
      }
    
      React.useEffect(() => {
        loadFonts();
      }, []);

 if (fontLoaded) {
    return(
        props.succMessage ?
          <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.close('')}>
                <Text><Icon name='user-check' style={styles.icon}/></Text>
                <Text style={styles.succTxt}>{props.succMessage}</Text>
          </Overlay>
        :
        <Overlay overlayStyle={styles.Overlay} isVisible={true}>
            <ActivityIndicator size={100} color={"#FFBD59"} />
        </Overlay>
 );
} else { 
  return null;
}
}

export default FormSuccess;
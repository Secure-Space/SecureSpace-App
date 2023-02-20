import { Overlay } from '@rneui/themed';
import React, {
    useState
} from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Components/formErrStyle';


const FormError = (props) => {

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
        <Overlay overlayStyle={styles.Overlay} isVisible={true}>
                <Text><Icon name='user-x' style={styles.icon}/></Text>
                <Text style={styles.errTxt}>{props.err}</Text>
                <TouchableOpacity style={styles.tryBtn} onPress={()=>props.hideErrOverlay(false)}>
                    <Text style={styles.tryTxt}>Try Again</Text>
                </TouchableOpacity>
        </Overlay>
 );
} else { 
  return null;
}
}


export default FormError;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as React from 'react';

import styles from '../StyleSheet/mainPageStyle'
import { 
    Button, 
    Text, 
    View, 
    Image,
    TouchableOpacity
} from 'react-native';
 
export default class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fontsLoaded: false
      }
    }
  
    async loadFonts() {
      await Font.loadAsync({
        'GiantRobotArmy-Medium': require('../assets/fonts/GiantRobotArmy-Medium.ttf'),
      });
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this.loadFonts();
    }

  
    render() {
        const navigate = () => {
            this.props.navigation.navigate('SignIn');
        }

      if (this.state.fontsLoaded) {
        return (
            <View style={styles.mainView}>
            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source = {require('../assets/SSLONB.png')} 
                />
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.heading}>
                    SECURE{'\n'}
                    SPACE
                </Text>
            </View>
        </View>
        );
      } else {
        return null;
      }
    }
  }
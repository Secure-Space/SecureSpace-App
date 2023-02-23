import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { firebase } from '../Firebase/firebase';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

import Icon from 'react-native-vector-icons/Feather';
import * as Font from 'expo-font';

import React, {
    useState
} from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
}from 'react-native';

import styles from '../StyleSheet/signInStyle'

import FormError from '../Components/formError';
import FormSuccess from '../Components/formSuccess';


const SignIn = ({ navigation, route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const [errMessage, setErrorMessage] = useState('');
  const [displayFormErr, setDisplayFormErr] = useState(false);

  const [isLoading, setIsLoading] = useState(false);



  const navigateS = () => {
    navigation.navigate('SignUp');
  }

  const navigateIP = () => {
    navigation.navigate('InfoPage');
  }

  const auth = getAuth();

  const validateSignIn = () => {
    var form_inputs = [email,password];

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      setErrorMessage('Please fill in all fields to sign-in');
      return setDisplayFormErr(true); 
    }

    setIsLoading(true);
    signInWithEmailAndPassword(auth,email.trim(),password)
    .then(() => {
      setIsLoading(false);
    }) 
    .catch(err=>{
      setErrorMessage('Credentials are incorrect');
      setIsLoading(false);
      return setDisplayFormErr(true); 
    })
  }

  const loadFonts = async () => {
    await Font.loadAsync({
        'Blinker-Bold': require('aethermarshal/assets/fonts/blinker/Blinker-Bold.ttf'),
        'Blinker-SemiBold': require('aethermarshal/assets/fonts/blinker/Blinker-SemiBold.ttf'),
        'RobotoMono-Light': require('aethermarshal/assets/fonts/roboto/RobotoMono-Light.ttf'),
        'GiantRobotArmy': require('aethermarshal/assets/fonts/GiantRobotArmy-Medium.ttf')
    });
    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded) {
    return(
      <KeyboardAvoidingView
      style={styles.mainView}
      behavior={Platform.OS === 'ios' ? 20 : 15}
    >
        <View style={styles.topView}>
          <Image
            style={styles.logo}
            source = {require('../assets/Images/SSLONB.png')} 
          />
        </View>
        <View style={styles.bottomView}>
          <View style={[styles.signupView, styles.shadowProp]}>
            <View style={{flexDirection: 'row', marginTop: 20, marginRight: 20}}>
              <TouchableOpacity style={styles.iconPress} onPress={navigateIP}>
                <Icon name='chevron-left' style={styles.icon} /> 
              </TouchableOpacity>
                <Text style={[styles.welcomeTxt, { textAlign: 'center' }]}>
                     AETHER {'\n'}
                     MARSHAL
                </Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.formView}>
              <TextInput 
                onChangeText={(val)=>setEmail(val)}
                value={email}
                placeholder={'Enter your Email Address'} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
              <TextInput 
                onChangeText={(val)=>setPassword(val)}
                value={password}
                placeholder={'Enter your Password'} 
                secureTextEntry={true} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
                    
              <TouchableOpacity style={styles.siBtn} onPress={validateSignIn}>
                <Text style={styles.siBtnTxt}>Sign-In</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'grey', fontFamily: 'RobotoMono-Light', letterSpacing: 0.5,}}>Do not have an account?</Text>
                <TouchableOpacity onPress={navigateS}>
                  <Text style={{color: '#FFBD59',fontFamily: 'RobotoMono-Light', letterSpacing: 0.5,}}> Sign-Up</Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
      </View>
    </View>
    {
      displayFormErr == true ?
      <FormError hideErrOverlay={setDisplayFormErr} err={errMessage}/>
      :
      null
    }

    {
      isLoading == true ?
      <FormSuccess/>
      :
      null
    }
    </KeyboardAvoidingView>
  );
  } else { 
    return null;
  }
}

export default SignIn;
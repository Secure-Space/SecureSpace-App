import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { firebase } from '../firebase/firebase';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
// import FormInput from '../Components/formInput';
import FormSubmitButton from '../Components/customButton';
import FormAuth from '../Components/formAuth';
import client from '../api/client';

// import { Formik } from 'formik';
import * as Yup from 'yup';

// import FormError from '../Components/formError';
// import FormSuccess from '../Components/formSuccess';

const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  }, 2500)
}

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value)
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email!').required('Valid Email is Required!'),
  password: Yup.string().trim().min(8, 'Password is too short!').required('Valid Password is Required!'),
})

const SignIn = ({ navigation, route }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName] : value })
  }

  const isValidForm = () => {
    if(!isValidObjField(userInfo)) 
      return updateError('Required all Fields!', setError)

    if(!isValidEmail(email)) 
      return updateError('Invalid Email!', setError) 

    if(!password.trim() || password.length < 8) 
      return updateError('Password is too short!', setError) 

    return true;
  }

  const submitForm = async () => {
    if(isValidForm()){
      try{
        const res = await client.post('/sign-in', {...userInfo});

        if(res.data.success){
          setUserInfo({email: '', password: ''});
        }

        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState();

  // const [errMessage, setErrorMessage] = useState('');
  // const [displayFormErr, setDisplayFormErr] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);



  const navigateS = () => {
    navigation.navigate('SignUp');
  }

  const navigateIP = () => {
    navigation.navigate('InfoPage');
  } 

  // const auth = getAuth();

  // const validateSignIn = () => {
  //   var form_inputs = [email,password];

  //   if (form_inputs.includes('') || form_inputs.includes(undefined)) {
  //     setErrorMessage('Please fill in all fields to sign-in');
  //     return setDisplayFormErr(true); 
  //   }

  //   setIsLoading(true);
  //   signInWithEmailAndPassword(auth,email.trim(),password)
  //   .then(() => {
  //     setIsLoading(false);
  //   }) 
  //   .catch(err=>{
  //     setErrorMessage('Credentials are incorrect');
  //     setIsLoading(false);
  //     return setDisplayFormErr(true); 
  //   })
  // }

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
      <View style={styles.mainView}>
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
                  {error ? (
                    <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
                      {error}
                    </Text> 
                    ) : null}

                <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} style={styles.formView}>
                <FormAuth
                  value={email}
                  onChangeText={value => handleOnChangeText(value, 'email')}
                  label='Email'
                  placeholder='Enter Your Email'
                  autoCapitalize='none'
                  placeholderTextColor= 'grey' 
                />
                <FormAuth
                  value={password}
                  onChangeText={value => handleOnChangeText(value, 'password')}
                  label='Password'
                  placeholder='Enter Your Password'
                  autoCapitalize='none'
                  secureTextEntry
                  placeholderTextColor= 'grey' 
                />
                        
                  {/* <TouchableOpacity style={styles.siBtn} onPress={validateSignIn}>
                    <Text style={styles.siBtnTxt}>Sign-In</Text>
                  </TouchableOpacity> */}

                  {/* <TouchableOpacity style={styles.siBtn} onPress={submitForm}>
                    <Text style={styles.siBtnTxt}>Sign-In</Text>
                  </TouchableOpacity> */}

                  <FormSubmitButton
                    onPress={submitForm}
                    title='Sign-In'
                  />

                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'grey', fontFamily: 'RobotoMono-Light', letterSpacing: 0.5,}}>Do not have an account?</Text>
                    <TouchableOpacity onPress={navigateS}>
                      <Text style={{color: '#FFBD59',fontFamily: 'RobotoMono-Light', letterSpacing: 0.5,}}> Sign-Up</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>

      </View>
    </View>
    {/* {
      displayFormErr == true ?
      <FormError hideErrOverlay={setDisplayFormErr} err={errMessage}/>
      :
      null
    } */}

    {/* {
      isLoading == true ?
      <FormSuccess/>
      :
      null
    } */}

  </View>
  );
  } else { 
    return null;
  }
}

export default SignIn;



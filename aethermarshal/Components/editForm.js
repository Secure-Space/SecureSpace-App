// import { 
//   View, 
//   Text,
//   ScrollView, 
//   StyleSheet,
//   TouchableOpacity
// } from 'react-native';

// import React, { 
//   useEffect 
// } from 'react';

// import Icon from 'react-native-vector-icons/Feather';
// import { LogBox } from 'react-native';

// const EditForm = ({ navigation, route }) => {
//   LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

//   const { setIsEditFormPage } = route.params;

//   const navigatePS = () => {
//     navigation.navigate('ProfileScreen')
//   }

//   useEffect(() => {
//     setIsEditFormPage(true);

//     return () => {
//       setIsEditFormPage(false);
//     };
//   }, []);

//   return (
//     <ScrollView style={styles.FormView}>
      
//       <View style={styles.HeadTxt}>
//         <TouchableOpacity onPress={navigatePS} style={styles.icnBtn1}>
//         <Icon name="chevron-left"
//         style={{
//           color:'#FFBD59',
//           fontSize: 55,
//         }}/>
//         </TouchableOpacity>
//         <Text style={styles.EditTxt}>Edit Profile</Text>
//       </View>

//     </ScrollView>
//   );
// };

// export default EditForm;

// const styles =  StyleSheet.create({
//   FormView: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   HeadTxt: {
//     flexDirection: 'row',
//     marginTop: 35,
//   },
//   EditTxt: {
//     fontSize: 40,
//     color:'#FFBD59',
//     fontWeight: '600'
//   },
//   icnBtn1: {
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }

// })


import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import React, { useEffect } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { LogBox } from 'react-native';

const EditForm = ({ navigation, route }) => {
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  const setIsEditFormPage = route.params?.setIsEditFormPage; // Get the function from route params

  const navigatePS = () => {
    navigation.navigate('ProfileScreen');
  };

  useEffect(() => {
    if (setIsEditFormPage) {
      setIsEditFormPage(true);
    }

    return () => {
      if (setIsEditFormPage) {
        setIsEditFormPage(false);
      }
    };
  }, []);

  return (
    <ScrollView style={styles.FormView}>
      <View style={styles.HeadTxt}>
        <TouchableOpacity onPress={navigatePS} style={styles.icnBtn1}>
          <Icon
            name="chevron-left"
            style={{
              color: '#FFBD59',
              fontSize: 55,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.EditTxt}>Edit Profile</Text>
      </View>
    </ScrollView>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  FormView: {
    flex: 1,
    backgroundColor: 'black',
  },
  HeadTxt: {
    flexDirection: 'row',
    marginTop: 50,
  },
  EditTxt: {
    fontSize: 40,
    color: '#FFBD59',
    fontWeight: '600',
  },
  icnBtn1: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


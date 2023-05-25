import React from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    Text,
    ActivityIndicator 
} from 'react-native';

const FormSubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting
    ? '#2B2B2B'
    : '#FFBD59';

  return (
    submitting ?     
    <TouchableOpacity
        onPress={!submitting ? onPress : null}
        style={[styles.suBtn, { backgroundColor }]}
      >
        <ActivityIndicator size={40} color={"#FFBD59"} />
    </TouchableOpacity> 
    : 
    <TouchableOpacity
        onPress={!submitting ? onPress : null}
        style={[styles.suBtn, { backgroundColor }]}
      >
        <Text style={styles.suBtnTxt}>{title}</Text>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suBtn: {
    width:'90%',
    height: 53,
    backgroundColor: '#FFBD59',
    opacity: 0.7,
    elevation: 10,
    shadowColor: '#000000',
    borderRadius: 20,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  suBtnTxt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily:'Blinker-SemiBold',
    paddingBottom: 5
  }
});


export default FormSubmitButton;
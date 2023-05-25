import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* <Text style={{ fontWeight: 'bold', color: '#FFBD59'}}>{label}</Text> */}
        {error ? (
          <Text style={{ color: 'red', fontSize: 12 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.inputTxt} />
    </>
  );
};

const styles = StyleSheet.create({
    inputTxt: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#FFBD59',
        height: 50,
        fontFamily:'RobotoMono-Light',
        borderRadius: 30, 
        letterSpacing: 0.5,
        paddingLeft: 20,
        color: 'white',
        marginTop: 9,
        marginBottom: 12
      },
});

export default FormInput;
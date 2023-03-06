import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cloud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Systems under Construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Cloud;

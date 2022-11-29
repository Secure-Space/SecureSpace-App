import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2B2B2B'

      },
      topView: {
        width:'100%',
        height: '60%',
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      },
      bottomView: {
        width: '100%',
        height: '40%',
        backgroundColor: '#2B2B2B'
      }
});
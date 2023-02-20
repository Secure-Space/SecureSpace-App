import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Overlay: {
        width: 300,
        height: 300,
        borderRadius: 20,
        marginTop: 25,
        backgroundColor: '#2B2B2B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 100,
        color: '#FFBD59',
    },
    succTxt: {
        fontSize: 20,
        marginTop: 10,
        color: '#FFBD59',
        fontFamily:'RobotoMono-Regular',
        textAlign: 'center',
        padding: 3
    },
    proceedBtn: {
        height: 40,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFBD59',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 6
      },
      proceedTxt: {
        color: '#FFBD59',
        fontSize: 18,
        fontFamily:'RobotoMono-Light',
        marginBottom: 4
      },
});
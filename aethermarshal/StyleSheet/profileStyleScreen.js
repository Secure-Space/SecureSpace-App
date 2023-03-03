import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    fullView: {
        flex: 1,
        // backgroundColor: '#2B2B2B',
        backgroundColor: '#000000',
    },
    topView: {
        // backgroundColor: '#000000',
        backgroundColor: '#2B2B2B',
        width: '100%',
        height: 180,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    icnBtn:{
        height: 30,
        width: 30,
        position: 'absolute',
        top: 40,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconEx: {
        color: '#FFBD59',
        fontSize: 26,
        transform: [{rotateY: '180deg'}]
    },
    IconEd: {
        color: '#FFBD59',
        position: 'absolute',
        fontSize: 26,
        right: 20,
        top: 40,
    },
    bottomView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicView: {
        width: 140,
        height: 140,
        backgroundColor: '#606061',
        position: 'absolute',
        bottom: 540,
        borderRadius: 20
    },
    profileTxt: {
        color: 'white',
        position: 'absolute',
        fontSize: 20,
        top: 70
    },
    locationTxt: {
        color: 'white',
        position: 'absolute',
        fontSize: 20,
        top: 95,
        textAlign: 'center'
    },
    topTabContainer: {
        width: '90%',
        height: 410,
        position: 'absolute',
        top: 140,
        borderRadius: 30,
        backgroundColor: '#000000'
    }
});
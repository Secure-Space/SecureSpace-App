import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        
    },
    logoView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 110,
        marginTop: 30,
        paddingHorizontal: 10,
    },
    heading: {
        color: '#FFBD59',
        fontSize: 40,
        padding: 4,
        fontWeight: 'bold',
        opacity: 0.65,
        marginTop: 15
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    notifView1: {
        padding: 5,
        height: 350,
        width: '100%',
        justifyContent: 'center',
    },
    notifContainer1: {
        backgroundColor: '#2B2B2B',
        opacity: .75,
        height: '85%',
        width: '95%',
        marginLeft: 8,
        marginTop: 10,
        borderRadius: 30
    },
    notifView2: {
        padding: 5,
        height: 350,
        width: '100%',
        justifyContent: 'center',
    },
    notifTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
    },
    notifContainer2: {
        backgroundColor: '#2B2B2B',
        opacity: .75,
        height: '85%',
        width: '95%',
        marginLeft: 8,
        marginTop: 10,
        borderRadius: 30
    },
    header3: {
        marginTop: 10,
        paddingLeft: 5
    },
    notifView3: {
        padding: 5,
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notifContainer3: {
        backgroundColor: '#202020',
        opacity: .75,
        height: '95%',
        width: '95%',
        borderRadius: 30,
    },
    header4: {
        marginTop: 10,
        paddingLeft: 5
    },
    notifView4: {
        padding: 5,
        height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifContainer4: {
        backgroundColor: '#202020',
        opacity: .75,
        height: '95%',
        width: '95%',
        borderRadius: 30,
    },
    miscellaneousView1: {   
        marginBottom: 80,
    },
    miscellaneousView2: {
        marginBottom: 80,
    } 
});
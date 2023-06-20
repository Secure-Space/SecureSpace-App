import { BackgroundImage } from '@rneui/base';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
    const openImageLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }

        if (status === 'granted') {
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
            });

            const updatedResponse = { ...response, canceled: response.cancelled }; // Create a new object with the updated key

            console.log(updatedResponse); // Use the updated response object

            if (!updatedResponse.canceled) {
                // Handle the non-cancelled response
            }
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtnContainer}>
                    <Text style={styles.uploadBtn}>
                        Upload Profile Image
                    </Text>
                </TouchableOpacity>
                <Text style={styles.skip}>Skip</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadBtnContainer: {
        height: 125,
        width: 125,
        borderRadius: 125/2,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 1,
    },
    uploadBtn: {
        textAlign: 'center', 
        fontSize: 16,
        opacity: 0.3,
        fontWeight: 'bold'
    },
    skip: {
        textAlign: 'center',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
        opacity: 0.5,
    }
});

export default ImageUpload;

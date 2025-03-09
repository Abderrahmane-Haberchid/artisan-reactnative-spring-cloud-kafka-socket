import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const home = () => {

    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0]); // Call upload function after picking
    }
  };

    const uploadImage = async (asset: any) => {
        const formData: FormData = new FormData();
        formData.append('image', {
            uri: asset.uri,
            type: 'image/jpeg', // Adjust based on your image type
            name: 'image.jpg', // Adjust name as needed
        });

        try {
            const response = await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload successful:', response.data);
            Alert.alert("Upload Successful");

        } catch (error) {
            console.error('Upload error:', error);
            Alert.alert("Upload Failed");
        }
    };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Upload picture</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
   
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
        height: '100%',
        width: '100%',
        paddingTop: -20
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})
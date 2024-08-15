import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from 'react-native';

const GalleryScreen = () => {
  const images = [{
    id: '1',
    title: 'Image 1',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Image 2',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    title: 'Image 3',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '4',
    title: 'Image 4',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '5',
    title: 'Image 5',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '6',
    title: 'Image 6',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '7',
    title: 'Image 7',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '8',
    title: 'Image 8',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '9',
    title: 'Image 9',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '10',
    title: 'Image 10',
    url: 'https://tinyurl.com/42evm3m3'
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {images.map(image => <View key={image.id} style={styles.imageContainer}>
            <Image source={{
          uri: image.url
        }} style={styles.image} />
            <Text style={styles.imageTitle}>{image.title}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  imageContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10
  },
  imageTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#333'
  }
});
export default GalleryScreen;
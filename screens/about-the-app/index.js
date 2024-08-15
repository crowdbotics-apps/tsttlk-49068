import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";

const AboutTheAppScreen = params => {
  const [ImageSource, setImageSource] = useState();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  useEffect(() => {
    setText1("We have created AI aggregator service tailored for news media, SMM, and Affiliate agency Generates Titles, Descriptions, Images, Animations, Videos, Rewrites, Summaries");
    setText2("Contact us via e-mail vadym@tuluko.eu");
    setImageSource(require("./assets/Frame21.png"));
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.imgScroller}>
        <Image source={ImageSource} />
        <Image style={styles.threeDots} source={require("./assets/3Dots.png")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff"
  },
  imgScroller: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  threeDots: {
    marginTop: 20
  },
  textContainer: {
    paddingHorizontal: 20
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 18,
    marginVertical: 10
  }
});
export default AboutTheAppScreen;
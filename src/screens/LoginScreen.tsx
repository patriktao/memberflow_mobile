import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const image = require("../images/login_image.jpg");

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.text}> Memberflow. </Text>
        <Text style={styles.text}> Login 3</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter personal number"
          autoCapitalize="none"
          keyboardType="number-pad"
          textContentType="password"
          autoFocus={true}
          clearButtonMode='while-editing'
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          keyboardType="number-pad"
          textContentType="password"
          autoFocus={true}
          clearButtonMode='while-editing'
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: 340,
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  input: {
    height: 58,
    magrinBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});

export default LoginScreen;

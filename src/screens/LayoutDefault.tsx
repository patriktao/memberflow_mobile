
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const LayoutDefault = () => {
  return (
    <View style={styles.container}>
        <View style={styles.navigation}>
            <Text>Navigation</Text>
        </View>
        <View style={styles.body}>
            <Text>Landing Screen</Text>
        </View>
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
    },
    footer: {
        flex: 1,
    },
  });

export default LayoutDefault;
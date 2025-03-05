import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const landing = () => {
  return (
    <View>
      <Link href={"/contact"}>Go to caontact</Link>
    </View>
  )
}

export default landing

const styles = StyleSheet.create({})
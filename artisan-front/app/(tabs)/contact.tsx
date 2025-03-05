import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const contact = () => {
  return (
    <View>
       <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: "YOYO",
        }}
      />
      <Link href={"/submit"}>Submit now</Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({})
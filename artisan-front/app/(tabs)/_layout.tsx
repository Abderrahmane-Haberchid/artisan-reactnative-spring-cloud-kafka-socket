import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'red'
        },
      }}
    />
  )
}

export default _layout

const styles = StyleSheet.create({})
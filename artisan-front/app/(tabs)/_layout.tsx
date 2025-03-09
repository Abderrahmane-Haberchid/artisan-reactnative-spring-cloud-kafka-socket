import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs  screenOptions={{ 
            tabBarActiveTintColor: '#3498db',
            headerShown: false,
            headerStatusBarHeight: 0,
            tabBarStyle: {
              paddingBottom: 0,  
              paddingTop: 20
            }
          }}>
      

    <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

    <Tabs.Screen
        name='contact'
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />
        }}
      />

    <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
        }}
      />

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})
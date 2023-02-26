import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CreateContact from './screens/CreateContact'
import MyContact from './screens/MyContact'
import Profile from './screens/Profile'

const Stack=createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyContact'>
        <Stack.Screen name='MyContact' component={MyContact}/>
        <Stack.Screen name='CreateContact' component={CreateContact}/>
        <Stack.Screen name='Profile' component={Profile}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
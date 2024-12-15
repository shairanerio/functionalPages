import { Tabs } from "expo-router"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { DrawerContent } from "@react-navigation/drawer"
import { Drawer } from "expo-router/drawer"

const _layout = () => {
  return ( 
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'gray',
        tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'home': 'home-outline'} size={24} color='black'/>
        }}/>
      <Tabs.Screen name="profile" options={{
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'gray',
        tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'account': 'account-outline'} size={24} color='black'/>
        }}/>
      <Tabs.Screen name="settings" options={{
        headerShown: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'gray',
        tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'cog': 'cog-outline'} size={24} color='black'/>
        }}/>
    </Tabs>
  )
}

export default _layout
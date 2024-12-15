import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen
          
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        /> 
        <Drawer.Screen name='settings' options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}/>

        <Drawer.Screen name='Log out' options={{
          drawerLabel: 'Log Out',
        }}/>
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default _layout

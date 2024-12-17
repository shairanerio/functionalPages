import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >

        <Drawer.Screen name="propayl" options={{
            drawerLabel: 'Profile Pic',
            title: 'Profile Pic',
          }}
          />
        <Drawer.Screen name="(tabs)" options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        /> 
        <Drawer.Screen name='settings' options={{
            drawerLabel: 'Settings',
            title: 'Settings',
          }}
          />
        <Drawer.Screen name="logout" options={{
            drawerLabel: 'Log Out',
            title: 'Log Out',
          }}
          />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default _layout

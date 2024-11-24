import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default _layout
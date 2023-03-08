import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { StoreProvider } from './scr/globalStates/contexts/Store';

import { COLORS } from './scr/constants';
import { RestaurantDetail } from './scr/screens/RestaurantDetail';
import { RestaurantList } from './scr/screens/RestaurantsList';

export default function App() {
  return (
    // <SafeAreaView>
    <StoreProvider>
      <View style={styles.container}>
        <RestaurantList />
        {/* <RestaurantDetail /> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </StoreProvider>

    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
    paddingTop: 35,
  },
});

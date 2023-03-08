import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RestaurantItem } from '../components/RestaurantItem';

import restaurantData from '../../assets/data/restaurants.json';
import HeaderTab from '../components/headerTab';
import Categories from '../components/categories';
import { SearchBar } from '../components/searchBar';

export const RestaurantList = () => {
  return (
    <>
      <View style={styles.header}>
        <HeaderTab />
        <SearchBar />
        <Categories />
      </View>
      <FlatList
        data={restaurantData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantItem
            name={item.name}
            image={item.image}
            rating={item.rating}
            deliveryFee={item.deliveryFee}
            minDeliveryTime={item.minDeliveryTime}
            maxDeliveryTime={item.maxDeliveryTime}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    padding: 10,
  },
});

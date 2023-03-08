import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import restaurantData from '../../assets/data/restaurants.json';
import { COLORS } from '../constants';

import { RestaurantItem } from '../components/RestaurantItem';
import { DishListItem } from '../components/DishListItem';
import RestaurantDetailHeader from '../components/RestaurantDetailHeader';

type Props = {};
const restaurant = restaurantData[0];
export const RestaurantDetail = (props: Props) => {
  return (
    <View style={styles.screen}>
      <RestaurantItem
        name={restaurant.name}
        image={restaurant.image}
        rating={restaurant.rating}
        deliveryFee={restaurant.deliveryFee}
        minDeliveryTime={restaurant.minDeliveryTime}
        maxDeliveryTime={restaurant.maxDeliveryTime}
      />
      <Text style={styles.menu}> Menu</Text>

      <FlatList
        data={restaurant.dishes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  menu: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

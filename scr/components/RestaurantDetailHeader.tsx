import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
import { RestaurantItem } from './RestaurantItem';

type RestaurantDetailHeaderProps = {
  name: string;
  image: string;
  rating: number;
  deliveryFee: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
};
export const RestaurantDetailHeader = ({
  name,
  image,
  rating,
  deliveryFee,
  minDeliveryTime,
  maxDeliveryTime,
}: RestaurantDetailHeaderProps) => {
  return (
    <View style={styles.container}>
      <RestaurantItem
        name={name}
        image={image}
        rating={rating}
        deliveryFee={deliveryFee}
        minDeliveryTime={minDeliveryTime}
        maxDeliveryTime={maxDeliveryTime}
      />
    </View>
  );
};
export default RestaurantDetailHeader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    padding: 10,
  },
});

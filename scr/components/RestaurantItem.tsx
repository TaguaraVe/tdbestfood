import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
import StarRating from './StarRating';

type RestaurantItemProps = {
  name: string;
  image: string;
  rating: number;
  deliveryFee: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
};
export const RestaurantItem = ({
  name,
  image,
  rating,
  deliveryFee,
  minDeliveryTime,
  maxDeliveryTime,
}: RestaurantItemProps) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold]}>
            Delivery Fee:<Text style={styles.text}> ${deliveryFee}</Text>
          </Text>
          <Text style={styles.bold}>
            <StarRating rating={rating} />
          </Text>
        </View>

        <Text style={[styles.text, styles.bold]}>
          Delivery Time:{' '}
          <Text style={styles.text}>
            {minDeliveryTime} - {maxDeliveryTime} minutes
          </Text>
        </Text>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: COLORS.gray,
  },
  bold: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

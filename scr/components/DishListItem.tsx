import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants';
type DishProps = {
  dish: {
    name: string;
    description: string;
    price: number;
    image: string;
  };
};
export const DishListItem = ({ dish }: DishProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{dish.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {dish.description}
          </Text>
          <Text style={styles.price}>Price: ${dish.price}</Text>
        </View>
        {dish.image && (
          <Image source={{ uri: dish.image }} style={styles.image} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cardBg,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  title: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  description: {},

  price: {
    fontSize: 16,
  },
  image: {
    width: 100,
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
});

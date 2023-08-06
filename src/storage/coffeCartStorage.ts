import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { CoffeCartItemProps } from '../data/cartData';

const  CART_COFFES = '@ignite_coffe_delivery:cart';

export async function  cartGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_COFFES);
    const cart: CoffeCartItemProps[] = storage ? JSON.parse(storage) : [];

    return cart;
  } catch (error) {
    Alert.alert('Opa', 'Não foi possível obter os itens do carrinho.');

    return [];
  }
}

export async function coffeCartAdd(newCoffe: CoffeCartItemProps) {
  try {
    const response = await cartGetAll();
    const storedCart = response ? response : [];

    const storage = JSON.stringify([...storedCart, newCoffe]);

    await AsyncStorage.setItem(CART_COFFES, storage);
  } catch (error) {
    throw error;
  }
}

export async function cartItemRemove(id: string) {
  try {
    const storage = await cartGetAll();

    const filtered = storage.filter( coffe => coffe.id !== id);
    const coffes = JSON.stringify(filtered);

    await AsyncStorage.setItem(CART_COFFES, coffes);
  } catch (error) {
    throw error;
  }
}
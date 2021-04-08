import StoreProvider from '../utils/store-provider';
import AuthStore from './auth.store';
import UserStore from './user.store';

export const stores = {
  AuthStore,
  UserStore,
};

Object.keys(stores).forEach((store) => {
  StoreProvider.addStore(store, stores[store]);
});

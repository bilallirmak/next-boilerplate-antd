import StoreProvider from '../utils/store-provider';
import AuthStore from './auth.store';
import UserStore from './user.store';
import {createContext, useContext} from "react";

const StoreContext = createContext()

export const StoreWrap = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

/* Hook to use store in any functional component */
export const useStore = () => useContext(StoreContext)


export const stores = {
  AuthStore,
  UserStore,
};

Object.keys(stores).forEach((store) => {
  StoreProvider.addStore(store, stores[store]);
});

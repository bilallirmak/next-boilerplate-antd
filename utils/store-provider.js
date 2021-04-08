class _StoreProvider {
  stores = {};

  addStore(name, store) {
    if (this.stores[name]) {
      throw new Error('same_name_store');
    }

    this.stores[name] = store;
  }

  getStore(name) {
    if (!this.stores[name]) {
      throw new Error('store_not_found');
    }

    return this.stores[name];
  }
}

const StoreProvider = new _StoreProvider();
export default StoreProvider;

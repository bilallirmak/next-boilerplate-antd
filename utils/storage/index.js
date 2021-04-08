import * as Adapter from './adapters/local-storage.adapter'

const set = async (key, value) => {
  return Adapter.set(key, value);
};

const remove = async key => {
  return Adapter.remove(key);
};

const get = async (key) => {
  return Adapter.get(key)
};

const clear = async () => {
  return Adapter.clear()
}


const StorageService = {
  set,
  remove,
  get,
  clear
}

export default StorageService

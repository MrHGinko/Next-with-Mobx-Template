import { createContext, useContext } from 'react';
import countStore from './countStore';

class RootStore {
	// 挂载全局store
	Counter = countStore;
}

const store = new RootStore();

const context = createContext(store);

export default store;

export function useStore() {
	return useContext(context);
}

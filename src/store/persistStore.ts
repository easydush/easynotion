import { persistStore } from 'redux-persist';
import store from './store';

// @ts-ignore
export default persistStore(store);

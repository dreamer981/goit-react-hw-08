import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage kullanacağız
import authReducer from './auth/slice'; // auth reducer
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

// persist config
const authPersistConfig = {
  key: 'auth', // Bu key ile localStorage'a kaydedilecek
  storage, // Hangi depolamayı kullanacağımızı belirtiyoruz (burada localStorage)
  whitelist: ['token'], // Sadece token'ı saklıyoruz, user bilgisi saklanmıyor
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filters: filtersReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export let persistor = persistStore(store);
export default store;
import { configureStore } from '@reduxjs/toolkit';
import { sideMenuSlice, taskSlice, themeSlice } from './slices';

// export const store = configureStore({
//   reducer: {
//     theme: themeSlice.reducer,
//     sideMenu: sideMenuSlice.reducer,
//     task: taskSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { sideMenuSlice, taskSlice, themeSlice } from './slices';
import storage from 'redux-persist/lib/storage'; // usa localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['task', 'theme', 'sideMenu'],
};

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  sideMenu: sideMenuSlice.reducer,
  task: taskSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

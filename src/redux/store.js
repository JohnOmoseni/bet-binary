import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppStateReducer from "./features/appStateSlice";
import DashboardStateReducer from "./features/dashboardStateSlice";
import ChatbotStateReducer from "./features/chatbotSlice";
import UserSlice from "./features/userSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  version: 1,
  storage,
};
const reducer = combineReducers({
  userState: UserSlice,
  appState: AppStateReducer,
  dashboardState: DashboardStateReducer,
  chatbotState: ChatbotStateReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

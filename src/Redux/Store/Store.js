import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Combine";
import { logger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, thunk)
  // other store enhancers if any
);
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["authGoogle"],
};
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);

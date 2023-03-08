import React, { useContext, useEffect, useReducer } from "react";

import cartItems from "../data";

import reducer from "../reducers/reducer";

// 1.create a context
const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  totalQuantity: 0,
  totalPrize: 0,
};

// 2.create a provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear all btn fn
  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  // remove btn fn
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // increase quantity
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };

  // decrease quantity
  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  const calculateTotals = () => {
    dispatch({ type: "CALCULATE_TOTALS" });
  };

  useEffect(() => {
    calculateTotals();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        removeItem,
        increaseItem,
        decreaseItem,
        calculateTotals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 3.export the APP context as global contex
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// context for set the data, provider for get the data
export { AppContext, AppProvider };

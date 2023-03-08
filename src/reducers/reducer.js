const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ITEMS":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      const id = action.payload;
      const remainingItem = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: remainingItem };
    case "INCREASE_ITEM":
      const increasedItems = state.cart.map((item) => {
        if (item.id === action.payload) {
          const updateItem = {
            ...item,
            quantity: item.quantity++,
          };
          return updateItem;
        } else {
          return item;
        }
      });
      return { ...state, cart: increasedItems };
    case "DECREASE_ITEM":
      const decreasedItems = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            const updateItem = {
              ...item,
              quantity: item.quantity--,
            };
            return updateItem;
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity >= 1);
      return { ...state, cart: decreasedItems };
    case "CALCULATE_TOTALS":
      let totalQuantity = 0;
      let totalPrize = 0;
      state.cart.forEach((item) => {
        const quantity = item.quantity;
        const price = item.price;
        totalQuantity = totalQuantity + quantity;
        totalPrize = totalQuantity * price;
      });
      return {
        ...state,
        totalQuantity: totalQuantity,
        totalPrize: totalPrize.toFixed(2),
      };
    default:
      return { ...state };
  }
};

export default reducer;

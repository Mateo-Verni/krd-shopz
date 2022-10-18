import { createContext, useState, useEffect } from "react";

export const CreateCartContext = createContext();

export const CartContext = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  const onAdd = (item) => {
    const itemExists = contextValue.find((element) => element.id === item.id);
    if (itemExists) {
      const newState = contextValue.filter((e) => e.id !== itemExists.id);
      setContextValue([
        ...newState,
        { ...itemExists, quantity: itemExists.quantity + item.quantity },
      ]);
      return;
    }
    setContextValue([...contextValue, item]);
  };

  const onDelete = (id) => {
    const newState = contextValue.filter((element) => element.id !== id);
    setContextValue(newState);
  };

  return (
    <CreateCartContext.Provider value={{ contextValue, onAdd, onDelete }}>
      {children}
    </CreateCartContext.Provider>
  );
};

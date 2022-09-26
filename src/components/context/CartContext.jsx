import { createContext, useState, useEffect } from "react";

export const CreateCartContext = createContext();

export const CartContext = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  const onAdd = (item) => {
    // SI CONTEXT VALUE TIENE UN ELEMENTO CON EL ID DE ITEM.ID NO LO AGREGO
    const itemExists = contextValue.find((element) => element.id === item.id);
    if (itemExists) return;
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

import { createContext, useCallback, useEffect, useState } from "react";

interface CardItems {
    IDs: Array<number>;
    setIDsData(ID: number): void;
}

export const CartContext = createContext<CardItems>({
    IDs: [],
    setIDsData: () => { },
});


function CartContextProvider({ children }: { children: any }) {

    const [IDs, setIDs] = useState<Array<number>>([]);

    const setIDsData = (ID: number) => { setIDs([...IDs, ID]) };

    const contextValue = {
        IDs: [],
        setIDsData: useCallback((ID: number) => setIDsData(ID), []),
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
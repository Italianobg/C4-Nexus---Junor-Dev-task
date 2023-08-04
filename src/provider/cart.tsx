import { createContext, useCallback, useState } from "react";

interface CardItems {
    cart: Array<number>;
    setCartData(ID: Array<number>): void;
}

export const CartContext = createContext<CardItems>({
    cart: [],
    setCartData: () => { },
});


function CartContextProvider({ children }: { children: any }) {

    const [IDs, setIDs] = useState<Array<number>>([]);

    const setCartData = (IDs: Array<number>) => {
        setIDs([...IDs])
    };

    const contextValue = {
        cart: IDs,
        setCartData: useCallback((IDs: Array<number>) => setCartData(IDs), []),
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
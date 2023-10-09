import React, {useEffect, useState} from "react";


export const CartContext = React.createContext({
    goods: [],
})

export const CartContextWrapper = ({children}) => {
    const [goods, setGoods] = useState(JSON.parse(localStorage.getItem('goods')) || []);

    useEffect(() => {
        localStorage.setItem('goods', JSON.stringify(goods));
    }, [goods])
    return <CartContext.Provider value={{
        goods, setGoods,
    }}>
        {children}
    </CartContext.Provider>
}

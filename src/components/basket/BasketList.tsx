import React, {FC} from 'react';

import BasketItem from "./BasketItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const BasketList:FC = () => {
    const state = useTypedSelector(item => item.basket.data)

    return (
        <div className='basket-list'>
            { state.length === 0
                ?
                <div>Корзина пуста!!!</div>
                :
                state.map(item =>
                    <BasketItem
                        props={item}
                        key={item.id}
                    />
                )
            }
        </div>
    );
};

export default BasketList;
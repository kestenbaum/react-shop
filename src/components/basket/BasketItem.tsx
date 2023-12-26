import React, {FC} from 'react';

import MyImage from "../UI/image/MyImage";
import MyButton from "../UI/button/MyButton"

import {useDispatch} from "react-redux";
import {removeBasketReducerAction} from "../../store/reducers/basketReducer";

import {IBasket} from "../../types";


const BasketItem:FC<IBasket> = (props) => {
    const {id,img, current, title, cost} = props
    const dispatch = useDispatch()
    const removeItem = (item:any) => dispatch(removeBasketReducerAction(item.id))

    return (
        <div className='basket-item'>
            <div className='basket-description'>
                <div className='title-game'>
                    {title}
                </div>
                <MyImage
                    style={{width: 50, height: 50}}
                    src={img}
                />
            </div>
            <div className='basket-option'>
                 <div className='basket-price'>
                   Стоимость: {current}{cost}
                 </div>
                 <MyButton
                    onClick={() => removeItem(id)}
                 >Удалить</MyButton>
            </div>

        </div>
    );
};

export default BasketItem;
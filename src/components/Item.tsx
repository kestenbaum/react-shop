import React, {FC, useState} from 'react';

import {itemProps} from "../types";

import MyImage from "./UI/image/MyImage";
import MyButton from "./UI/button/MyButton";

import {basketReducerAction} from "../store/reducers/basketReducer";
import {useDispatch} from "react-redux";

const Item:FC<itemProps> = ({props}) => {
    const dispatch = useDispatch()

    const addItemToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(basketReducerAction(props))
    }

    return (
        <div className='item'>
            <h2 className='item-title'>{props.title}</h2>
            <MyImage src = {props.img}/>
            <span className='item-body'>{props.body}</span>
            <span className='item-buy'>
                <span className='item-price'>
                    <span className='item-current'>{props.current}</span>
                    <span className='item-cost'>{props.cost}</span>
                </span>
                <MyButton
                    onClick={addItemToBasket}
                >Купить</MyButton>
            </span>
        </div>
    );
};

export default Item;
import React, {FC, useState} from 'react';
import {IItem} from "../types";
import MyImage from "./UI/image/MyImage";
import MyButton from "./UI/button/MyButton";
import {basketReducerAction} from "../store/reducers/basketReducer";
import {useDispatch} from "react-redux";

interface itemProps {
    props: IItem
}

const Item:FC<itemProps> = ({props}) => {

    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState<boolean>(false)

    const addItemToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(basketReducerAction(props))
        setDisabled(true)
    }

    return (
        <div className='item'>
            <h2 className='item-title'>{props.title}</h2>
            <MyImage
                src = {props.img}
            />
            <span className='item-body'>{props.body}</span>
            <span className='item-buy'>
                <span className='item-price'>
                    <span className='item-current'>{props.current}</span>
                    <span className='item-cost'>{props.cost}</span>
                </span>
                <MyButton
                    onClick={addItemToBasket}
                    disabled={disabled}
                >Купить</MyButton>
            </span>
        </div>
    );
};

export default Item;
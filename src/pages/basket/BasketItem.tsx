import React, {FC} from 'react';
import {IBasket} from "../../types";
import MyImage from "../../components/UI/image/MyImage";
import MyButton from "../../components/UI/button/MyButton";
import {useDispatch} from "react-redux";
import {removeBasketReducerAction} from "../../store/reducers/basketReducer";


interface basketItemProps {
    props?: IBasket
}

const BasketItem:FC<basketItemProps> = (props) => {
    const dispatch = useDispatch()

    const removeItem = (item:any) => {
        dispatch(removeBasketReducerAction(item.id))
    }

    return (
        <div className='basket-item'>
            <div className='basket-description'>
                <div className='title-game'>
                    {props.props?.title}
                </div>
                <MyImage
                    style={{width: 50, height: 50}}
                    src={props.props?.img}
                />
            </div>
            <div className='basket-option'>
                 <div className='basket-price'>
                   Стоимость: {props.props?.current}{props.props?.cost}
                 </div>
                 <MyButton
                    onClick={removeItem}
                 >Удалить</MyButton>
            </div>

        </div>
    );
};

export default BasketItem;
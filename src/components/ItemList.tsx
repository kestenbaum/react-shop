import React, {FC} from 'react';
import Item from "./Item";
import {useTypedSelector} from "../hooks/useTypedSelector";

const ItemList:FC = () => {

    const state = useTypedSelector(state => state.game.data)

    return (
        <div className='item-wrapper'>
            <div className='container'>
                <div className='item-list'>
                    {state.map(item =>
                        <Item
                            key={item.id}
                            props={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemList;
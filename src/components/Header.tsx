import React, {FC, useMemo, useState} from 'react';
import {BsFillBasketFill} from 'react-icons/bs'
import {IconContext} from "react-icons";
import MyButton from "./UI/button/MyButton";
import {useTypedSelector} from "./hooks/useTypedSelector";
import MyModal from "./UI/modal/MyModal";
import BasketList from "./pages/basket/BasketList";


const Header:FC = () => {

    const state = useTypedSelector(item => item.basket.data)
    const [modal, setModal] = useState<boolean>(false)

    const openBasket = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setModal(true)
    }

    const allPrice = useMemo(() => {
        return state.reduce((total, item) => {
            return total + item.current
        }, 0)
    }, [state])

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-logo'>
                        Game-Shop
                    </div>
                    <MyButton style={{display: 'flex', gap: 20}}
                        onClick={openBasket}
                    >
                        <IconContext.Provider value={{ color: "white", className: "header-icon" }}>
                            <div>
                                <BsFillBasketFill />
                            </div>
                        </IconContext.Provider>
                        <div className='header-balance'>
                            {allPrice}
                            <div className='currency'>UAH</div>
                        </div>
                    </MyButton>
                </div>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
               <BasketList/>
            </MyModal>
        </header>
    );
};

export default Header;
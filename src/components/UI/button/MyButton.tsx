import React, {FC} from 'react';
import style from './MyButton.module.css'

interface buttonProps extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    disabled?: boolean
}

const MyButton:FC<buttonProps> = (props) => {
    const {children, ...rest} = props
    return (
        <button
            {...rest}
            className={style.btn}
        >
            {children}
        </button>
    );
};

export default MyButton;
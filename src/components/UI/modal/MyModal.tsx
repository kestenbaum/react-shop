import React, {FC} from 'react';
import style from "./MyModal.module.css"

interface IModal {
    children: React.ReactNode
    props?: any
    visible: boolean
    setVisible?: any
}

const MyModal:FC<IModal> = (props) => {
    const rootClasses = [style.modal]
    const {children , visible, setVisible} = props

    if (visible) {
        rootClasses.push(style.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
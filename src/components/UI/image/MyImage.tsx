import React, {FC} from 'react';

interface imageProps extends React.ImgHTMLAttributes<any>{
    props?: any
}

const MyImage:FC<imageProps> = ({...props}) => {
    return (
        <img
            alt='img'
            {...props}
        />
    );
};

export default MyImage;
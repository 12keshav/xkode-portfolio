import React from 'react'

const ImageIcon = ({ className = '', src: image,  ...restProps }) => {
    return (
        <img
            className={className}
            alt={'icon'}
            src={image}
            style={{ width: 'auto'}}
            {...restProps}
        />
    );
}

export default ImageIcon;

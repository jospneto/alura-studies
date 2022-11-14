import React from 'react';
import style from './Button.module.scss';

interface Props {
    texto: string, 
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void | undefined
}

function Button({texto, type, onClick}: Props) {
    return(
        <button type={type} onClick={onClick} className={style.botao}>{texto}</button>
    )
}

export default Button;
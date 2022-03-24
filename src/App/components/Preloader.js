import React from 'react';
import preloader from './../../icons/preloader.svg'

export default function Preloader() {
    return (
        <img src={preloader} style={{position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', transform: 'scale(2)'}}/>
    )
}
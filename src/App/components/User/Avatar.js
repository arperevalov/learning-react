import React from 'react';

export default function Avatar(props) {

    return (
        <div className='user__avatar'>
            {
                !props.photos ? NameToLetters(props.name) : props.photos.small ? <img src={props.photos.small}/> :NameToLetters(props.name)
            }
        </div>
    )
}

function NameToLetters (name) {
    let newname = name.split('');
    return newname[0].toUpperCase()
}
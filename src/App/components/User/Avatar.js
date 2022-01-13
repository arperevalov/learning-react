import React from 'react';

export default function Avatar(props) {
    return (
        <div className='user__avatar'>
            {NameToLetters(props.name)}
        </div>
    )
}

function NameToLetters (name) {
    let newname = name.split('');
    return newname[0].toUpperCase()
}
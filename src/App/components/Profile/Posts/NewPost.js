import React from 'react';

export default function NewPost(props) {

    let newPostElement = React.createRef();

    let submitPost = () => {
        props.dispatch('newPost')
    }
    
    let changeInfo = () => {
        props.dispatch('newPostFieldUpdate', newPostElement.current.value)
    }
    
    return (
    <div>
        <label>Write something new!</label>
        <textarea ref={newPostElement} value={props.state.postField} onChange={changeInfo}></textarea>
        <button onClick={submitPost}>Submit</button>
    </div>
    )
}
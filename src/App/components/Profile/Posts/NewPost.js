import React from 'react';
import { newPostActionCreator, newPostFieldUpdateActionCreator } from '../../../redux/profile-reducer';



export default function NewPost(props) {

    let newPostElement = React.createRef();

    let submitPost = () => {
        props.dispatch(newPostActionCreator())
    }
    
    let changeInfo = () => {
        props.dispatch(newPostFieldUpdateActionCreator(newPostElement.current.value))
    }
    
    return (
    <div>
        <label>Write something new!</label>
        <textarea ref={newPostElement} value={props.state.postField} onChange={changeInfo}></textarea>
        <button onClick={submitPost}>Submit</button>
    </div>
    )
}
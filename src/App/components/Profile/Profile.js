import React from 'react';
import User from '../User/User';
import Post from './Posts/Post';

export default function Profile(props) {

    let DisplayPostsList = props.state.posts.map(
            (p, key) => <Post name={props.user.name} id={p.id} key={key} text={p.text}/>
        )

    let newPostElement = React.createRef();

    let submitPost = () => {
        props.submitPost()
    }
    
    let changeInfo = () => {
        props.changeInfo(newPostElement.current.value)
    }
        
    return (
        <div>
            <img
                className='wallpaper'
                src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'/>
            <User name={props.user.name}/>
            <div className='posts'>
                <div>
                    <label>Write something new!</label>
                    <textarea ref={newPostElement} value={props.state.postField} onChange={changeInfo}></textarea>
                    <button onClick={submitPost}>Submit</button>
                </div>
                <div>
                    <h2>All Posts</h2>
                    <div className='posts__list'>
                        {DisplayPostsList}
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import User from '../User/User';
import NewPost from './Posts/NewPost';
import Post from './Posts/Post';

export default function Profile(props) {

    let DisplayPostsList = props.state.posts.map(
            (p, key) => <Post name={props.user.name} id={p.id} key={key} text={p.text}/>
        )
        
    return (
        <div>
            <img
                className='wallpaper'
                src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'/>
            <User name={props.user.name}/>
            <div className='posts'>
                <NewPost state={props.state} dispatch={props.dispatch}/>
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
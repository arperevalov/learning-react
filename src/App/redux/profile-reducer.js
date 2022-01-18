import User from "./user-reducer";

const NEW_POST = 'NEW_POST',
    NEW_POST_FIELD_UPDATE = 'NEW_POST_FIELD_UPDATE';

let defaultVal = {
    posts: [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet."
        }, {
            id: 2,
            text: "Lorem ipsum dolor sit amet."
        }, {
            id: 3,
            text: "Lorem ipsum dolor sit amet."
        }, {
            id: 4,
            text: "Lorem ipsum dolor sit amet."
        }
    ],
    postField: "some text"
}

const profileReducer = (state = defaultVal, action, user = User) => {
    switch (action.type){
        case NEW_POST :
            {
                let post = {
                id: state.posts.length+1,
                text: state.postField
                };
        
                state.posts.push(post);
                state.postField = '';

                return state;
            }
            break;
        case NEW_POST_FIELD_UPDATE :
            {
                state.postField = action.data;
                return state;
            }
            break;
        default :
            {
                console.log('%cAction Error: Such action doesn\'t exist or no action applied', 'background: #222; color: #bada55');
                return state;
            }
            break;
    }
}

export const newPostActionCreator = () => ({type:NEW_POST, data:''}),
    newPostFieldUpdateActionCreator = (text) => ({type:NEW_POST_FIELD_UPDATE, data: text});

export default profileReducer
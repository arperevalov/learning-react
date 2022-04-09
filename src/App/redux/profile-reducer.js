import loggedUserReducer from "./loggedUser-reducer";

const NEW_POST = 'NEW_POST',
    NEW_POST_FIELD_UPDATE = 'NEW_POST_FIELD_UPDATE',
    SET_PROFILE_USER = 'SET_PROFILE_USER';

let defaultVal = {
    user: null,
    posts: [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amest."
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

const profileReducer = (state = defaultVal, action, user = loggedUserReducer()) => {
    switch (action.type){
        case NEW_POST :
            {
                let post = {
                id: state.posts.length+1,
                text: state.postField
                };

                return {
                    ...state,
                    posts: [...state.posts, post],
                    postField: ''
                };
            }
            break;
        case NEW_POST_FIELD_UPDATE :
            {
                return {
                    ...state,
                    postField: action.data
                };
            }
            break;
        case SET_PROFILE_USER :
            {
                return {
                    ...state,
                    user: action.user
                };
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

export const newPost = () => ({type:NEW_POST, data:''}),
    newPostFieldUpdate = (text) => ({type:NEW_POST_FIELD_UPDATE, data: text}),
    setProfileUser = (user) => ({type:SET_PROFILE_USER, user})

export default profileReducer
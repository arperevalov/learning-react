const NEW_POST = 'NEW_POST',
    NEW_POST_FIELD_UPDATE = 'NEW_POST_FIELD_UPDATE';

const profileReducer = (state, action) => {
    switch (action.type){
        case NEW_POST :
            {
                let post = {
                id: state.posts.length+1,
                text: state.postField
                };
        
                state.posts.push(post);
                state.postField = '';
            }
            break;
        case NEW_POST_FIELD_UPDATE :
            {
                state.postField = action.data;
            }
            break;
        default :
            {
                console.log('%cAction Error: Such action doesn\'t exist or no action applied', 'background: #222; color: #bada55');
            }
            break;
    }
}

export default profileReducer
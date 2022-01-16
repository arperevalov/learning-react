const NEW_POST = 'NEW_POST',
    NEW_POST_FIELD_UPDATE = 'NEW_POST_FIELD_UPDATE',
    SEND_MESSAGE = 'SEND_MESSAGE',
    CURRENT_DIALOG_FIELD_UPDATE = 'CURRENT_DIALOG_FIELD_UPDATE';

let store = {
    _state : {
        profilePage: {
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
        },
        dialogPage: {
            dialogs: [
                {
                    id: 123,
                    name: "Mitchel Johnson",
                    lastmessage: 'Hi!'
                }, {
                    id: 233,
                    name: "Robert Robertson",
                    lastmessage: 'Dunno'
                }, {
                    id: 124143,
                    name: "Alex Swanson",
                    lastmessage: 'It\'s up to you'
                }, {
                    id: 228,
                    name: "Lamar Dawson",
                    lastmessage: 'My dad told me to do this'
                }
            ],
            messages: [
                {
                    id: 123,
                    name: "Mitchel Johnson",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    id: 123,
                    name: "Robert Robertson",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    id: 123,
                    name: "Mitchel Johnson",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    id: 123,
                    name: "Robert Dawson",
                    text: "Lorem ipsum dolor sit amet."
                }
            ],
            currentDialogTextField: "WOW text for dialog!"
        },
        loggedUser: {
            name: 'Jason Biggs'
        }
    },
    
    _observe() {
        console.log('No observers found')
    },

    subscribe(observer) {
        this._observe = observer
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type){
            case NEW_POST :
                {
                    let post = {
                    id: this._state.profilePage.posts.length+1,
                    text: this._state.profilePage.postField
                    };
            
                    this._state.profilePage.posts.push(post);
                    this._state.profilePage.postField = '';
                    this._observe();
                }
                break;
            case NEW_POST_FIELD_UPDATE :
                {
                    this._state.profilePage.postField = action.data;
                    this._observe();
                }
                break;
            case  SEND_MESSAGE :
                {
                    let dialogMessage = {
                        id: this._state.dialogPage.messages.length+1,
                        name: this._state.loggedUser.name,
                        text: this._state.dialogPage.currentDialogTextField
                    }
                
                    this._state.dialogPage.messages.push(dialogMessage);
                    this._state.dialogPage.currentDialogTextField = '';
                    this._observe();
                }
                break;
            case CURRENT_DIALOG_FIELD_UPDATE :
                {
                    this._state.dialogPage.currentDialogTextField = action.data;
                    this._observe();
                }
                break;
            default :
                {
                    console.log('%cAction Error: Such action doesn\'t exist or no action applied', 'background: #222; color: #bada55');
                }
                break;
        }
    },
}



export const newPostActionCreator = () => ({type:NEW_POST, data:''}),
    newPostFieldUpdateActionCreator = (text) => ({type:NEW_POST_FIELD_UPDATE, data: text}),
    sendMessageActionCreator = () => ({type:SEND_MESSAGE, data: ''}),
    currentDialogFieldUpdateActionCreator = (text) => ({type:CURRENT_DIALOG_FIELD_UPDATE, data: text});

export default store;

window.store = store
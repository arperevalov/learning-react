import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

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

        this._state.profilePage = profileReducer( action, this._state.profilePage, this._state.loggedUser);
        this._state.dialogPage = dialogReducer(action, this._state.dialogPage, this._state.loggedUser);

        this._observe()

    },
}

export default store;

window.store = store
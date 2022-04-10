import authReducer from "./auth-reducer";

const SEND_MESSAGE = 'SEND_MESSAGE',
    CURRENT_DIALOG_FIELD_UPDATE = 'CURRENT_DIALOG_FIELD_UPDATE';

let defaultVal = {
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
}

const dialogReducer = (state = defaultVal, action, user = authReducer()) => {

    switch (action.type){
        case  SEND_MESSAGE :
            {
                let dialogMessage = {
                    id: state.messages.length+1,
                    name: user.name,
                    text: state.currentDialogTextField
                }

                return {
                    ...state,
                    messages: [...state.messages, dialogMessage],
                    currentDialogTextField: ''
                };
            }
            break;
        case CURRENT_DIALOG_FIELD_UPDATE :
            {
                return {
                    ...state,
                    currentDialogTextField: action.data
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

export const sendMessage = () => ({type:SEND_MESSAGE, data: ''});
export const currentDialogFieldUpdate = (text) => ({type:CURRENT_DIALOG_FIELD_UPDATE, data: text});

export default dialogReducer;
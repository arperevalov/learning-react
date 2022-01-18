const SEND_MESSAGE = 'SEND_MESSAGE',
    CURRENT_DIALOG_FIELD_UPDATE = 'CURRENT_DIALOG_FIELD_UPDATE';


const dialogReducer = (state, action) => {
    debugger
    switch (action.type){
        case  SEND_MESSAGE :
            {
                let dialogMessage = {
                    id: state.messages.length+1,
                    name: user.name,
                    text: state.currentDialogTextField
                }
            
                state.messages.push(dialogMessage);
                state.currentDialogTextField = '';
                // this._observe();
            }
            break;
        case CURRENT_DIALOG_FIELD_UPDATE :
            {
                state.currentDialogTextField = action.data;
                // this._observe();
            }
            break;
        default :
            {
                console.log('%cAction Error: Such action doesn\'t exist or no action applied', 'background: #222; color: #bada55');
            }
            break;
    }
}

export default dialogReducer;
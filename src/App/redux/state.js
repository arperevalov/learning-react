let rerenderEntireTree = () => {}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

let state = {
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
    messagesPage: {
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
}

export let newPost = () => {
    let post = {
        id: state.profilePage.posts.length+1,
        text: state.profilePage.postField
    };

    state.profilePage.posts.push(post);
    state.profilePage.postField = '';
    rerenderEntireTree();
}

export let newPostFieldUpdate = (text) => {
    state.profilePage.postField = text;
    rerenderEntireTree();
}

export let sendMessageToDialog = (message) => {
    let dialogMessage = {
        id: state.messagesPage.messages.length+1,
        name: state.loggedUser.name,
        text: state.messagesPage.currentDialogTextField
    }

    state.messagesPage.messages.push(dialogMessage);
    state.messagesPage.currentDialogTextField = '';
    rerenderEntireTree();
}

export let currentDialogTextFieldUpdate = (text) => {
    state.messagesPage.currentDialogTextField = text;
    rerenderEntireTree();
}


export default state;
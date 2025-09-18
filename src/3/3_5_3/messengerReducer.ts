export type State = {
    selectedId: number;
    messages: Map<number, string>;
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState: State = {
    selectedId: 0,
    messages: new Map([
        [0, 'Hello, Taylor'],
        [1, 'Hello, Alice'],
        [2, 'Hello, Bob']
    ]),
};

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            const newMessages = new Map(state.messages);
            newMessages.set(state.selectedId, action.message);
            return {
                ...state,
                messages: newMessages,
            };
        }
        case 'sent_message': {
            const newMessages = new Map(state.messages);
            newMessages.set(state.selectedId, '');
            return {
              ...state,
              messages: newMessages,
            };
          }
        default: {
            throw Error('Unknown action: ' + (action as Action).type);
        }
    }
}

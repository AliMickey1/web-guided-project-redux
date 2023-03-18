export const UPDATE_NEW_MEMBER = "UPDATE_NEW_MEMBER";
export const ADD_MEMBER = "ADD_MEMBER";
export const UPDATE_NEW_TITLE = "UPDATE_NEW_TITLE";

export function updateNewMember(newMember) {
    return { type: UPDATE_NEW_MEMBER, payload: newMember };
}

export const addMember = member => {
    return { type: ADD_MEMBER, payload: member };
};

export function updateNewTitle(newText) {
    return {type: UPDATE_NEW_TITLE, payload: newText}
}
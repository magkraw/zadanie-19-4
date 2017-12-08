import uuid from uuid;
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
} from './comments.types';


function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

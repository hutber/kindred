import {
  SET_TAG_SELECTION,
} from '../../actions/tagsAction';

import { masturbationTagsObject } from './tags';

function masturbationTags (state = masturbationTagsObject, action) {
  switch (action.type) {
    case SET_TAG_SELECTION:
    const newTags = {};
    newTags[action.tagName] = action.tagVal;
      return {...state, ...newTags};
  }
  return state
}

export default masturbationTags;

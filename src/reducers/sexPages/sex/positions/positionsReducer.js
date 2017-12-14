import {
  SET_TAG_SELECTION,
} from '../../../../actions/sexPages/masturbation/tagsAction';

import { masturbationTagsObject } from './positions';

function positionsReducer (state = masturbationTagsObject, action) {
  switch (action.type) {
    case SET_TAG_SELECTION:
      return {...state, [action.tagName]: action.tagVal};
  }
  return state
}

export default positionsReducer;

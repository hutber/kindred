export const SET_TAG_SELECTION = 'SET_TAG_SELECTION';

export function setTagSelection(tagName, tagVal) {
  return {
    type: SET_TAG_SELECTION,
    tagName,
    tagVal
  }
}

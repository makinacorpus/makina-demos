import { createStore } from 'redux';

const initialState = {
  tags: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TAG_TOGGLE': {
      const tagSet = new Set(state.tags);

      if (tagSet.has(action.value)) {
        tagSet.delete(action.value);
      } else {
        tagSet.add(action.value);
      }

      return {
        ...state,
        tags: Array.from(tagSet),
      };
    }

    case 'TAG_DEFINE': {
      const tagSet = new Set(action.value);
      return {
        ...state,
        tags: Array.from(tagSet),
      };
    }

    default:
      return state;
  }
};

// preloadedState will be passed in by the plugin
export default preloadedState => createStore(reducer, preloadedState);

import { createStore } from 'redux';

const reducer = (state, action) => state;

// preloadedState will be passed in by the plugin
export default preloadedState => createStore(reducer, preloadedState);

export const createStore = (reducer) => {
    let state = reducer(undefined, {});
    const subscribers = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    };
  
    const subscribe = (subscriber) => {
      subscribers.push(subscriber);
    };
  
    return { getState, dispatch, subscribe };
  };
  
  // export default createStore;
  
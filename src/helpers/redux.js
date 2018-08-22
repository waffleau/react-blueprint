export function createReducer(handlers, initialState) {
  return (state: Object, action: Object) => {
    const handler = handlers[action.type];
    const nextState = state || initialState || {};

    return handler ? handler(nextState, action) : nextState;
  };
}

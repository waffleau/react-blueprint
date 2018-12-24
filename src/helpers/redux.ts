interface Action {
  type: string;
}

interface ActionHandlers {
  [key: string]: (arg0: Object, arg1: Object) => Object;
}

export function createActionType(type: string) {
  return `pusher/${type}`;
}

export function createReducer(handlers: ActionHandlers, initialState: Object) {
  return (state: Object, action: Action) => {
    const handler = handlers[action.type];
    const nextState = state || initialState || {};

    return handler ? handler(nextState, action) : nextState;
  };
}

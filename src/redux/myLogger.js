import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

  if (
    upcomingState.counterAsus.quantity <= 20 &&
    upcomingState.counterDell.quantity <= 35 &&
    upcomingState.counterCanon.quantity <= 72 &&
    upcomingState.counterAsus.quantity >= 0 &&
    upcomingState.counterDell.quantity >= 0 &&
    upcomingState.counterCanon.quantity >= 0
  ) {
    return next(action);
    // pass action
  }
};

export default myLogger;

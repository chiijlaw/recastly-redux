import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === "CHANGE_VIDEO") {
    var previousState = Object.assign({}, state);
    for ( var key in action) {
      if (key === 'type') {
        continue;
      } else {
        previousState[key] = action[key];
      }
    }
    return previousState.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;

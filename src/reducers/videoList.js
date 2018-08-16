import Redux from 'redux';

const initialState = [];

// {    ACTION
//     type: "CHANGE_VIDEO_LIST",
//     videos: [{script: 'but it\'s my only line!'}]
//   }
// [[{script: 'but it\'s my only line!'}]]

var videoListReducer = (state = initialState, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === "CHANGE_VIDEO_LIST") {
    var newState = [].slice();
    for (var key in action) {
      if (key === 'type') {
        continue;
      } else {
        newState.push(action[key]);
        return newState[0];
      }
    }
  }

  return state;

};

export default videoListReducer;

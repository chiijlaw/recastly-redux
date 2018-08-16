import Redux from 'redux';


// {    ACTION
//     type: "CHANGE_VIDEO_LIST",
//     videos: [{script: 'but it\'s my only line!'}]
//   }
// [[{script: 'but it\'s my only line!'}]]

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === "CHANGE_VIDEO_LIST") {
    for (var key in action) {
      if (key === 'type') {
        continue;
      } else {
        var newState = action[key];
        return newState;
      }
    }
  }

  return state;

};

export default videoListReducer;

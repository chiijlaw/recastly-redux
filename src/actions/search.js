import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {

//TODO:  Write an asynchronous action to handle a video search!

var apiObject = {
  key: YOUTUBE_API_KEY,
  query: q,
  max: 5
}

// Dispatch ChangeVideoList and ChangeVideo
return function(dispatch) {
  searchYouTube(apiObject, function(data) {
    dispatch(changeVideoList(data));
    dispatch(changeVideo(data[0]));
  });
}


};

export default handleVideoSearch;

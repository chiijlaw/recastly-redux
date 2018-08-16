import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {

//TODO:  Write an asynchronous action to handle a video search!

var apiObject = {
  key: 'AIzaSyDHEkDi9amTopThEpVn_mih0NS-GnfuDUo',
  query: 'blah',
  max: 5
}

// Dispatch ChangeVideoList and ChangeVideo
return function(dispatch) {
  searchYouTube(apiObject, function(data) {
    var changeVideoResult;
    var changeVideoListResult;
    // Call changeVideo
    changeVideoResult = changeVideo(data[0]);

    // Call changeVideoList
    changeVideoListResult = changeVideoList(data);
    console.log(changeVideoListResult)
    
    dispatch(changeVideoListResult);
  });
}


};

export default handleVideoSearch;

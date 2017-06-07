import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{
    //recibe un array de videos y lo mapea a objetos videoListItem
  const videoItems=  props.videos.map((video)=>{
      return (
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video}
        />);
  });
  // retorna una lista de videoListItems
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
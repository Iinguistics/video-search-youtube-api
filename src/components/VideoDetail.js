import React from 'react';

const VideoDetail = ({video}) =>{

  const titleDetail = ()=>{
       if(video!==null){
           return (
          <div>
           <h4 className="ui header">{video.snippet.title}</h4>
           <p>{video.snippet.description}</p>
          </div>
           )
        }
   }

   

   const videoId = ()=>{
    if(video !== null){
        const videoSrc = `https:www.youtube.com/embed/${video.id.videoId}`
        return (
       <div>
       <iframe src={videoSrc} title="video player"/>
       </div>
        )
     }
}

    return(
        <div>
          <div className="ui embed" style={{height: "425px"}}>
            {videoId()}
          </div>
          <div className="ui segment">
            {titleDetail()}
         </div>
        </div>
        
    );
}


export default VideoDetail;
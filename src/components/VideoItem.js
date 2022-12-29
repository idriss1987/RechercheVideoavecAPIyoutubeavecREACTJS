import './VideoItem.css'

const VideoItem = ({video , onVideoSelect}) =>{
    
    return(
            <div onClick={()=>onVideoSelect(video)}  className="list-group-item myVideo-item">
                <img src={video.snippet.thumbnails.medium.url} className="img-thumbnail mr-2" alt= ""/>
                {video.snippet.title}
            </div>
        )
}

export default VideoItem
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playstate, setPlayState}) => {

const player = useRef(null);

const closeplayer = (e)=>{
    if(e.target === player.current){
        setPlayState(false);
    }
}

  return (
    <div className={`video-player ${playstate?'':'hide'}`}  ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
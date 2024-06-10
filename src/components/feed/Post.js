import React,{ forwardRef }  from 'react';
import "./Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';

const Post= forwardRef(( {displayName,username,verified, text, image, avatar},ref) => {
  return (
    <div className='post'ref={ref}>
        <div className='post_avatar'>

        <img src={avatar} alt="dp" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headertext'>
                    <h3> {displayName}
                    <span className='post_headerspecial'>
                        
                    {verified &&<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/488px-Twitter_Verified_Badge.svg.png'alt="dp" style={{height:"20px",width:"20px",borderRadius:"50%"}}/>}
                       @{username}

                    </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p>{text}</p>
                </div>

            </div>

        {/* <img src="https://tinyurl.com/bdcm5ar9" alt= " "></img> */}
       {/* <img src= "https://media3.giphy.com/gifs/IntoAction-WsWuvZCICpsXPoYOM2" alt=""></img> */}
         <img src={image} alt=""></img>
         <div className='post__footer'>
            <ChatBubbleIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
            </div>
          </div>
      </div>
     )
})

export default Post

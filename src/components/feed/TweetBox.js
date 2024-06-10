import React from 'react'
import "./TweetBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react'
import { db } from '../../firebase';


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");   
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault()                

    db.collection('posts').add({
      displayName : "Nisanth",
      username: "Nisanth",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "data:image/webp;base64,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"
    })
    setTweetMessage("")            
    setTweetImage("")
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <img src=" https://www.thestatesman.com/wp-content/uploads/2024/04/Happy-birthday-Allu-Arjun.jpg"alt="dp" style={{height:"45px",width:"50px",borderRadius:"50%" }}></img>
              
                <input 
                onChange = {(e) => setTweetMessage(e.target.value)}     // value is what ever we write in what's happening
                value = {tweetMessage} 
                type='text' placeholder="What's happening"/>
                
            </div> 
            <input 
            onChange = { (e) => setTweetImage(e.target.value) }
            value = {tweetImage} 
            className='tweetbox_imageinput' placeholder="Enter image URL" type='text'/> 
            <Button className='tweetBox__tweetButton'   onClick = { sendTweet } >Tweet</Button>
            
            
        </form>
    </div>
  );
}

export default TweetBox;

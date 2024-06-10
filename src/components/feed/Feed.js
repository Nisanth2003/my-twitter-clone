import React,{useEffect, useState} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from '../../firebase'
import FlipMove from 'react-flip-move'


function Feed() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
        setPosts(snapshot.docs.map(doc => doc.data()))
    })
}, [])

  return (
    <div className='feed'>
        <div className='feed_header'>
            <h2>For You</h2>
        </div>


      {/* {TweetBox} */}
      <TweetBox/>
      {/* {Post} */}
      {/* <Post displayName="nisanth" username="nisanthhh"
       verified ={true} text="checking"
       avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgGtdd_qiACpc9NVrgp_0bjAyGrDCjcZXdA&usqp=CAU"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgGtdd_qiACpc9NVrgp_0bjAyGrDCjcZXdA&usqp=CAU"
      />
       */}
            <FlipMove>
        {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}

        </FlipMove>

    </div>
  )
}

export default Feed

import React from 'react'
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlined from '@mui/icons-material/SearchOutlined';


function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchOutlined className='widgets__searchIcon'/>
        <input placeholder='search twitter' type='text'/>
      </div>

      <div className='widgets_widgetContainer'>
        <h2>what's happening</h2>

        <TwitterTweetEmbed tweetId={"18839785"}/>
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='narendramodi'
        options={{height:400}}/>
        <TwitterShareButton
        url={""}
        options={{text:"#react",via:"AmitShah"}}/>
      </div>
    </div>
  )
}

export default Widgets

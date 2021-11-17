
import { user } from "../store/getUserFeed";
import { getUserInfo } from "../store/getUserInfo";
import './User.css'

export const User = () => {
 
let items = user.itemList.map(it => {


return(
<div>
 <span> {it.stats.playCount} </span>
     <video width="250" height="200" controls >
       <source src={it.video.playAddr}></source>
  </video>
</div>)})


  return (
    
    <div className="App">
        <div className="userInfo">
          <div>
        <p>{getUserInfo.user.nickname}</p>
        <img src={getUserInfo.user.avatarThumb} alt="" />
        <p>{getUserInfo.user.signature}</p>
      </div>
      <div className="stats">
      <p>{getUserInfo.stats.followerCount},</p>
      <p>{getUserInfo.stats.followingCount},</p>
      <p>{getUserInfo.stats.heart}</p>
      <p>{getUserInfo.stats.heartCount}</p>
      <p>{getUserInfo.stats.videoCount}</p>
      <div className=''>{items}</div>
      </div>  
    </div>





      </div>
  );
}



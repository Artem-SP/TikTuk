import { useDispatch, useSelector } from "react-redux";
import {getTrendingFeed} from "../store/getTrendingFeed"

function News() {
  
let trending = getTrendingFeed.map(it => {
return(
<>
<video width="250" height="200" controls >
       <source src={it.videoUrl}></source>
  </video>
<div>{it.text}</div>

<div>{it.nickName}</div>
  
<img src={it.avatar} alt="" />

 <div >{it.playCount}</div>

  <div className=""></div>
  <div className=""></div>

</>
)})


  return (
    <div>



<div className="">{trending} </div>


      </div>
  );
}
import React from "react";
import "./App.css";

import {getTrendingFeed} from "./store/getTrendingFeed"

function App() {
  
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

export default App;

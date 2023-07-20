import React, { useState } from "react";

function Post(props){

    const [change, setChange] = useState(false);

    function handleClick(e){
        setChange((prevValue)=>{
            return !prevValue;
        });
        e.preventDefault();
    }

    return (
        <div>
            <h1>{props.postTitle}</h1>
            {/* eslint-disable-next-line */}
            <p>{props.postBody.substring(0, change ? props.postBody.length : 100)}<a href="" onClick={handleClick}>{change ? "less" : "... Read more"}</a> </p>
        </div>
    )
}

export default Post;
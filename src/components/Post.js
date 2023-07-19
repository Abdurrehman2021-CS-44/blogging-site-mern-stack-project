import React, { useState } from "react";
import ShowPost from "./ShowPost";

function Post(props){

    const [change, setChange] = useState(false);

    function handleClick(){
        // <ShowPost id={props.id}/>
    }

    return (
        <div>
            <h1>{props.postTitle}</h1>
            <p>{props.postBody.substring(0, 100)}... <a href="#" onClick={handleClick}>Read more</a> </p>
        </div>
    )
}

export default Post;
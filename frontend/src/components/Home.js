import React, { useState, useEffect } from "react";
import Post from "./Post";

function Home(props){
    const [dbData, setDbData] = useState([]);

    const getData = async() => {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        setDbData(data.array);
    };

    useEffect(() => {
        getData()
    }, []);

    return <div>
        <h1>Home</h1>
        <p style={{textAlign: "justify"}} >{props.content}</p>
        {dbData.map((post, index)=>{
            return <Post key={index} id={post._id} postTitle={post.title} postBody={post.body} />
        })}
    </div>;
}

export default Home;
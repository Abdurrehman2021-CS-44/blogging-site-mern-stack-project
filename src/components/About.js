import React from "react";

function About(props){
    return (<>
        <h1>About</h1>
        <p style={{textAlign: "justify"}}>{props.content}</p>
    </>);
}

export default About;
import React from "react";

function Contact(props){
    return (<>
        <h1>Contact</h1>
        <p style={{textAlign: "justify"}}>{props.content}</p>
    </>);
}

export default Contact;
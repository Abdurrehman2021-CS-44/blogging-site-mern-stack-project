import React from "react";

function Compose(){
    return (<>
        <h1>Compose</h1>
        <form action="http://localhost:5000/posts" method="post">
            <div className="form-group">
                <label>Title</label>
                <input name="postTitle" type="text" className="form-control" />
                <label>Post</label>
                <textarea name="postBody" className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Publish</button>
        </form>
    </>)
}

export default Compose;
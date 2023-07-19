import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import mongoose, { mongo } from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1/postsDB")

const postSchema = new mongoose.Schema({
    title: String,
    body: String
});

const Post = new mongoose.model("Post", postSchema);

app.get("/posts", (req, res)=>{
    Post.find({})
    .then((foundPosts)=>{
        console.log({array: foundPosts});
        res.json({array: foundPosts})
    })
})

app.post("/posts", (req, res)=>{
    console.log(req.body);
    const post = new Post({
        title : req.body.postTitle,
        body : req.body.postBody
    });
    post.save();
    res.redirect("http://localhost:3000/");
});

app.get("/posts/:id", (req, res)=>{
    console.log(req.params.id);
});

app.listen(5000, (req, res)=>{
    console.log("Server is running on port 5000");
})
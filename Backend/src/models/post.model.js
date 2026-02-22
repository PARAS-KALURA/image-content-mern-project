//You created a structure for posts and connected it to a MongoDB collection so you can create, read, update, and delete posts from the database. OR   👉 You made a Post model to talk to the “post” collection in MongoDB. OR 👉 Your backend can now talk to MongoDB using postModel.

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({    // Create a new blueprint for my database structure.”
    image: String,
    caption: String,
})

const postModel = mongoose.model("post", postSchema); // post = coolectonName . post.find post.dlt   Your backend can now:

// Save image URLs to MongoDB

// Read image URLs from MongoDB

// Send them to frontend

module.exports = postModel;


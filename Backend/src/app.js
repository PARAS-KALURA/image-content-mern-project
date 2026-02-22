const express = require("express");
const multer = require("multer");
const uploadFile = require("./service/storage.service")
const postModel = require("./models/post.model.js")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()}); 

app.post('/create-post', upload.single("image"), async (req, res) => {
    try {

   console.log(req.body);
   console.log(req.file);

   const result = await uploadFile(req.file.buffer);

   const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
    
   })

   return res.status(201).json({
    message: "Post Create Successfully",
    post
   })

    } catch(error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
} )

app.get("/posts", async (req, res) => {
    try {
      
        const posts = await postModel.find();

        return res.status(200).json({
            message: "Post fetched successfully",
            posts
        })

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
} )

app.delete("/posts/:id", async (req, res) => {
    try {
 
        const {id} = req.params;

        const deletedPost = await postModel.findByIdAndDelete(id);

        if(!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            })
        }

        return res.status(200).json({
            message: "Deleted Sucessfully"
        })
        

    } catch(error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
} )

module.exports = app;
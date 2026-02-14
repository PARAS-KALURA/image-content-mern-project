const express = require("express");
const multer = require("multer");
const uploadFile = require("./service/storage.serivce.js")

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()}); 

app.post('/create-post', upload.single("image"), async (req, res) => {
    try {

   console.log(req.body);
   console.log(req.file);

   const result = await uploadFile(req.file.buffer);

   console.log(result);

    } catch(error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
} )

module.exports = app;
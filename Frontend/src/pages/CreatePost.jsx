import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const CreatePost = () => {

    const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
      alert("Post Created Successfully")
      e.target.reset()

      console.log(res);
      navigate("/feed")
      
    })
    .catch((err) => {
      console.error(err)
    })
}


  return (
    <section>
        <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-5 border">
  
  <h2 className="text-2xl font-semibold text-gray-800 text-center">
    Create Post
  </h2>

  {/* Image Upload */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-2">
      Upload Image
    </label>
    <input
      type="file"
      name="image"
      accept="image/*"
      className="block w-full text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-red-50 file:text-red-700
                 hover:file:bg-red-100
                 cursor-pointer"
    />
  </div>

  {/* Caption */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-2">
      Caption
    </label>
    <input
      type="text"
      name="caption"
      placeholder="Enter your caption..."
      required
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className=" cursor-pointer w-full bg-red-600 hover:bg-red-700 transition duration-200 text-white py-2 rounded-lg font-semibold shadow-md"
  >
    Submit
  </button>

</form>
    </section>
  )
}

export default CreatePost
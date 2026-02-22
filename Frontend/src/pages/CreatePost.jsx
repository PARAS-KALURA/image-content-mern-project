import React from 'react'

const CreatePost = () => {
  return (
    <section>
        <h1>Create Post</h1>
        <form>
            <input type="file" name='image' accept='image'/>
        </form>
    </section>
  )
}

export default CreatePost
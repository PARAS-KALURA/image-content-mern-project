import React, { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {


    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "data:image/jpeg;base64,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pe38L/OP6K+HGzCLMJDtttY0n5/0XMvaoYyR6bw9hmuJlkNMbu0Hqe645++yHE+Z1n2byAWFg48gIotkj29HBd7eJ4JbPi0f83lP8Vi8TWmp22GDxdl0tai0Nawev/oFFm8PmA8ha62kk2DYuqX1Zla084fiNBDwaI5Ec1Y4XOA6IA7yNcSNRsEV2+qyFpap6M+7aYjPJnAt1CNn3g1tX6Kjkd4jhG02dW3sqe19a4jka+aejkyeqcPZSGMG2/UrQOsCl4eMTJ+N3+8p9qk/6jv95WPi/q3z/wAeocTZ+YW6GEGRw8v+UdyvOcSXPcXuOpxNklQnSE8yT7m1x1KuMmMRzyuVT8BDqlYPW/putg/JWYhoffhy9SBbH+pH6rAhxHI181zE7+j3f7iuXHdMcvVpMbw9iYwTo1tH3mHUPpzVHNzUf7TJ+N3+8rgXk8yT812TTeXk9ppIAXK1EtLWtpJgXMFQLS02Nlw/jLYYuoNt9R1RY4PI6n6op3DbUycURFtkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z",
            caption: "Me",
        }
    ])

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
        console.log("BACKEND RESPONSE:", res.data)
        setPosts(res.data.posts)
    })
    .catch((err) => {
        console.error(err)
    })
}, [])

    return (
        <section className="max-w-2xl mx-auto mt-10 space-y-8">
            {posts.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                    No posts yet.
                </p>
            ) : (
                posts.map((post) => (
                    <div
                        key={post._id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden border"
                    >
                        <img
                            src={post.image}
                            alt="post"
                            className="w-full h-96 object-cover"
                        />

                        <div className="p-4">
                            <p className="text-gray-800 text-lg font-medium">
                                {post.caption}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </section>
    )
}

export default Feed
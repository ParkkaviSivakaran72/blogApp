'use client'
import { assets } from '@/assets/assets'
import axios from 'axios'
import { FileUp } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
  const [image, setImage] = useState(false);
  const [data,setData] = useState({
    title:'',
    description:'',
    category:'',
    author:'alex',
    
  })

  const onchangeHanlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data, [name]:value}))
    console.log(data)
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title)
    formData.append('category',data.category)
    formData.append('description',data.description)
    formData.append('author',data.author)
    
    formData.append('image',image)

    const response = await axios.post('/api/blog',formData);
    if(response.data.success){
        toast.success(response.data.message)
    }
    else{
        toast.error('Error')
    }
  }
  return (
    <div className="flex m-4 min-h-screen px-4">
      <form
        className="bg-white  rounded-2xl p-8 w-full max-w-xl space-y-6"
        onSubmit={onSubmitHandler}
        
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Blog</h2>

        {/* Upload Thumbnail */}
        <div className="flex flex-col items-center">
          <p className="text-gray-700 mb-2">Upload Thumbnail</p>
          <label htmlFor="image" className="cursor-pointer hover:opacity-80 transition-all">
            <Image
              src={!image ? assets.upload : URL.createObjectURL(image)}
              alt="upload image"
              width={140}
              height={140}
              className="rounded-xl border border-dashed border-gray-300 p-2"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            hidden
            required
          />
        </div>

        {/* Blog Title */}
        <div>
          <label className="block text-gray-700 mb-1">Blog Title</label>
          <input
            type="text"
            name='title'
            onChange={onchangeHanlder}
            value={data.title}
            placeholder="Type here"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Blog Category */}
        <div>
          <label className="block text-gray-700 mb-1">Blog Category</label>
          <select
            name="category"
            
            onChange={onchangeHanlder}
            value={data.category}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select a category</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Productivity">Productivity</option>
            <option value="Health">Health</option>
            <option value="Career">Career</option>
          </select>
        </div>

        {/* Blog Description */}
        <div>
          <label className="block text-gray-700 mb-1">Blog Description</label>
          <textarea
            rows={4}
            name='description'
            onChange={onchangeHanlder}
            value={data.description}
            placeholder="Type your blog description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          ></textarea>
        </div>

        

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
        >
          <FileUp className="inline-block mr-2" size={18} />
          Add Blog
        </button>
      </form>
    </div>
  )
}

export default Page

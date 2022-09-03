import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function NewBlog() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")

  const history = useHistory();

  const handleOnSubmiit = () => {
    const data = {title, description, author}

    console.log(data)
  }

  return (
    <div>
      <center>
      <h2 className='my-5'><i>Create a new blog</i></h2>
        <div className='w-50 my-5'>
          <div className="mb-3">
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
          </div>
          <div className="mb-3">
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' rows="5"></textarea>
          </div>
          <div className="mb-3">
            <select className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button className='btn btn-primary w-100 my-3' onClick={handleOnSubmiit}>Insert</button>
        </div>
      </center>
    </div>
  )
}

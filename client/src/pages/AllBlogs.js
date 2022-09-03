import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllBlogs() {
  return (
    <div className='container'>
      <center>
      <h2 className='my-5'><i>All Blogs!</i></h2>
      <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">#</th>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, possimus!</td>
                <td><Link className='btn btn-primary'>edit</Link></td>
                <td><button className='btn btn-primary'>delete</button></td>
            </tr>
        </tbody>
        </table>
      </center>
    </div>
  )
}

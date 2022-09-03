import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div>
        <Link to={`/blog/1`} style={{textDecoration: "none"}}>
            <div className="my-3">
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <h3 className='text-primary'><i>Lorem ipsum dolor sit amet.</i></h3>
                      <p style={{color: "#292A2D"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
                    </blockquote>
                </div>
            </div>
        </Link>
    </div>
  )
}

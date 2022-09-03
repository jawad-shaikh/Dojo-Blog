import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-primary container">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><b><i>Dojo Blog</i></b></Link>
            <div className="d-flex flex-row-reverse">
                <div className="navbar-nav">                 
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

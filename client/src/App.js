import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import AllBlogs from './pages/AllBlogs'
import NewBlog from './pages/NewBlog'
import UpdateBlog from './pages/UpdateBlog'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog/:id">
            <BlogDetail />
          </Route>
          <Route exact path="/admin/allblogs">
            <AllBlogs />
          </Route>
          <Route exact path="/admin/newblog">
            <NewBlog />
          </Route>
          <Route exact path="/admin/UpdateBlog/:id">
            <UpdateBlog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

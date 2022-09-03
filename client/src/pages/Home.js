import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className='container my-5'>
        <h2><i>All Courses!</i></h2>

        <Card />
        <Card />
        <Card />
    </div>
  )
}

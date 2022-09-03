import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
  const { id } = useParams()

  return (
    <div className='my-5'>
      <div className='container'>
        <h1 className='my-5 text-primary'><i>Lorem ipsum dolor sit amet, consectetur</i></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatum laudantium numquam aliquid officiis, inventore quia eum quaerat beatae minima autem unde odit dignissimos, iste magni! Repellendus ea voluptate illum sed, aspernatur excepturi facilis non animi, amet laboriosam placeat dolorem! Adipisci nemo perferendis sequi hic ex voluptatibus laboriosam, nulla voluptatem odio neque doloribus mollitia laudantium, quis eligendi ratione laborum perspiciatis quaerat delectus minus suscipit maiores culpa necessitatibus et! At numquam odio recusandae commodi natus fugiat libero nam, aut, reprehenderit odit doloribus! Laudantium, officiis, pariatur repellendus enim dignissimos voluptas perspiciatis magnam est optio neque facere maiores labore nulla saepe cumque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatum laudantium numquam aliquid officiis, inventore quia eum quaerat beatae minima autem unde odit dignissimos, iste magni! Repellendus ea voluptate illum sed, aspernatur excepturi facilis non animi, amet laboriosam placeat dolorem! Adipisci nemo perferendis sequi hic ex voluptatibus laboriosam, nulla voluptatem odio neque doloribus mollitia laudantium, quis eligendi ratione laborum perspiciatis quaerat delectus minus suscipit maiores culpa necessitatibus et! At numquam odio recusandae commodi natus fugiat libero nam, aut, reprehenderit odit doloribus! Laudantium, officiis, pariatur repellendus enim dignissimos voluptas perspiciatis magnam est optio neque facere maiores labore nulla saepe cumque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus voluptatum laudantium numquam aliquid officiis, inventore quia eum quaerat beatae minima autem unde odit dignissimos, iste magni! Repellendus ea voluptate illum sed, aspernatur excepturi facilis non animi, amet laboriosam placeat dolorem! Adipisci nemo perferendis sequi hic ex voluptatibus laboriosam, nulla voluptatem odio neque doloribus mollitia laudantium, quis eligendi ratione laborum perspiciatis quaerat delectus minus suscipit maiores culpa necessitatibus et! At numquam odio recusandae commodi natus fugiat libero nam, aut, reprehenderit odit doloribus! Laudantium, officiis, pariatur repellendus enim dignissimos voluptas perspiciatis magnam est optio neque facere maiores labore nulla saepe cumque!</p>
      </div>
    </div>
  )
}

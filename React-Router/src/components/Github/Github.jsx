
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center flex justify-center items-center flex-col gap-3 m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name}
    <img  src={data.avatar_url} alt="Git picture" width={300} />
    <p>{data.bio}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mohammedirfan18')
    return response.json()
}

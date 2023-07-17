'use client'
import useSWR from 'swr'
import React, { useContext, useEffect, useState } from "react"
import FeedPost from "./Feed/FeedPost"
import { NearlyContext } from "../context/context"

const Feed = () => {
  const { selectedArea } = useContext(NearlyContext);
  const [posts,setPosts]=useState([])
  
  // const url:string = 'https://api.nearly.site/posts?location_id='+selectedArea.location_id+'&radius='+selectedArea.radius
  const url:string = 'http://localhost:3001/posts?location_id='+selectedArea.id+'&radius='+selectedArea.radius
	
  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const { data, error, isLoading  } = useSWR(url, fetchData)
  // setPosts(data)
  useEffect(()=>{
    if (data && selectedArea) {
      setPosts(data.posts)
    }
  },[selectedArea,data])

if (error) return <div>Error fetching data</div>

if (isLoading) return <div>Loading...</div>

if (posts && posts.length > 0) {
    return (
      posts.map((post: any,index: React.Key | null | undefined)=>(
        <React.Fragment key={index}>
          <FeedPost post={post}/>
        </React.Fragment>
      ))
    )
  }
}

export default Feed


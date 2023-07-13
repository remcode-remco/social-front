'use client'
import useSWR from 'swr'

import React, { useContext } from "react"
import FeedPost from "./FeedPost"
import { NearlyContext } from "../context/context";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const Feed = () => {
  const { userData } = useContext(NearlyContext);
	
  const { data, error, isLoading } = useSWR('https://api.nearly.site/posts?location_id='+userData.selectedArea.location_id+'&radius='+userData.selectedArea.radius, fetcher)

  if (data && data.posts) {
    return (
      data.posts.map((post: any,index: React.Key | null | undefined)=>(
        <React.Fragment key={index}>
          <FeedPost post={post} />
        </React.Fragment>
      ))
    )
  }
}

export default Feed


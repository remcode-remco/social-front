'use client'
import useSWR from 'swr'

import React, { useContext, useState } from "react"
import FeedPost from "./Feed/FeedPost"
import { NearlyContext, NearlyContextReplies } from "../context/context";
import UserBanner from './Feed/UserBanner';
import PostContent from './Feed/PostContent';
import PostTime from './Feed/PostTime';
import ActionBanner from './Feed/ActionBanner';
import PostSubtext from './Feed/PostSubtext';
import PostCity from './Feed/PostCity';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const Feed = () => {
  const { userData } = useContext(NearlyContext);
	
  // const url:string = 'https://api.nearly.site/posts?location_id='+userData?.selectedArea.location_id+'&radius='+userData?.selectedArea.radius
  const url:string = 'http://localhost:3001/posts?location_id='+userData?.selectedArea.location_id+'&radius='+userData?.selectedArea.radius

  const { data, error, isLoading } = useSWR(url, fetcher)


  if (data) {
    return (
      data.posts.map((post: any,index: React.Key | null | undefined)=>(
        <React.Fragment key={index}>
          <FeedPost post={post}/>
        </React.Fragment>
      ))
    )
  }
}

export default Feed


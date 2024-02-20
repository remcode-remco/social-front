import React, { useState } from "react"
import UserBanner from "./UserBanner"
import PostContent from "./PostContent"
import PostSubtext from "./PostSubtext"
import PostTime from "./PostTime"
import { NearlyContextReplies } from "@/app/context/context"
import ActionBanner from "./ActionBanner"
import PostCity from "./PostCity"

const Post = ({post}) => {
  const [showReplies,setShowReplies]=useState(false)
  return (
      <div className="shadow-lg shadow-gray-400 rounded-xl my-5">
        <UserBanner data={post.author} />
        <PostContent content={post.content} />
        <PostSubtext>
          <PostTime time={post.updated_at} />
          <PostCity name={post.location.name} />
        </PostSubtext>
        <NearlyContextReplies.Provider value={{showReplies,setShowReplies}}>
          <ActionBanner data={post} />
        </NearlyContextReplies.Provider>
        
          {showReplies ?
            post.replies.map((post: any,index: React.Key | null | undefined)=>(
              <div key={index} className="pl-10">
                  <UserBanner data={post.author} />
                  <PostContent content={post.content} />
                  <PostSubtext>
                    <PostTime time={post.updated_at} />
                  </PostSubtext>
                  {/* <ActionBanner data={post} /> */}
              </div>
            ))
          :null}
      </div>
  )
}

export default Post

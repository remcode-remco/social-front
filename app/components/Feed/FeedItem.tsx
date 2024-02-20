import Image from "next/image"

const FeedItemContent = ({content}:{content:any}) => {

  return (
    <div className="relative col-span-3 font-xl px-3 py-2">
      {content}
    </div>
  )
}

const ReplyCount = ({replies}:{replies:any}) => {

  return (
    <div className="absolute bottom-0 right-0 border-t-2 border-l-2 border-gray-200 p-3 bg-gray-50 rounded-tl-xl -mb-1 font-bold">
      {replies}
    </div>
  )
}

const FeedItem = ({post}:{post:any}) => {

  return (
    <div className="relative m-2 shadow-lg rounded-xl grid grid-cols-4 h-32 overflow-hidden p-3">
      <Image src={"/logo_sm.png"} alt={""} width={100} height={100} />
      <FeedItemContent content={post.content} />
      <ReplyCount replies={post.replies.length} />
    </div>
  )
}


export default FeedItem
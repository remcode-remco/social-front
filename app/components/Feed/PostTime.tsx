
const TimeAgo = ({ providedTimestamp }) => {
  const currentTimestamp = Date.now()
  const timestampDiff = currentTimestamp - Date.parse(providedTimestamp)
  const hours = Math.floor(timestampDiff / (1000*60*60))

  if (hours >= 20) {
    const days = Math.floor(hours / 24)
    return <span>{days} day{days === 1 ? '':'s'} ago </span>
  } else {
    return <span>{hours} hours ago </span>
  }
}

const PostTime = ({time}:{time:string}) => {

  return (
    <span className="font-xs text-right">
      <TimeAgo providedTimestamp={time} />
    </span>
  )
}

export default PostTime
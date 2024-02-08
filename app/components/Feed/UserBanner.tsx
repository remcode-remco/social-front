import Image from "next/image"

const UserName = ({name}) => <div className="font-bold">{name}</div>
const UserCity = ({name,postcode}) => <div className="">{name} {/* ({postcode}) */}</div>

const UserBanner = ({data}) => {
  console.log(data)
  return (
    <div className="flex w-full bg-green-100 rounded-t-xl">
      <div className="text-sm text-right w-full mx-3 py-2">
        <UserName name={data.name} />
        <UserCity name={data.location_name} postcode={data.location_postcode}  />
      </div>
      <div className="bg-white shadow  flex items-center justify-center rounded-tr-xl">
        <Image src={"/logo_sm.png"} alt={""} width={50} height={50} />
      </div>
    </div>
  )
}

export default UserBanner
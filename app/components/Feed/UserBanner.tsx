import Image from "next/image"

const UserName = ({name}) => <div className="">{name}</div>
const UserCity = ({city,postcode}) => <div className="">{city} ({postcode})</div>

const UserBanner = ({data}) => {
  return (
    <div className="flex w-full bg-blue-50">
      <div className="text-sm text-right w-full mx-3 py-2">
        <UserName name={data.name} />
        <UserCity city={data.location_city} postcode={data.location_postcode}  />
      </div>
      <div className="bg-white shadow -mt-2 flex items-center justify-center">
        <Image src={"/logo_sm.png"} alt={""} width={50} height={50} />
      </div>
    </div>
  )
}

export default UserBanner
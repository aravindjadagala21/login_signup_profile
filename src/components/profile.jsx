import profile from '../assets/profile.png'
import { Camera } from 'lucide-react'
import User from '../database/User'

export default function Profile() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="rounded container 
      w-sm h-[70%]
      bg-gray-100 border-gray-400 border">
        <h1 className="text-3xl font-sans py-8 pl-4 bg-white">Account Setting</h1>
        <div className="flex flex-col p-5 gap-3 border-b-gray-500 border-b border-dashed">
          <div className="container w-full gap-5 flex items-center relative">
            <div className="relative">
              <img className="size-20 sm:size-30 rounded-full" src={profile} alt="profile" />
              <div className="absolute bottom-0 right-0
               bg-[#6c25ff] p-2 rounded-full 
               cursor-pointer">
                <Camera size={14} color="white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">{User.fullName ? User.fullName : "Marry Doe"}</h1>
              <p className="text-lg font-medium">{User.email ? User.email : "MarryDoe@gamil.com"}</p>
            </div>
          </div>
          <p className="text text-xl font">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, itaque!
          </p>
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router"

export default function Intro() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div 
        className="
        p-4 rounded box-border
        flex flex-col justify-end gap-2
        container w-sm h-[80%] bg-gray-100/50 border-gray-400 border"
      >
        <h1 className="text-2xl font-bold font-sans">
          Welcome to PopX
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <Link to="/signup"
          className="
          text-center text-white font-medium
          bg-[#6c25ff] hover:bg-[#6e25ffef] block p-4 rounded"
        >
          Create Account
        </Link>
        <Link to="login"
          className="
          text-center font-medium
          bg-indigo-200 hover:bg-indigo-300/70 block p-4 rounded"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}

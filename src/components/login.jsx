import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
  
    email: '',
    password: ''
  });
  const [msg,setMsg]= useState("")
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function submitHandler(e) {
    e.preventDefault();
    try {
      props.loginHandler(formData);
      navigate('/profile');
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <form  onSubmit={submitHandler}
        className="p-6 rounded flex flex-col justify-start gap-4 container max-w-sm min-h-[80%] bg-gray-100/50 border-gray-400 border">
        <h1 className="text-2xl font-bold font-sans ">
          Signin to Your <br /> PopX account
        </h1>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsam.
        </p>
        {['email', 'password'].map((field, index) => (
          <div key={index} className="relative border border-gray-400 rounded-lg mb-4">
            <label
              className="text-[#6c25ff] font-medium absolute -top-4 left-4 bg-gray-100 px-1"
              htmlFor={field}
            >
              {field === 'email' ? 'Email Address' : 'Password'}<span className="text-red-600">*</span>
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="w-full p-2.5 rounded-xl focus:outline-none"
            />
          </div>
        ))}
        <button
          className="
          bg-gray-300
          text-center text-white font-medium 
           hover:bg-[#6e25ffef] block p-4 rounded"
        >
          Create Account
        </button>
        <p
        className='text-center text-sm font-medium'
        >{msg? msg:""}</p>
        </form>
      </div>
    
  );
}

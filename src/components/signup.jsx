import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Signup(props) {
  const navigate = useNavigate();
  const [msg,setMsg] = useState("")
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  function handleChange (e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

   function handleSubmit(e) {
    e.preventDefault();

    console.log("inside formHandler")
    const { fullName, phoneNumber, email, password, companyName } = formData;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(fullName)) 
      return setMsg( "Please enter a valid full name (only letters and spaces).")
  
    if (!phoneRegex.test(phoneNumber)) 
      return setMsg("Phone number must be exactly 10 digits and contain only numbers.")
     
    if (!emailRegex.test(email)) 
      return setMsg("Please enter a valid email address.")
    
  
    if (!passwordRegex.test(password)) 
      return setMsg("Password must be at least 8 characters long and contain both letters and numbers.")
    
  
    if (!companyName || companyName.trim().length === 0) 
      return setMsg("Company name cannot be empty.")
    setMsg("")
    alert("form submitted successfully")
    props.signupHandler(formData)
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: 'yes',
    });
    navigate('/login')
    return 
  };

  return (
    <div className="min-h-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-4 rounded flex flex-col gap-5 container max-w-sm min-h-[80%] bg-gray-100/50 border-gray-400 border">
        <h1 className="text-3xl mb-4">Create your <br /> PopX account</h1>

        {['fullName', 'phoneNumber', 'email', 'password', 'companyName'].map((field, index) => (
          <div key={index} className="relative border border-gray-400 rounded-lg ">
            <label className="text-[#6c25ff] font-medium absolute -top-4 left-4 bg-gray-100 px-1 " htmlFor={field}>
              {field === 'fullName' ? 'Full Name' : field === 'phoneNumber' ? 'Phone Number' : field === 'email' ? 'Email Address' : field === 'password' ? 'Password' : 'Company Name'}<span className="text-red-600">*</span>
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`${field}`}
              className="w-full p-3 rounded-xl focus:outline-none"
            />
          </div>
        ))}

        <div className="mt-3 relative flex items-center p-4  gap-5">
          <label className="text-indigo-500 font-medium absolute -top-4 left-4">Are you an Agency?<span className="text-red-600">*</span></label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="size-6 accent-[#6c25ff] "
              />
             Yes
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className="size-6  accent-[#6c25ff]  "
              />
             No
            </label>
          </div>
        </div>

        <button type="submit" 
        className="
        justify-self-end font-bold
        mt-4 p-2 rounded-xl bg-[#6c25ff] text-white hover:bg-indigo-600">Create Account</button>

        <p
        className='text-center text-sm font-medium'
        >{msg? msg:""}</p>
      </form>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Signup(props) {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { fullName, phoneNumber, email, password, companyName } = formData;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(fullName)) return setMsg("Please enter a valid full name (only letters and spaces).");
    if (!phoneRegex.test(phoneNumber)) return setMsg("Phone number must be exactly 10 digits and contain only numbers.");
    if (!emailRegex.test(email)) return setMsg("Please enter a valid email address.");
    if (!passwordRegex.test(password)) return setMsg("Password must be at least 8 characters long and contain both letters and numbers.");
    if (!companyName || companyName.trim().length === 0) return setMsg("Company name cannot be empty.");

    setMsg("");
    alert("form submitted successfully");
    try{
      props.signupHandler(formData);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'yes',
      });
    }
    catch(err){
      alert(err.err)
      navigate('/login');
    }
   
 
    
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white p-1">
      <form 
        onSubmit={handleSubmit} 
        className="w-[320px] max-w-sm m-2 min-h-[70%] h-fit bg-gray-50 border border-gray-400 
        rounded sm:p-4 p-2 flex flex-col gap-4 "
      >
        <h1 className="text-3xl mb-2">Create your <br /> PopX account</h1>

        {['fullName', 'phoneNumber', 'email', 'password', 'companyName'].map((field, index) => (
          <div key={index} className="relative border border-gray-400 rounded-lg">
            <label className="text-[#6c25ff] font-medium absolute -top-4 left-4 bg-gray-50 px-1" htmlFor={field}>
              {field === 'fullName' ? 'Full Name' : field === 'phoneNumber' ? 'Phone Number' : field === 'email' ? 'Email Address' : field === 'password' ? 'Password' : 'Company Name'}
              <span className="text-red-600">*</span>
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`${field}`}
              className="w-full p-2 rounded-xl focus:outline-none"
            />
          </div>
        ))}

        <div className="relative flex flex-col sm:flex-row gap-2 items-start sm:items-center p-2">
          <label className="text-indigo-500 font-medium absolute -top-4 left-4 bg-gray-100 px-1">
            Are you an Agency?<span className="text-red-600">*</span>
          </label>
          <div className="flex ml-3 items-center gap-4 mt-5 sm:mt-0">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="size-6 accent-[#6c25ff]"
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
                className="size-6 accent-[#6c25ff]"
              />
              No
            </label>
          </div>
        </div>

        <button 
          type="submit"
          className="mt-2 p-2 rounded-xl bg-[#6c25ff] text-white font-bold hover:bg-indigo-600 transition"
        >
          Create Account
        </button>

        <p className="text-center text-sm font-medium text-red-600">
          {msg}
        </p>
      </form>
    </div>
  );
}

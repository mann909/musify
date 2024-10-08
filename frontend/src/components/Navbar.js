
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../redux/toggleSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLogin, setUserInfo } from '../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store) => store.user.user)
  let username = (user.name || 'Listener').split(" ")[0] 


  function clickHandler (){ 
     dispatch(toggleSearch())
  }

  function handleProfileClick(){
    navigate('/profile')
  }

  const handleLogout =()=>{
    localStorage.removeItem('jwt')
    dispatch(setLogin(false))
    navigate('/login')
  }
  return (
    <div className="h-[6.5rem] w-full flex md:flex-row md:justify-between  items-center bg-transparent pl-[20%] md:px-10 ">
      <p className=" lg:text-xl md:text-1xl  md:flex hidden text-slate-300">
        Playing for <span className="font-bold">&nbsp;{username}👋🏻</span>
      </p>
      <div className="flex lg:justify-center lg:gap-x-4 md:justify-start justify-center items-center  md:w-7/12 lg:w-4/12 w-8/12 md:ml-0 ml-6 lg:mr-[10rem]">
        <p onClick={clickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f4ecec" viewBox="0 0 256 256" className="lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </p>
        {/* <button className="lg:w-[12rem]  lg:h-[2.5rem]   md:w-[10rem] md:h-[2rem] w-[8rem] h-[1.5rem]   bg-gradient-to-tr from-[#833ab4] via-[#681dfd] to-[#fcb045] text-sm md:text-base font-bold mx-2 rounded text-white">
          Find Match!
        </button> */}
        {/* <img onClick={handleLogout} src='logo512.png' alt='logo' className='lg:w-[2.5rem] lg:h-[2.5rem] md:w-[1.5rem] md:h-[1.5rem]  w-5 h-5' /> */}
        <button 
        onClick={handleLogout}
        className='h-10 ml-5 mr-8 rounded-sm w-40 text-white bg-gradient-to-tr from-[#000000] to-[#434343] hover:scale-105'
        >
          Logout
        </button>

        <img
            onClick={handleProfileClick}
            src={ 
              user.updatedProfilePic ? URL.createObjectURL(user.updatedProfilePic) :
              user.profilePic ? decodeURIComponent(user.profilePic) :  
              "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image URL
            }
            alt="User"
            className="w-12 h-12 rounded-full border-1 border-black"
          />
      </div>
    </div>
  )
}

export default Navbar;


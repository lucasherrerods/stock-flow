import { useState } from "react"

export default function Auth() {
  //Estado que controla a transição dos form
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="bg-white relative overflow-hidden w-full h-full">
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 opacity-0 z-10 ${isActive ? 'translate-x-full opacity-100 z-40' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1>Create Account</h1>
            <span className="text-xs">or use your email for registeration</span>
            <input className="bg-[#eee] border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-0" type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button" onClick={() => setIsActive(false)} className="bg-[#512da8] text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-bold tracking-widest uppercase mt-2.5 cursor-pointer">Sign Up</button>
          </form>
        </div>
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 z-20 ${isActive ? 'translate-x-full' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1>Sign In</h1>
            <span className="text-xs">or use your email password</span>
            <input className="bg-[#eee] border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-0" type="email" placeholder="Email" />
            <input className="bg-[#eee] border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-0" type="password" placeholder="Password" />
            <a className="text-gray-300 text-sm no-underline mt-3.5 mb-2.5" href="#">Forget Your Password?</a>
            <button type="button" onClick={() => setIsActive(true)} className="bg-[#512da8] text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-bold tracking-widest uppercase mt-2.5 cursor-pointer">Sign In</button>
          </form>
        </div>
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out rounded-t-[150px] rounded-l-[150px] z-50 ${isActive ? '-translate-x-full border-r-[150px] border-b-[100px]' : ''}`}>
          <div className={`bg-[#512da8] text-white relative -left-full h-full w-full translate-x-0 transition-all duration-500 ease-in-out ${isActive ? 'translate-x-1/2' : ''}`}>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-500 ease-in-out -translate-x-full ${isActive ? 'translate-x-0' : ''}`}>
              <h1>Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-widest my-5">Enter your personal details to use all of site features</p>
              <button>Sign In</button>
            </div>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-500 ease-in-out right-0 translate-x-0 ${isActive ? 'translate-x-full' : ''}`}>
              <h1>Hello, Friend!</h1>
              <p className="text-sm leading-5 tracking-widest my-5">Register with your personal details to use all of site features</p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
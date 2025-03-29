import { useState } from "react"

export default function Auth() {
  //Estado que controla a transição dos form
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="bg-white relative overflow-hidden w-full h-full">
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 opacity-0 z-10 ${isActive ? 'translate-x-full opacity-100 z-50' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full gap-3">
            <h1 className="text-2xl font-bold mb-4">Crie sua conta</h1>
            <input className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="text" placeholder="Nome" />
            <input className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="email" placeholder="E-mail" />
            <input className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="password" placeholder="Senha" />
            <button className="bg-orange-500 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer hover:bg-orange-400 transition">
              Cadastrar
            </button>
          </form>
        </div>
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 z-20 ${isActive ? 'translate-x-full' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full gap-3">
            <h1 className="text-2xl font-bold mb-4">Faça login</h1>
            <input className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="email" placeholder="E-mail" />
            <input className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="password" placeholder="Senha" />
            <a className="text-gray-600 text-xs no-underline my-3 hover:underline" href="#">Esqueceu sua senha?</a>
            <button className="bg-orange-500 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer hover:bg-orange-400 transition">
              Entrar
            </button>
          </form>
        </div>
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out ${isActive ? '-translate-x-full rounded-r-[150px] rounded-br-[100px]' : 'rounded-tl-[150px] rounded-bl-[100px]'} z-30`}>
          <div className={`bg-gray-800 h-full w-[200%] relative transition-all duration-500 ease-in-out ${isActive ? 'left-0 translate-x-0' : 'left-[-100%] translate-x-0'}`}>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-500 ease-in-out ${isActive ? 'translate-x-0' : '-translate-x-full'}`}>
              <h1 className="text-2xl font-bold text-white">Acesse sua conta</h1>
              <p className="text-sm leading-5 tracking-wider my-5 text-white">Insira seus dados para acessar todos os recursos do site.</p>
              <button type="button" onClick={() => setIsActive(false)} className="bg-transparent border border-white text-white text-sm py-2.5 px-8 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-[#512da8] transition">
                Entrar
              </button>
            </div>
            <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 right-0 transition-all duration-500 ease-in-out ${isActive ? 'translate-x-full' : 'translate-x-0'}`}>
              <h1 className="text-2xl font-bold text-white">Criar conta</h1>
              <p className="text-sm leading-5 tracking-wider my-5 text-white">Cadastre-se para acessar todos os recursos do site.</p>
              <button type="button" onClick={() => setIsActive(true)} className="bg-transparent border border-white text-white text-sm py-2.5 px-8 rounded-lg font-semibold tracking-wider uppercase cursor-pointer hover:bg-white hover:text-[#512da8] transition">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
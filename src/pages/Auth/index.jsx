import { useState, useRef } from "react"
import api from '../../services/api.js'
import { ToastContainer, toast } from 'react-toastify'

export default function Auth() {
  //Card de notificações dinâmicas
  const notify = (msg, type) => toast[type](msg, { position: 'bottom-left', autoClose: 1500, theme: 'light' })

  //Estado que controla a transição dos form
  const [isActive, setIsActive] = useState(false)

  //Referências de cadastro
  const nameReg = useRef()
  const emailReg = useRef()
  const passwordReg = useRef()

  //Referências de login
  const emailLog = useRef()
  const passwordLog = useRef()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!emailLog.current.value || !passwordLog.current.value) {
      return notify('Por favor, preencha todos os campos.', 'error')
    }

    try {
      const { data: token } = await api.post('/auth/login', {
        email: emailLog.current.value,
        password: passwordLog.current.value
      })

      localStorage.setItem('token', token)

    } catch (error) {
      return notify('Houve um erro ao tentar acessar sua conta. Verifique seus dados e tente novamente.', 'error')
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    if (!nameReg.current.value || !emailReg.current.value || !passwordReg.current.value) {
      return notify('Por favor, preencha todos os campos.', 'error')
    }

    if (passwordReg.current.value.length < 8) {
      return notify('Por favor, insira uma senha com no mínimo 8 caracteres.', 'error')
    }

    try {
      await api.post('/auth/register', {
        name: nameReg.current.value,
        email: emailReg.current.value,
        password: passwordReg.current.value
      })

      notify('Cadastro realizado com sucesso!', 'success')
      setIsActive(false) //Volta para o login
    } catch (error) {
      return notify('Não foi possível realizar o cadastro. Verifique os dados e tente novamente.', 'error')
    }
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="bg-white relative overflow-hidden w-full h-full">
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 opacity-0 z-10 ${isActive ? 'translate-x-full opacity-100 z-50' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full gap-3">
            <h1 className="text-2xl font-bold mb-4">Crie sua conta</h1>
            <input ref={nameReg} className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="text" placeholder="Nome" />
            <input ref={emailReg} className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="email" placeholder="E-mail" />
            <input ref={passwordReg} className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="password" placeholder="Senha" />
            <button onClick={handleRegister} className="bg-orange-500 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer hover:bg-orange-400 transition">
              Cadastrar
            </button>
          </form>
        </div>
        <div className={`absolute top-0 h-full transition-all duration-500 ease-in-out left-0 w-1/2 z-20 ${isActive ? 'translate-x-full' : ''}`}>
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full gap-3">
            <h1 className="text-2xl font-bold mb-4">Faça login</h1>
            <input ref={emailLog} className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="email" placeholder="E-mail" />
            <input ref={passwordLog} className="bg-gray-200 border-0 my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" type="password" placeholder="Senha" />
            <a className="text-gray-600 text-xs no-underline my-3 hover:underline" href="#">Esqueceu sua senha?</a>
            <button onClick={handleLogin} className="bg-orange-500 text-white text-sm py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer hover:bg-orange-400 transition">
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
      <ToastContainer />
    </div>
  )
}
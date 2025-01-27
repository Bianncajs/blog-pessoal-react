import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }
    
    let component: ReactNode

    if (usuario.token !== "") {

        component = (
    <div className="w-full bg-[#5C7B91] text-white flex justify-center py-4">
      <div className="container flex justify-between items-center text-lg">
        <div className="font-semibold text-xl">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>
        </div>

        <div className="flex gap-6">
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
          <Link to='/postagens' className='hover:underline'>Postagens</Link>
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
          <Link to='/temas' className='hover:underline'>Temas</Link>
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
          <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
          <Link to='/perfil' className='hover:underline'>Perfil</Link>
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
          <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
return (
  <>
      { component }
  </>
)
}

export default Navbar;
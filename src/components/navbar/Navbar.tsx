import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-[#5C7B91] text-white flex justify-center py-4">
      <div className="container flex justify-between items-center text-lg">
        <div className="font-semibold text-xl">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>
        </div>

        <div className="flex gap-6">
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
            Postagens
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
            Temas
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
            Cadastrar tema
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
            Perfil
          </button>
          <button className="px-4 py-2 bg-[#3A5A77] hover:bg-[#2E4757] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A5A77] transition duration-300">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
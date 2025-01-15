function Navbar() {
    return (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between items-center text-lg">
                <div className="font-semibold text-xl">
                    Blog Pessoal
                </div>

                <div className="flex gap-6">
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300">
                        Postagens
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300">
                        Temas
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300">
                        Cadastrar tema
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300">
                        Perfil
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300">
                        Sair
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
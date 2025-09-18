import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-azul-escuro text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="murilologo.png" alt="Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold">Murilo Martins</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-dourado transition duration-300">Home</a>
          <a href="#about" className="hover:text-dourado transition duration-300">Sobre</a>
          <a href="#experience" className="hover:text-dourado transition duration-300">Experiência</a>
          <a href="#certificates" className="hover:text-dourado transition duration-300">Certificados</a>
          <a href="#projects" className="hover:text-dourado transition duration-300">Projetos</a>
          <a href="#contact" className="hover:text-dourado transition duration-300">Contato</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaWhatsapp size={24} />
          </a>
          <button className="btn-gold ml-4">
            Baixar Curriculo
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
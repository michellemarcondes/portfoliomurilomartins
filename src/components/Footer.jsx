import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-azul-escuro text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-dourado transition duration-300">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Michelle Marcondes. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
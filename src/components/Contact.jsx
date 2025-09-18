import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src="/studio.jpg" 
            alt="Foto contato" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div className="bg-neutro-fundo p-8 rounded-lg shadow-lg mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-azul-escuro mb-6">Contato</h2>
          <form>
            <div className="mb-4">
              <label className="block text-neutro-texto mb-2" htmlFor="name">Nome</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-neutro-texto mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-neutro-texto mb-2" htmlFor="message">Mensagem</label>
              <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="btn-gold w-full">Enviar Mensagem</button>
          </form>
          
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <FaPhone className="text-dourado mr-2" />
              <span>(19) 99999-9999</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-dourado mr-2" />
              <span>contato@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-dourado mr-2" />
              <span>Bairro x - Campinas, SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
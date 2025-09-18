import { FaCut, FaPaintBrush } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 bg-neutro-fundo">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 md:gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-azul-escuro">Murilo Martins</h1>
          <p className="text-xl text-neutro-texto mt-4">Sou Murilo Martins, apaixonado por transformar estilos com dedicação e agilidade. Cada corte é uma conquista e um passo rumo ao meu sonho de ter meu próprio salão.</p>
          <button className="btn-gold mt-8">
            Contato
          </button>
        </div>
        
        <div className="relative mt-8 md:mt-0">
          <img 
            src="aboutimg.jpg" 
            alt="Murilo Martins" 
            className="w-full max-w-md mx-auto border-4 border-dourado rounded-full"
          />
          <div className="absolute -top-4 -left-4 animate-pulse">
            <FaCut className="text-dourado" size={40} />
          </div>
          <div className="absolute -bottom-4 -right-4 animate-pulse">
            <FaPaintBrush className="text-dourado" size={40} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
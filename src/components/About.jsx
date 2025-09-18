const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-azul-escuro mb-8">Sobre Mim</h2>
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-neutro-texto text-justify mb-4">
              Sou o Murilo Martins, do São José - Campinas (SP), e encontrei na barbearia não apenas uma profissão, mas uma paixão que carrego desde pequeno. Minha trajetória sempre foi marcada por muito esforço e dedicação, porque acredito que nada vem de graça: “Nada dado, nada herdado, viemos do pouco e vamos conquistar o muito.”
              O que me motiva diariamente é ver a transformação e a satisfação dos clientes em cada corte. Tenho como principais habilidades a agilidade, o foco e a boa comunicação, que tornam cada atendimento mais leve e descontraído — afinal, além de cortar cabelo, gosto de conversar e criar conexões.    
            </p>
            <p className="text-neutro-texto text-justify">
              Minha primeira grande conquista foi comprar a minha própria máquina, um marco que me mostrou que cada passo é resultado do meu trabalho. Hoje, sigo em busca de novos objetivos: ter meu próprio salão e investir em melhores equipamentos para oferecer sempre o melhor.

              Fora da barbearia, gosto de andar de bicicleta e jogar sinuca, hobbies que me ajudam a equilibrar a vida e recarregar as energias. Quero ser lembrado pelo meu nome profissional, Murilo Barbeiro, como alguém que cresceu com humildade, dedicação e vontade de conquistar sempre mais.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="perfil.jpg" 
              alt="Sobre Murilo" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
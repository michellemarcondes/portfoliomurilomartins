const Experience = () => {
  const skills = [
    "Trabalho 01",
    "Trabalho 02",
    "Trabalho 03"
  ]

  return (
    <section id="experience" className="py-12 bg-neutro-fundo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-azul-escuro mb-8">Experiência e Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-azul-escuro mb-2">{skill}</h3>
              <p className="text-neutro-texto">Descrição da habilidade e experiência com {skill}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
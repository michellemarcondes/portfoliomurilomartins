import { useState } from 'react'

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    { id: 1, title: 'Certificado em Logica de Programação', image: 'logica.pdf' },
    { id: 2, title: 'Certificado HTML', image: 'certificadohtml.pdf' },
    { id: 3, title: 'Certificado JavaScript', image: 'certificadojs.pdf' },
    { id: 4, title: 'Certificado CC50 Harvard - Escola do Saber', image: 'harvard.pdf' },
  ]

  const openModal = (cert) => {
    setSelectedCert(cert)
    setModalIsOpen(true)
  }

  return (
    <section id="certificates" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-azul-escuro mb-8">Certificados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map(cert => (
            <div key={cert.id} className="bg-white shadow-md rounded-lg overflow-hidden text-center">
              <iframe
                src={cert.image}
                className="w-full h-64 cursor-pointer"
                onClick={() => openModal(cert)}
                title={cert.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {modalIsOpen && selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-4 flex justify-end">
                <button 
                  onClick={() => setModalIsOpen(false)} 
                  className="text-azul-escuro hover:text-dourado text-xl font-bold"
                >
                  X
                </button>
              </div>
              <div className="p-4 flex justify-center">
                <iframe
                  src={selectedCert.image}
                  className="w-full h-96"
                  title={selectedCert.title}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
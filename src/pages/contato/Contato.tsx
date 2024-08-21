import { useState } from 'react';

function Contato() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');

    if (!name || !email || !message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    alert('Mensagem enviada com sucesso!');

  };

  return (
    <section className="bg-blue-50 dark:bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-lg font-semibold uppercase tracking-wide text-salmao dark:text-salmao">
              Contato
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 uppercase dark:text-verde text-3xl sm:text-5xl">
              Mulheres em Foco
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-black">
                Temos prazer em atendê-la. Se você tiver alguma dúvida, sugestão
                ou quiser saber mais sobre nossos serviços, preencha o
                formulário abaixo ou entre em contato conosco através dos canais
                indicados.
              </p>
              <ul className="mb-6 md:mb-0">
                  <li className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-salmao text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-verde">
                        Nosso Endereço
                      </h3>
                      <p className="text-gray-600 dark:text-black">
                        Avenida Paulista, 123
                      </p>
                      <p className=" text-gray-600 dark:text-black">
                        São Paulo - Brasil
                      </p>
                    </div>
                  </li>
                <li className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-salmao text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-verde">
                      Contatos
                    </h3>
                    <p className="text-gray-600 dark:text-black">
                      Telefone: +55 (11) 91234-5678
                    </p>
                    <p className="mb-4 text-gray-600 dark:text-black">
                      Email: familia75.grupo04@gmail.com
                    </p>
                  </div>
                </li>                
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-xl font-bold uppercase dark:text-verde">
                Fale conosco:
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="message"
                      name="textarea"
                      placeholder="Sua mensagem..."
                      value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0 grid-cols-5 gap-4"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-salmao hover:border-black text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Enviar Mensangem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;

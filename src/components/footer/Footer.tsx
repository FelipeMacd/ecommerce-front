import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="bg-verde text-white"> 
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between">

            <div className="w-full sm:w-1/2 mb-6">
              <Link to="/home" onClick={scrollToTop} className="flex items-center">
                <span className="text-3xl font-bold uppercase text-rosa-claro">Mulheres em Foco</span>
              </Link>
              <p className="mt-2 text-cinza">
                Construindo o futuro das mulheres através da educação.
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex justify-between">
              <div>
                <h2 className="mb-4 text-lg font-semibold text-rosa-claro">Categorias</h2>
                <ul className="text-cinza">
                  <li className="mb-2">
                    <Link to="/cadastroCategoria" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Adicionar Categoria
                    </Link>
                  </li>
                  <li>
                    <Link to="/categoriasAdm" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Todas as categorias
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-rosa-claro">Produtos</h2>
                <ul className="text-cinza">
                  <li className="mb-2">
                    <Link to="/cadastroProduto" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Adicionar Curso
                    </Link>
                  </li>
                  <li>
                    <Link to="/produtosAdm" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Todos os Cursos
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-rosa-claro">Projeto</h2> 
                <ul className="text-cinza">
                  <li className="mb-2">
                    <Link to="/contato" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link to="/nossotime" onClick={scrollToTop} className="hover:text-rosa-claro">
                      Nosso time
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="flex justify-between items-center">
            <span className="text-sm text-cinza">
              © 2024 Mulheres em Foco. Todos os direitos reservados.
            </span>
            <Link to="https://github.com/mulheresemfoco" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-8 h-8 text-azul-claro hover:text-rosa-claro transition-colors duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

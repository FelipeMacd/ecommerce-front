import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Produto from "../../models/Produto";
import { buscar } from "../../service/Service";
import { toastAlerta } from "../../utils/toastAlerta";

function ProdutoPage() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  const notaAvaliacao = Math.random() * (5 - 4.2) + 4.2;
  const quantidadeAvaliacoes = Math.random() * (360 - 150) + 150;


  const imageBaseUrl = "../../src/assets/produtos";
  const imageUrl = `${imageBaseUrl}/${produto.id}.jpg`;

  return (
    <>
     {loading && (
        <ThreeDots
          visible={true}
          height="50"
          width="50"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <section className="py-8 bg-white md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              
              <img
                className="w-full"
                src={imageUrl}
                alt={produto.nome}
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-verde">
                {produto.nome}
              </h1>
              <p>{produto.categoria?.categoria}</p>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-lg font-bold text-gray-900 sm:text-xl dark:text-black">
                  R${produto.preco}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex ml-2 text-yellow-400">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.415 8.23L12 18.897l-7.415 4.603L6 15.27 0 9.423l8.332-1.268z" />
                    </svg>
                  </div>
                  <p className="text-sm mr-3 font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({notaAvaliacao.toFixed(1)})
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-black"
                  >
                    {quantidadeAvaliacoes.toFixed(0)} Avaliações
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <Link
                  to={`/carrinho/produto/${produto.id}`}
                  title=""
                  className="text-white mt-4 sm:mt-0 bg-salmao hover:bg-cinxa focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Adicionar ao carrinho
                </Link>
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-base font-medium text-black">
                {produto.descricao}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProdutoPage;

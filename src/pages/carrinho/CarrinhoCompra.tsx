import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../service/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import Produto from "../../models/Produto";


function CarrinhoCompra() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  

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

  const imageBaseUrl = "../../src/assets/produtos";
  const imageUrl = `${imageBaseUrl}/${produto.id}.png`;

  return (
    <>
      <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
        <h1 className="text-3xl font-bold uppercase text-verde text-center">
          Carrinho de compra
        </h1>

        <div className="items-center justify-center">
          <div className="grid mt-16">
            <div className="md:col-span-2 space-y-4">
              <div className="grid grid-cols-3 items-start gap-4">
                <div className="col-span-2 flex items-start gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                    <img
                      src={imageUrl}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-gray-800">
                      {produto.nome}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5">
                      {produto.categoria?.categoria}
                    </p>

                    <button
                      type="button"
                      className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 fill-current inline"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      REMOVER
                    </button>
                  </div>
                </div>

                <div className="ml-auto text-right">
                  <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                    R${produto.preco}
                  </h4>        
                </div>
              </div>

              <div className="bg-gray-100 rounded-md p-4 h-max">
                <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
                  Resumo do pedido
                </h3>

                <ul className="text-gray-800 mt-6 space-y-3">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Subtotal{" "}
                    <span className="ml-auto font-bold">R${produto.preco}</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Desconto <span className="ml-auto font-bold">R$0.00</span>
                  </li>
                  <hr className="border-gray-300" />
                  <li className="flex flex-wrap gap-4 text-sm font-bold">
                    Total <span className="ml-auto">R${produto.preco}</span>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
                  <Link to="/compraRealizadaComSucesso">
                    <button
                      type="button"
                      className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-salmao hover:bg-rosa-claro text-white rounded-md"
                    >
                      Finalizar compra
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrinhoCompra;

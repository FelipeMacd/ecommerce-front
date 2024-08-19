import { useContext, useEffect, useState } from 'react';
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar } from '../../../service/Service';
import CardCategoria from '../cardCategorias/CardCategorias';
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaCategoria() {
                const [categorias, setCategorias] = useState<Categoria[]>([]);
              
                let navigate = useNavigate();
              
                const { usuario, handleLogout } = useContext(AuthContext);
                const token = usuario.token;
              
                async function buscarCategorias() {
                  try {
                    await buscar('/categorias', setCategorias, {
                      headers: { Authorization: token },
                    });
                  } catch (error: any) {
                    if(error.toString().includes('403')) {
                      toastAlerta('O token expirou, favor logar novamente', 'info')
                      handleLogout()
                    }
                  }
                }
              
                useEffect(() => {
                  if (token === '') {
                    toastAlerta('Você precisa estar logado', 'info');
                    navigate('/login');
                  }
                }, [token]);
              
                useEffect(() => {
                  buscarCategorias();
                }, [categorias.length]);
                return (
                  <>
                    {categorias.length === 0 && (
                      <Dna
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                      />
                    )}
                    <div className="flex justify-center w-full my-4">
                      <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {categorias.map((categoria) => (
                            <>
                              <CardCategoria key={categoria.id} categoria={categoria} />
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              
              export default ListaCategoria;
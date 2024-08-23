import { useContext, useEffect, useState } from 'react';
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../utils/toastAlerta";
import { buscar } from '../../../service/Service';

import Categoria from "../../../models/Categoria";
import CardCategoriaUsuario from '../cardCategoriaUsuario/CardCategoriaUsuario';


function ListaCategoriaUsuario() {
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
                      <ColorRing
                        visible={true}
                        height="100"
                        width="100"
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
                                <CardCategoriaUsuario key={categoria.id} categoria={categoria} />                             
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              
              export default ListaCategoriaUsuario;
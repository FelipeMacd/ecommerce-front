import { useContext, useEffect } from 'react';
import home from '../../assets/home.jpg';
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProduto';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';


function Home() {

  return (
    <>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-verde font-bold text-4xl xl:text-5xl">
                        Construindo o futuro das mulheres
                         <span className="text-salmao"> através da educação</span>
                    </h1>
                    <p className="text-azul-claro font-medium max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    Aprenda,  Inspire, conquiste: descubra o poder que há em você!
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                            aaaaaaaaaaa
                        </a>
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
                          Nossos cursos
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src={home} className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
    </>
  );
}

export default Home;
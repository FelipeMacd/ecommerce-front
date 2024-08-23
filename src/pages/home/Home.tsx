import home from '../../assets/home.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

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
                    <div className="pt-8 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to="/produtos" className="px-7 py-3 w-full font-semibold bg-azul-claro text-white text-center hover:bg-verde rounded-md block sm:w-auto">
                          Nossos cursos
                        </Link>
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
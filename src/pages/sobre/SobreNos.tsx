import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import sobre from "../../assets/sobre.png";

export default function SobreNos() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-lg font-semibold leading-7 text-salmao">
                Mulheres em Foco
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-verde sm:text-4xl">
                Quem Somos
              </h1>           
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={sobre}
            className="w-[48rem] max-w-none"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p className="text-black text-lg">
              Somos um movimento dedicado a transformar vidas por meio da educação e do empoderamento feminino. Na "Mulheres em foco" o nosso propósito é claro: promover igualdade para as mulheres em todas as esferas da sociedade.
              </p>

              <p className="mt-8 text-black text-lg">
              Nossa plataforma oferece cursos profissionalizantes acessíveis e de alta qualidade, ministrados exclusivamente por instrutoras mulheres. Acreditamos que, ao proporcionar maior visibilidade às mulheres como líderes e educadoras, fortalecemos a confiança e a conexão entre alunas e instrutoras.

              </p>
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-verde">
                Qual a nossa missão?
              </h3>
              <p className="mt-6 text-black text-lg">
              Com foco no empoderamento, igualdade e acessibilidade, nossa missão é apoiar e inspirar mulheres em cada etapa de sua jornada profissional. Queremos que cada mulher que passar por "Mulheres em Foco" sinta-se capacitada a alcançar seus objetivos e contribuir para um mundo mais justo e igualitário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

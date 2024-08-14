import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import sobre from "../../assets/sobre.png";

export default function SobreNos() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Mulheres em Foco
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Somos um movimento dedicado a transformar vidas por meio da educação e do empoderamento feminino. Na "Mulheres em foco" o nosso propósito é claro: promover igualdade para as mulheres em todas as esferas da sociedade.
              </p>

              <p className="mt-8">
              Nossa plataforma oferece cursos profissionalizantes acessíveis e de alta qualidade, ministrados exclusivamente por instrutoras mulheres. Acreditamos que, ao proporcionar maior visibilidade às mulheres como líderes e educadoras, fortalecemos a confiança e a conexão entre alunas e instrutoras.

              </p>
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Qual a nossa missão?
              </h3>
              <p className="mt-6">
              Com foco no empoderamento, igualdade e acessibilidade, nossa missão é apoiar e inspirar mulheres em cada etapa de sua jornada profissional. Queremos que cada mulher que passar por "Mulheres em Foco" sinta-se capacitada a alcançar seus objetivos e contribuir para um mundo mais justo e igualitário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

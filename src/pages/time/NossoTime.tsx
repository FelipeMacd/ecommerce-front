const people = [
  {
    name: "Cícero Macedo",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGsbMFjkXH49A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720187823519?e=1729728000&v=beta&t=c3unOqOhW2rcGGlyecJsNNChSRSomOeaJtAtYjq6wX0",
  },
  {
    name: "Nicollas Moraes",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQH9m0ps4YLYOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710371853285?e=1729728000&v=beta&t=VA9mEGGsMxw5qaSTw9GZAFPIVa-DE_QnnU5TNRKNNO4",
  },
  {
    name: "Gabriella Jacubavicius",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGb-8873-jaoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723386757068?e=1729728000&v=beta&t=2VzdfYxN4qX8mZTqb04qFx4gU1uakJeWRBN5Ikksh7w",
  },
  {
    name: "Vanessa Mendes",
    imageUrl: "https://avatars.githubusercontent.com/u/167040619?v=4",
  },
  {
    name: "Matheus Neves",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQE-K28yytdURw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718213702714?e=1729728000&v=beta&t=pA_1tWJryDIACOMOIuFyX1vqq1VigNRZwXPyGebnmok",
  },
  {
    name: "Victor Camargo",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQH22FswdtmoPQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721861602400?e=1729728000&v=beta&t=nMNjw-sE3fGVdLiy5yAVew6G9N5S21NvmoHep0s8x1s",
  }
];

export default function NossoTime() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight uppercase text-verde sm:text-4xl">
            Conheça nosso time
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

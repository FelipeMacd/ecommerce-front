const people = [
  {
    name: "Cícero Macedo",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGsbMFjkXH49A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720187823553?e=1735776000&v=beta&t=IlOWBnd9ZN0sGfk8r00wZtOZKSWQ4tuVe_43FURo2EI",
  },
  {
    name: "Nicollas Moraes",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQH9m0ps4YLYOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710371853285?e=1735776000&v=beta&t=Ln7E0zjA2tqSZSbcSoEfkITZC4a50OlXn1k-s4ahmqo",
  },
  {
    name: "Gabriella Jacubavicius",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGb-8873-jaoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723386757085?e=1735776000&v=beta&t=ZtS8-N8oWZinWWUX3JDbrKe3EbiuZMDViIn4JXu2plY",
  },
  {
    name: "Vanessa Mendes",
    imageUrl: "https://avatars.githubusercontent.com/u/167040619?v=4",
  },
  {
    name: "Matheus Neves",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQE-K28yytdURw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718211569415?e=1735776000&v=beta&t=dIfM4sLcwC13Az0h3bNyz5EbM93UHbKG7GDJrCftskE",
  },
  {
    name: "Victor Camargo",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQH22FswdtmoPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721861602414?e=1735776000&v=beta&t=xc53bbEZryD9e9ydZX4BWYAZy4LAdgDdp13HHQwwf0c",
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

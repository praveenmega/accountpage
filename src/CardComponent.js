import React from "react";

const data = [
  {
    name: "Ricardo Cooper",
    img: "/assets/author.jpg",
    email: "ricardo.cooper@example.com",
    date: "January 7, 2020",
  },
  {
    name: "Kristen Ramos",
    img: "/assets/author.jpg",
    email: "kristen.ramos@example.com",
    date: "January 7, 2020",
  },
  {
    name: "Ted Fox",
    img: "/assets/author.jpg",
    email: "ted.fox@example.com",
    date: "January 7, 2020",
  },
];

function CardComponent(props) {
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <a
                href="/"
                className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-200"
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                          {item.name}
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="truncate">{item.email}</span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <div className="text-sm leading-5 text-gray-900">
                            Applied on
                            <time dateTime="2020-01-07">{item.date}</time>
                          </div>
                          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardComponent;

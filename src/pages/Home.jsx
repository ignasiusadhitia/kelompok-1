import React from "react";

const Home = () => {

  const features = [
    {
      id: 1,
      title: "Connect with Peers",
      description: "Join groups, participate in forums, and share knowledge.",
    },
    {
      id: 2,
      title: "Access Resources",
      description: "Discover our library of articles, videos, and guides.",
    },
    {
      id: 3,
      title: "Grow Together",
      description: "Learn new skills and unlock growth opportunities with us.",
    },
    {
      id: 4,
      title: "Stay Updated",
      description: "Get the latest news and updates from our community.",
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-sky-500">BlueSky Community</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore resources, connect with peers, and grow together with BlueSky.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
              Our Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sky-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center lg:text-left">
            <span className="block">Ready to dive in?</span>
            <span className="block text-sky-200">
              Let's join the community today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 flex justify-center lg:justify-end">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

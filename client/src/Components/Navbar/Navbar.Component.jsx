import React, { useState } from "react";
import Modal from "./Modal.Component";

const Navbar = () => {
  const dropdowns = [
    {
      id: 1,
      name: "Images",
      items: ["Images Home", "Vectors", "Photos", "Editorials"],
    },
    {
      id: 2,
      name: "Video",
      items: ["Web Development", "Mobile Apps", "SEO Services"],
    },
    {
      id: 3,
      name: "Browse Content",
      items: ["Web Development", "Mobile Apps", "SEO Services"],
    },
    {
      id: 4,
      name: "Enterprise",
      items: ["Web Development", "Mobile Apps", "SEO Services"],
    },
  ];

  const pricings = [
    {
      id: 1,
      imgUrl: "/price1.png",
      alt: "Individual Plans",
      name: "Images",
      para: "With access to 400M+ photos, vectors, illustrations, and more Includes AI generated images!",
    },
    {
      id: 2,
      imgUrl: "/price1.png",
      alt: "Individual Plans",
      name: "Videos",
      para: "With access to 400M+ photos, vectors, illustrations, and more Includes AI generated images!",
    },
    {
      id: 3,
      imgUrl: "/price1.png",
      alt: "Team Plans",
      name: "For Business",
      para: "With access to 400M+ photos, vectors, illustrations, and more Includes AI generated images!",
    },
  ];

  const pricingstwo = [
    {
      id: 1,
      name: "Generative AI plans",
      content:
        "Generate unique images with the AI generator and get access to over 3 million AI generated images.",
    },
    {
      id: 2,
      name: "Music plans",
      content:
        "Download tracks one at a time, or get a subscription with unlimited downloads.",
    },
    {
      id: 3,
      name: "Editoral plans",
      content:
        "Instant access to over 50 million images and videos for news, sports, and entertainment.",
    },
    {
      id: 4,
      name: "Dev API",
      content:
        "Includes templates, design tools, AI-powered recommendations, and much more.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="shadow-sm">
      <div className="px-5 py-3 justify-between flex">
        <div className="flex items-center">
          <a href="/">
            <svg
              className="w-full max-w-32 mr-4"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 175 26"
              data-testid="shutterstock-logo-pos.svgIcon"
              alt="Shutterstock"
              title="Shutterstock"
            >
              <g fill="#fc3441" fill-rule="evenodd">
                <path d="m104.44 14.78-1.41-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.35 0 4.42 1.1 4.65 1.22l1.3-3.5c-.5-.26-2.6-1.42-5.91-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.22 2.06-3.1 0-4.92-.95-5.45-1.18l-1.42 3.43c.44.23 2.56 1.46 6.69 1.46 4 0 7.22-2.04 7.22-5.84-.03-3.54-2.34-4.88-5.18-5.38M116.69.58l-3.8 2.16V7.3h-2v3.73h2v8.07c0 3.44 1.38 6.53 6.24 6.53h1.52V21.9h-.57c-2.4 0-3.4-1.42-3.4-3.34v-7.53h4.36V7.3h-4.35V.58m29.64 10.17c1.48 0 3 .69 3.45 2.36l3.44-1.34c-.96-3.5-4.13-4.82-6.92-4.82-5 0-7.02 3.2-7.02 6.3v6.45c0 3.1 2.02 6.3 7.02 6.3 2.8 0 5.96-1.31 6.92-4.82l-3.44-1.34c-.46 1.67-1.97 2.37-3.45 2.37-2.58 0-3.26-1.45-3.26-3.1v-5.26c0-1.65.68-3.1 3.26-3.1m16.22 4.79 7.1-8.23h-4.67l-6.1 7.18V.58h-3.8v25.06h3.8v-5.83l1.24-1.45 5.44 7.28h4.55l-7.56-10.1M131.66 11.3h-3.95c-.63 0-1.14.53-1.14 1.18v4.4h-3.89v-4.4a5.1 5.1 0 0 1 5.03-5.17h3.95v4m-3.21 10.33h3.94c.63 0 1.14-.52 1.14-1.16v-4.4h3.89v4.4a5.1 5.1 0 0 1-5.03 5.16h-3.94v-4M64.1 7.3h4.36v3.74H64.1v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07h-6.39v7.53c0 1.92 1 3.34 3.4 3.34h.56v3.73h-1.52c-4.86 0-6.23-3.09-6.23-6.53v-8.07H48.2V7.3h1.93V2.74l3.8-2.16v6.73h6.38V2.74L64.1.58v6.73m-40.96-.36c-1.2 0-2.42.24-3.51.72V.58h-3.8v25.06h3.8V11.32c.76-.5 1.86-.8 2.93-.8 2.39 0 3.5 1.37 3.5 3.38v11.74h3.8V13.37c0-3.7-2.6-6.42-6.72-6.42M42.37 22c-.72.4-1.63.63-2.54.63-2.83 0-3.9-1.49-3.9-3.53V7.3h-3.79v11.87c0 4.61 2.6 6.83 7.23 6.83 2.21 0 4.67-.58 6.8-1.52V7.3h-3.8V22M8.74 14.78l-1.42-.25c-1.4-.26-2.6-.6-2.6-2.05 0-1.25 1.27-1.83 2.85-1.83 2.36 0 4.42 1.1 4.66 1.22l1.28-3.5c-.49-.26-2.59-1.42-5.9-1.42-3.03 0-6.73 1.64-6.73 5.7 0 3.65 2.53 4.82 4.97 5.26l1.7.3c1.64.29 2.54.92 2.54 2.02 0 1.4-1.28 2.06-3.21 2.06-3.1 0-4.93-.95-5.45-1.18L0 24.54C.45 24.77 2.56 26 6.7 26c4 0 7.22-2.04 7.22-5.84-.04-3.54-2.35-4.88-5.18-5.38m71.61.31h-6.4v-1.34c0-1.49.73-3.08 3.22-3.08 2.4 0 3.18 1.55 3.18 3v1.42zm3.8-1.84c0-3.35-2.49-6.3-6.96-6.3-5.07 0-7.02 3.26-7.02 6.3v6.1c0 4.2 2.62 6.65 7.02 6.65 3.89 0 5.9-2.31 6.5-3.7l-3.2-1.98c-.27.82-1.54 1.96-3.27 1.96-2.35 0-3.25-1.34-3.25-3.03l-.01-1h10.19v-5zm2.43.01v12.38h3.79V13.6c0-1.05.58-2.85 3.36-2.85.44 0 1.43.13 1.74.2v-3.8a9.3 9.3 0 0 0-1.93-.19c-4.82 0-6.96 3.11-6.96 6.31"></path>
              </g>
            </svg>
          </a>

          {/* Navigation Links */}
          <div className="flex">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.id} className="relative group">
                <button className="flex text-gray-600 font-semibold items-center gap-1 pl-3 pr-1 py-2 text-[12px] hover:text-black">
                  {dropdown.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="w-[150px] absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-hard-edge mt-0 text-sm items-start">
                  {dropdown.items.map((item, index) => (
                    <a
                      key={index}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-2 py-2 mt-1 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="/ai-generator"
              className="text-gray-600 font-semibold items-center gap-1 pl-3 pr-1 py-2 text-[12px] hover:text-black"
            >
              AI Generator
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative group w-auto">
            <button className="flex text-gray-600 font-semibold items-center gap-1 pl-3 py-2 text-[12px] hover:text-black">
              Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="group-hover:flex absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-hard-edge mt-0 text-sm w-max left-1/2 transform -translate-x-2/3">
              {pricings.map((pricing) => (
                <div
                  key={pricing.id}
                  className="custom flex flex-col my-5 mx-1 items-start bg-gray-200 px-5 py-3 rounded-lg hover:bg-slate-300"
                >
                  <img src={pricing.imgUrl} />
                  <h3 className="py-4 text-gray-500 text-sm">{pricing.alt}</h3>
                  <div className="onhov flex items-center text-lg">
                    <a
                      href={`/${pricing.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {pricing.name}
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform -rotate-90 mt-1 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="py-4 text-gray-500 text-[12px] max-w-52">
                    {pricing.para}
                  </p>
                </div>
              ))}

              <div className="flex flex-col my-5 mx-1 items-start px-5 py-3">
                {pricingstwo.map((pricingtwo) => (
                  <div key={pricingtwo.id}>
                    <a
                      href={`/${pricingtwo.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex text-lg hover:underline"
                    >
                      {pricingtwo.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform -rotate-90 mt-2 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <p className="py-2 text-gray-500 text-[12px] max-w-64">
                      {pricingtwo.content}
                    </p>
                    <hr className="mb-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Language Icon */}
            <span 
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
            className="relative inline-block cursor-pointer w-[55px] mx-2 px-4 py-2 hover:bg-gray-50 rounded-full transition-all duration-200 flex">
              <svg
                className="text-gray-500 justify-center"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                data-testid="Language.svgIcon"
                fill="currentColor"
              >
                <path d="M16 2.667c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 2.667 16 2.667zm9.2 8h-3.867c-.4-1.6-1.067-3.2-1.867-4.8 2.4.933 4.533 2.533 5.733 4.8zM16 5.333c1.067 1.6 2 3.333 2.533 5.333h-5.067c.533-1.867 1.467-3.733 2.533-5.333zM5.733 18.667c-.267-.8-.4-1.733-.4-2.667s.133-1.867.4-2.667h4.533c-.133.933-.133 1.733-.133 2.667s.133 1.733.133 2.667H5.733zM6.8 21.333h4c.4 1.6 1.067 3.333 1.867 4.8C10.134 25.2 8 23.6 6.8 21.333zm3.867-10.666h-4C8 8.4 10 6.8 12.4 5.867c-.667 1.6-1.2 3.2-1.733 4.8zm5.333 16c-1.067-1.6-2-3.333-2.533-5.333h5.067c-.533 1.867-1.467 3.733-2.533 5.333zm3.067-8h-6.133c-.133-.933-.267-1.733-.267-2.667s.133-1.867.267-2.667h6.267c.133.8.267 1.733.267 2.667s-.267 1.733-.4 2.667zm.4 7.466c.8-1.467 1.467-3.067 1.867-4.8h3.867c-1.2 2.133-3.333 3.867-5.733 4.8zm2.4-7.466C22 17.734 22 16.934 22 16s-.133-1.733-.133-2.667H26.4c.267.8.4 1.733.4 2.667s-.133 1.867-.4 2.667h-4.533z"></path>
              </svg>
              {showModal && <Modal />}
            </span>

            {/* Heart Icon */}
            <span className="group w-[40px] px-2 py-2 hover:bg-gray-50 rounded-full transition-all duration-200 flex">
              <svg
                className="text-gray-500 justify-center"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                data-testid="Heart.svgIcon"
                fill="currentColor"
              >
                <path d="M15.667 7.6C7.267-.96-2.92 9.427 5.48 17.987l10.187 10.387L25.84 17.987C34.28 9.334 24.093-1 15.667 7.6zM24 16.12l-8.267 8.44-8.347-8.44c-2.147-2.187-2.893-4.6-2.053-6.613.596-1.443 1.992-2.44 3.621-2.44h.062-.003c1.907.142 3.58 1.039 4.739 2.391l.008.009 1.907 1.947 1.893-1.947c1.179-1.377 2.871-2.285 4.777-2.425l.023-.001h.029c1.626 0 3.021.99 3.615 2.401l.01.026c.84 2.027.093 4.453-2.013 6.653z"></path>
              </svg>
            </span>

            {/* Cart Icon */}
            <span className="group w-[40px] px-2 py-2 hover:bg-gray-50 rounded-full transition-all duration-200">
              <svg
                className="text-gray-500"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 32 32"
                data-testid="ShoppingCart.svgIcon"
                fill="currentColor"
              >
                <path d="M22.667 24.667c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667c0-1.467-1.2-2.667-2.667-2.667zm-10.667 0c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667 2.667-1.2 2.667-2.667c0-1.467-1.2-2.667-2.667-2.667zm14.667-12V7.334H9.734l-.533-4h-5.2c0 1.467 1.2 2.667 2.667 2.667h.133l2.667 17.333h15.867c0-1.467-1.2-2.667-2.667-2.667h-10.8l-.4-2.667h9.867c2.933 0 5.333-2.4 5.333-5.333zm-15.734 2.666l-.8-5.333H24v2.667c0 1.467-1.2 2.667-2.667 2.667h-10.4z"></path>
              </svg>
            </span>
          </div>

          <div className="flex p-2 gap-2">
            <button className="text-[12px] text-gray-600 rounded-full border border-gray-300 px-4 py-2 font-bold hover:bg-gray-100 hover:border-gray-400">Log in</button>
            <button className="text-[12px] text-gray-600 rounded-full border bg-gray-200 border-gray-300 px-4 py-2 font-bold hover:bg-customRed hover:border-customRed hover:text-white">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

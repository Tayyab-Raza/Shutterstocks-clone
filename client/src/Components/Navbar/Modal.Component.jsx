import React from "react";


const Modal = () => {

  const languages = [
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "af", text: "Afrikaans" },
    { value: "id", text: "Indonesian" },
    { value: "bn", text: "Bengali" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "af", text: "Afrikaans" },
    { value: "id", text: "Indonesian" },
    { value: "bn", text: "Bengali" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "af", text: "Afrikaans" },
    { value: "id", text: "Indonesian" },
    { value: "bn", text: "Bengali" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "af", text: "Afrikaans" },
    { value: "id", text: "Indonesian" },
    { value: "bn", text: "Bengali" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "af", text: "Afrikaans" },
    { value: "id", text: "Indonesian" },
    { value: "bn", text: "Bengali" },
  ];

  

  return (
    <div className="absolute top-full mt-0 bg-white shadow-hard-edge rounded-lg p-8 z-50 w-max left-1/2 transform -translate-x-2/3">
         <h1 className="text-lg font-semibold mb-5 items-start">Select your language</h1>
      <div className="grid grid-flow-col grid-rows-10 grid-cols-3">
      {languages.map((item) => (
          <a
            key={item.value}
            className="py-1 hover:bg-gray-100 cursor-pointer pr-5"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Modal;

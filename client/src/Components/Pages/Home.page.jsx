import React from "react";
import Tabs from "../Tabs/Tabs.Component";


const Home = () => {
  const backgroundImage = {
    backgroundImage: "url('./bgimg.jpg')",
    height: "80vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "inherit",
  };

  const trendings = [
    {
      id: 1,
      name: "Trending:",
      items: ["happy birthday,", "thank you,", "background,", "congratulations,", "business,", "welcome"]
    },
  ]

  return (
    <>
    <div style={backgroundImage} className="flex flex-col justify-center">
    <div className="flex items-center flex-col justify-center">
     <div className="text-white text-[40px] font-bold"> One library, millions of ways to tell your story </div>
     <div className="pt-9">
     <Tabs />
     </div>
     {trendings.map((trending) => (
     <div className="flex items-center text-white gap-2 pt-3">
      <span key={trending.id} className="text-gray-400 font-semibold">{trending.name}</span>
      {trending.items.map((item, index) => (
      <a 
      key={index} 
      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
      >
      {item}
      </a>
    ))} 
    </div>
     ))}
    </div>

     {/* Photo by - section */}
    <div className="absolute bottom-16 left-3 right-3 flex justify-between text-sm px-3">
      <div className="">
        <a href="#" className="text-white">Photo </a>
        <span className="text-gray-400">by </span>
        <a href="" className="text-white">Craig Taylor Photography</a>
      </div>
      <div className="">
        <span className="text-gray-400">Learn more about </span>
        <a href="" className="text-white">Shutterstock's License</a>
      </div>
     </div>
    </div>
    
      <div className="flex items-center justify-center bg-customblue text-white p-4 gap-1 text-[15px]">
      <span className="text-gray-400">We have more than</span>
       <a className="cursor-pointer underline">530,000,000</a>
       <span className="text-gray-400">assets on Shutterstock.com as of September 30, 2024.</span>
     </div>
     </>
  );
};

export default Home;

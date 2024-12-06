import React, { useEffect, useRef, useState } from "react";
import {Tooltip} from 'react-tooltip';
import { GrImage } from "react-icons/gr";
import { GoVideo } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { FiMusic } from "react-icons/fi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GrTemplate } from "react-icons/gr";
import { RiAiGenerate } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCameraPlus } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import { TbRotate3D } from "react-icons/tb";
import { TfiVector } from "react-icons/tfi";
import { LuPenLine } from "react-icons/lu";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [btnselected, setBtnSelected] = useState({
    icon: <TbCameraPlus className="text-2xl text-gray-500" />,
    text: "Search By Image",
    title: "Search By Image",
  });
  const [selectedOption, setSelectedoption] = useState({
    icon: <GrImage />,
    name: "All Image",
    placeholder: "Start your next project",
  });

  const tabs = [
    {
      id: 1,
      name: "Images",
      icon: <GrImage />,
      hasDropdown: true,
      placeholder: "Start your next project",
      hasButton: true,
    },
    {
      id: 2,
      name: "Video",
      icon: <GoVideo />,
      hasDropdown: false,
      placeholder: "Search for Videos",
      hasButton: true,
    },
    {
      id: 3,
      name: "Editorial",
      icon: <RiPagesLine />,
      hasDropdown: true,
      placeholder: "Search for Editorial",
      hasButton: false,
    },
    {
      id: 4,
      name: "Music",
      icon: <FiMusic />,
      hasDropdown: false,
      placeholder: "Search for Music",
      hasButton: true,
    },
    {
      id: 5,
      name: "Sound Effects",
      icon: <TbActivityHeartbeat />,
      hasDropdown: false,
      placeholder: "Search for Sound Effects",
      hasButton: false,
    },
    {
      id: 6,
      name: "Templates",
      icon: <GrTemplate />,
      hasDropdown: false,
      placeholder: "Search for Templates",
      hasButton: false,
    },
    {
      id: 7,
      name: "AI Generator",
      icon: <RiAiGenerate />,
      hasDropdown: false,
      placeholder: "Describe the image and art style you have in mind",
      hasButton: false,
    },
  ];

  const allImages = [
    {
      id: 1,
      icon: <GrImage />,
      name: "All Image",
      placeholder: "Start your next project",
    },
    {
      id: 2,
      icon: <IoCameraOutline />,
      name: "Photos",
      placeholder: "Search for Photos",
    },
    {
      id: 3,
      icon: <TbRotate3D />,
      name: "3D Objects",
      placeholder: "Search for 3D Objects",
    },
    {
      id: 4,
      icon: <TfiVector />,
      name: "Vectors",
      placeholder: "Search for Vectors",
    },
    {
      id: 5,
      icon: <LuPenLine />,
      name: "Illustrations",
      placeholder: "Search for Illustrations",
    },
    {
      id: 6,
      icon: <RiAiGenerate />,
      name: "AI Generated",
      placeholder: "Search for AI Generated Images",
    },
  ];

  const editorials = [
    {
      id: 1,
      icon: <RiPagesLine />,
      name: "Editorial",
      placeholder: "Search for Editorial",
    },
    {
      id: 1,
      icon: <GrImage />,
      name: "Editorial Image",
      placeholder: "Search for Editorial Images",
    },
    {
      id: 1,
      icon: <GoVideo />,
      name: "Editorial Video",
      placeholder: "Search for Editorial Videos",
    },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSelectOption = (option) => {
    setSelectedoption(option);
    setDropdownVisible(false);
  };

  // For hide dropdwon visiblity by clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
  
    // Update selected option based on tab
    if (tab.id === 1) {
      setSelectedoption({
        icon: <GrImage />,
        name: "All Image",
        placeholder: "Start your next project",
      });
      setBtnSelected({
        icon: <TbCameraPlus />,
        text: "Search By Image",
        title: "Search By Image"
      });
    } else if (tab.id === 4) { // Music tab
      setSelectedoption({
        icon: tab.icon,
        name: tab.name,
        placeholder: tab.placeholder,
      });
      setBtnSelected({
        icon: <PiMusicNotesPlusFill />,
        text: "Search By Music",
        title: "Search By Music",
      });
    } else {
      setSelectedoption({
        icon: tab.icon,
        name: tab.name,
        placeholder: tab.placeholder,
      });
      setBtnSelected({
        icon: <TbCameraPlus />,
        text: "Search By Image",
        title: "Search By Image"
      });
    }
    // setDropdownVisible(tab.hasDropdown); Show dropdown only if the tab has it
  };

  const getDropdownOptions = () => {
    if(activeTab === 1){
        return allImages;
    } else if(activeTab === 3){
        return editorials;
    };
    return [];
  }


  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`flex items-center gap-2 px-2 py-2 mx-9 ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-white active"
                  : "text-white"
              }`}
            >
              <div className="text-xl">{tab.icon}</div>
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex pt-5">
        <div
          ref={dropdownRef}
          className="relative flex items-center px-7 mx-4 bg-white rounded-lg"
        >
          <button
            onClick={toggleDropdown}
            className={`flex text-black items-center gap-2 text-[15px] ${
              !tabs.find((tab) => tab.id === activeTab)?.hasDropdown
                ? "cursor-default"
                : ""
            }`}
            disabled={!tabs.find((tab) => tab.id === activeTab)?.hasDropdown}
          >
            <div className="text-2xl">
            {selectedOption.icon}
            </div>
            {selectedOption.name}
            {tabs.find((tab) => tab.id === activeTab)?.hasDropdown && (
              <IoMdArrowDropdown className="text-gray-500" />
            )}
          </button>
          {dropdownVisible && (
            <div
              className={`absolute justify-center bg-white shadow-lg rounded-lg border border-gray-200 z-10 transform transition-all duration-300 ease-in-out
                 ${ dropdownVisible && allImages
                  ? "opacity-100 scale-100 top-3 left-2"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {getDropdownOptions().map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleSelectOption(option)}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 text-[15px]"
                >
                  <div className="text-xl">
                  {option.icon}
                  </div>
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder={selectedOption.placeholder}
            className="w-[51rem] h-12 rounded-s-lg border border-gray-300 outline-none pl-4"
          />
          <div className="text-white bg-red-600 px-3 py-3 rounded-e-lg hover:bg-red-700 cursor-pointer">
            {activeTab === 7 ? ( 
              <span className="text-[16px]">Generate</span>
            ) : (
            <IoSearch className="text-2xl"/>
          )}
          </div>
        </div>

        {tabs.find((tab) => tab.id === activeTab)?.hasButton && (
          <div className="flex items-center justify-center bg-white px-4 mx-4 rounded-lg">
            <button  onClick={() => handleTabClick({ id: activeTab })} className="flex text-black items-center gap-2 text-[15px]" data-tooltip-content={btnselected.title} data-tooltip-id="my-tooltip">
            <Tooltip id="my-tooltip"/>
              <div className="text-2xl text-gray-500">
              {btnselected.icon}
              </div>
              {btnselected.text}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Tabs;

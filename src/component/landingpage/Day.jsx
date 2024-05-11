import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Day({
  day,
  slots,
  addDefaultEntry,
  setShowIndex,
  setRemoveIndex,
  showItem,
}) {
  // Function to handle adding default entry
  const handleAddEntry = () => {
    addDefaultEntry(day);
  };

  const Handleslots = () => {
    if (!showItem) setShowIndex();
    else setRemoveIndex();
  };

  return (
    <div
      className="relative block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500
    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-2  font-medium  dark:text-white mt-4 "
    >
      <h2 className={`text-xl font-semibold ${showItem ? "mt-3 " : ""}`}>
        {day}
      </h2>
      <h2 className="absolute right-5 top-3 cursor-pointer">
        {showItem ? (
          <IoIosArrowUp onClick={() => Handleslots(day)} className="text-3xl"/>
        ) : (
          <IoIosArrowDown onClick={() => Handleslots(day)} className="text-2xl"/>
        )}
      </h2>

      <div
        className={`h-0 overflow-hidden relative transition-all duration-300 ${showItem ? "h-full  " : ""}`}
      >
        <button
          onClick={handleAddEntry}
          className="absolute  ml-32 right-1/4 text-3xl"
        >
          <HiPlus />
        </button>
        <ul>
          {slots.map((slot, index) => (
            <div className={`h-0 overflow-hidden ${showItem ? "h-full" : ""}`}>
              <li key={index}>{slot}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Day;

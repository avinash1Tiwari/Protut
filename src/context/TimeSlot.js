import { useState } from "react";
import { createContext } from "react";

// context creation
export const AppContext = createContext();

//  make provider
export default function AppContextProvider({ children }) {
  const [setectedTime, setSelectedSlot] = useState({});

  const handleSelectedSlot = (data) => {
    
      const { day, startTime, endTime } = data;

      if (startTime !== "" && endTime !== "") {
        if (setectedTime!=null &&
           day in setectedTime) {
          const updatedArray = [...setectedTime[day], [startTime, endTime]];
          setSelectedSlot(() => {
          return { ...setectedTime, [day]: updatedArray }
        });
        }
        else {
          const newObj = { [day]: [[startTime, endTime]] };
          setSelectedSlot(() => {
          return { ...setectedTime, ...newObj }});
        }
      }
    };
  
    console.log("data");
    console.log(setectedTime);

  const value = {
    setectedTime,
    setSelectedSlot,
    handleSelectedSlot,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

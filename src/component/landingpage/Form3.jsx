import { DayTimeSlot } from "./DayTimeSlot";
import { useState, useContext } from "react";
import { AppContext } from "../../context/TimeSlot";
import Day from "./Day";
function Form3() {
  const [selectedSlot, setSelectedSlot] = useState({
    Monday: [<DayTimeSlot day="Monday" />],
    Tuesday: [<DayTimeSlot day="Tuesday" />],
    Wednesday: [<DayTimeSlot day="Wednesday" />],
    Thursday: [<DayTimeSlot day="Thursday" />],
    Friday: [<DayTimeSlot day="Friday" />],
    Saturday: [<DayTimeSlot day="Saturday" />],
    Sunday: [<DayTimeSlot day="Sunday" />],
  });

  const [showIndex,setShowIndex] = useState(null)
  let [showItem,setShowItem] = useState(false)
  const addDefaultEntry = (day) => {
    // console.log("day " + day)
    setSelectedSlot((prevSlots) => ({
      ...prevSlots,
      [day]: [...prevSlots[day], <DayTimeSlot day={day} />],
    }));
  };

  const { setectedTime } = useContext(AppContext);
  return (
    <div className="md:block flex justify-center items-center  sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 md:mx-16 lg:w-max-w-md lg:justify-center lg:items-center lg:mx-48 xl:mx-48 ">
        This is form 3
        <div>
          {/* Render a Day component for each entry in selectedSlot */}
          {Object.entries(selectedSlot).map(([day, slots]) => (
            <Day
              key={day}
              day={day}
              slots={slots}
              addDefaultEntry={addDefaultEntry}
              showItem ={day === showIndex ? true : false}
                setShowIndex = {() =>setShowIndex(day)}
                setRemoveIndex = {() =>setShowIndex(null)}
            />
          ))}
        </div>
        <div className="flex justify-between mt-10">
          <h1 className="ml-7 mt-5 font-bold text-xl">Selected Schedules</h1>
          <div className="border-2  border-black p-9 text-xl flex flex-wrap w-[49%] gap-10 font-bold mr-10 rounded">
            {setectedTime &&
              Object.keys(setectedTime).map((day) => (
                <ul className="flex flex-wrap justify-between">
                  {setectedTime[day].map((timeSlot, index) => (
                    <li key={index}>
                      {day} {timeSlot[0]}-{timeSlot[1]}
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>

        <div className="flex justify-between my-10 mr-10">
          <div className="ml-7 mt-5 font-bold text-xl">Meeting Link</div>
          <input placeholder="meeting link" className="border-2 border-black w-1/2 rounded"/>
        </div>

        <div className="flex flex-col gap-5 mr-10">
          <div className="flex justify-between">
              <div className="ml-7 mt-5 font-semibold text-lg " >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 ">
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                
              </div>
          </div>
          <div className="flex justify-between">
              <div className="ml-7 mt-5 font-semibold text-lg " >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 ">
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                
              </div>
          </div>
          <div className="flex justify-between">
              <div className="ml-7 mt-5 font-semibold text-lg " >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 ">
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                
              </div>
          </div>
          <div className="flex justify-between">
              <div className="ml-7 mt-5 font-semibold text-lg " >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 ">
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                <div className="border-2 border-black w-14 h-8 rounded"></div>
                
              </div>
          </div>
        </div>

        <div className="mx-auto  w-1/6 mt-12  font-bold text-xl " >
          <div className="flex gap-8 p-2">

          <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
             
            >
             Previous
            </button>
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
           
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;

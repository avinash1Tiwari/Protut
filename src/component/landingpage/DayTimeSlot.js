import React, { useState } from "react";
import { useContext,useEffect } from "react";
import {AppContext} from "../../context/TimeSlot";
import moment from "moment";

export const DayTimeSlot = ({day}) => {

  const [timeSlot,setTimeSlot] = useState([])
  const [timestart,setTimeStart] = useState('');
  const [timeend,setTimeend] = useState('');

  const createTimeSlots = (fromTime,toTime) =>{

    let startTIme = moment(fromTime,'hh:mm A');
    let endTime = moment(toTime,'hh:mm A')

    if(endTime.isBefore(startTIme)){
      endTime.add(1,'day')
    }

    let arr =[]
    while(startTIme<=endTime)
      {
        arr.push(new moment(startTIme).format('hh:mm A'))
        startTIme.add(30,'minutes')
      }

      return arr
  };

  useEffect(()=>{
    setTimeSlot(createTimeSlots('07:00 AM','09:00 PM'))
    
  },[])

  const {setectedTime,handleSelectedSlot} = useContext(AppContext);
  

  const handleStartTime =(e)=>{
    setTimeStart(e.target.value)
  }

  const handleEndTime =(e)=>{
    setTimeend(e.target.value);
  }

  useEffect(()=>{

    const data = {
      day:day,
      startTime:timestart,
      endTime: timeend,
    }

    handleSelectedSlot(data)
  },[timeend])



  return (
    <div className="flex ">
      <div className="flex flex-row gap-14 w-3/6 justify-around m-auto ">
        <div>

        <select name="dayhour" id="" className="w-48 bg-slate-400 mb-3 text-xl rounded " onChange={handleStartTime}>
        {
          timeSlot.map((item,index) =>(
            <option value={item}>{item} 
        
            </option>
          ))
        }
        </select>
        </div>

        <div>
        <select name="dayhour" id="" className="w-48 bg-slate-400 mb-3 text-xl rounded "  onChange={handleEndTime}>
        {
          timeSlot.map((item,index) =>(
            <option value={item}>{item}
        
            </option>
          ))
        }
        </select>
       
        </div>
      </div>
    </div>
  );
};

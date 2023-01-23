import React from "react";
import { useState,  useEffect } from "react";


function Clock() {
  const [date, setDate] = useState(new Date());

 
  useEffect(() => {
    console.log("setting up interval");

    const interval= setInterval(() => {
        console.log("setting new date");
        setDate(new Date());
    }, 1000);

    return () => {
        console.log("clearing interval");
        clearInterval(interval);
        };

  }, []);


  return <div>{date.toLocaleTimeString("fr-FR")}</div>;
}

export default Clock;
import { useEffect, useState } from 'react';
import { LuAlarmClock } from 'react-icons/lu';

export const Chrono = () => {
  const initialTime = 7 * 60 * 60;
  const [time, setTime] = useState(initialTime);

  const formatTime = (time: number) => {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {hour, minutes, seconds};
  } 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  },[]);

  const {hour, minutes, seconds} = formatTime(time);

  return (
    <div className='expire-chrono'>
      <h4><LuAlarmClock />Express in: </h4>
      <div className='expire-chrono-timer'>
        {hour} : {minutes} : {seconds}
      </div>
    </div>
  );
}
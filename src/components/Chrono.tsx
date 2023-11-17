import { LuAlarmClock } from 'react-icons/lu';

export const Chrono = () => {
  return (
    <div className='expire-chrono'>
      <h4><LuAlarmClock />Express in: </h4>
      <div className='expire-chrono-timer'>
        00 : 00 : 00
      </div>
    </div>
  );
}
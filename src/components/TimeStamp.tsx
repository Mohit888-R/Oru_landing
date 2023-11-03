import Countdown from "react-countdown";

const targetDate = new Date("2023-11-10T00:00:00Z");

const formatNumber = (number?: number) =>
  number !== undefined && number < 10 ? `0${number}` : number;

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  completed?: boolean;
}) => {
  if (completed) {
    return <span>Countdown expired!</span>;
  } else {
    return (
      <div>
        {formatNumber(days)}:{formatNumber(hours)}:{formatNumber(minutes)}:
        {formatNumber(seconds)}
      </div>
    );
  }
};

export const TimeStamp = () => {
  return (
    <div className=" bg-[#F6C018]">
      <div className="flex space-x-4  py-16  flex-col lg:flex-row justify-center items-center text-center container px-16">
        <div className="text-[24px] lg:text-[42px]">
          Website will be live in
        </div>
        <div className="font-bold text-[32px] lg:text-[64px]">
          {" "}
          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default TimeStamp;

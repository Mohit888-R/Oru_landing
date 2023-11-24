import Countdown from "react-countdown";

const targetDate = new Date("2023-12-01T00:00:00Z");

const formatNumber = (number?: number) =>
  number !== undefined && number < 10 ? `0${number}` : number;

export const TextChar = ({ char }: { char: string }) => {
  return (
    <span className="opacity-60 font-normal text-[20px] lg:text-[42px] px-1 lg:px-2">{char}</span>
  );
};
export const renderer = ({
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
    return  <div className="text-[24px] lg:text-[42px]">
ORUphones is there!!!
  </div>;
  } else {
    return (
      <div>
          <div className="text-[24px] lg:text-[42px]">
          Website will be live in
        </div>
        {formatNumber(days)}
        <TextChar char="d" />:{formatNumber(hours)}
        <TextChar char="h" />:{formatNumber(minutes)}
        <TextChar char="m" />
      </div>
    );
  }
};

export const TimeStamp = () => {
  return (
    <div className=" bg-[#F6C018]">
      <div className="flex space-x-4  py-16  flex-col lg:flex-row justify-center items-center text-center container px-16">
        <div className="font-bold text-[32px] lg:text-[64px]">
          {" "}
          <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default TimeStamp;

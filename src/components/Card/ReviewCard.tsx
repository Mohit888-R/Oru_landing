const ReviewsCard = ({
  customerName,
  rating,
  description,
  userStatus,
  date,
}: {
  customerName: string;
  rating: number;
  description: string;
  userStatus: boolean;
  date: string;
}) => {
  const maxRating = 5;
  const reviewStar = Math.min(rating, maxRating);

  const starArray = Array.from({ length: maxRating }, (_, index) => (
    // eslint-disable-next-line react/jsx-key
    <span className="text-[20px]" key={index}>
      {index < reviewStar ? (
        <span className="text-[20px] text-yellow-500"> &#9733;</span>
      ) : (
        <span className="text-[20px] text-yellow-500"> &#9733;</span>
      )}
    </span>
  ));
  return (
    <div className="border  border-gray-200 pt-2  rounded-lg p-4 lg:p-4">
      <span className="my-2 text-base font-medium lg:text-lg lg:font-bold">
        {customerName}
      </span>
      <div className="my-2 flex flex-row items-center">
        <span className="flex flex-1 gap-1">{starArray}</span>
        <span className="item-center gap-1 rounded-md bg-[#1faba4] px-2  text-[18px] text-white">
          <span> {rating} </span>
          {/* <Star className={`w-6 h-6`} /> */}
          <span> &#9733;</span>
        </span>
      </div>
      <p className="my-2 overflow-y-hidden text-justify text-[12px] font-normal leading-6 text-brand-gray md:text-[14px] lg:my-[2.3rem] lg:h-[5.9rem] ">
        {description}
      </p>
      <div className="mt-2 flex flex-row text-[12px]">
        {userStatus && (
          <span className=" flex-1 text-green-600 font-semibold text-[12px]">
            Verified user
          </span>
        )}
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ReviewsCard;

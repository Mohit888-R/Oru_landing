import { TReview } from "@/pages/api/types";
import ReviewsCard from "./Card/ReviewCard";

const Review = ({ data }: { data: TReview[] | null }) => {
  return (
    <div className="customContainer my-8 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-10 md:px-16 lg:px-[7.5rem] ">
      {data && (
        <div className="text-center mb-[1.8rem] lg:mb-10 mb-text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-medium md:font-semibold">
          Customer Reviews
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4 gap-y-[0.6rem] lg:grid-cols-4">
        {data &&
          data.map((item, index) => (
            <ReviewsCard
              key={index}
              customerName={item?.author}
              rating={item?.rating}
              description={item?.review}
              userStatus={item?.isVerified}
              date={item?.date}
            />
          ))}
      </div>
    </div>
  );
};

export default Review;

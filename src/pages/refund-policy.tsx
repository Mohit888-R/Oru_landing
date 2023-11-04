import { NextSeo } from "next-seo";

const data = [
  {
    title: "Booking and Negotiation",
    description:
      "To initiate a purchase, buyers are required to pay a booking fee of 5% of the negotiated price or Rs 500, whichever amount is lower, along with applicable GST. Once the device is booked, you can communicate with the seller to further negotiate the final price.",
  },
  {
    title: "Cancellation and Refunds",
    description:
      "If you decide to cancel the transaction, you are eligible for a full refund of the booking amount. For example, if a device is initially listed at RS 15,000 and you negotiate a final price of RS 10,000, you would pay 5% of RS 10,000 plus GST as the booking fee. In case of cancellation, the entire booking amount will be refunded to you.",
  },
  {
    title: "Refund Period",
    description:
      "Our refund policy is applicable within 7 days of your purchase. After this 7-day period, the transaction will be considered as completed, and refunds will not be processed.",
  },
];

const RefundPolicy = () => {
  return (
    <div className="container">
      <NextSeo
        title="Refund Policy and Cancellation Policy | ORUphones"
        description="ORUphones Refund and Cancellation Policy"
      />
      <div className="navbarClearance w-full pt-24" />
      <h1 className="py-4 text-center text-[28px] font-bold">
        Refund and Cancellation Policy
      </h1>
      <div className="flex flex-col gap-8 mb-28 mt-8">
        {data.map((item, index) => (
          <div key={index}>
            <div className="font-bold text-lg">{item.title}</div>
            <div className="text-md">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundPolicy;

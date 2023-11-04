import { NextSeo } from "next-seo";

const DeliveryPolicy = () => {
  return (
    <div className="container">
      <NextSeo
        title="Delivery and Shipping Policy | ORUphones"
        description="ORUphones Delivery and Shipping Policy"
      />
      <div className="navbarClearance w-full pt-24" />
      <h1 className="py-4 text-center text-[28px] font-bold">
        Delivery and Shipping Policy
      </h1>
      <div className="text-md mt-6">
        At present, our company does not provide delivery services. When you
        book a device, we will promptly share the seller's contact information
        with you. Subsequently, it becomes your responsibility to get-in-touch
        with the seller and arrange for the device to be acquired. You will need
        to coordinate with the seller directly and ensure that you meet to
        finalize the transaction.
      </div>
      <div className="text-md mt-4 mb-28">
        We appreciate your understanding in this matter. If you have any
        inquiries or require further information, please don't hesitate to
        contact us.
      </div>
    </div>
  );
};

export default DeliveryPolicy;

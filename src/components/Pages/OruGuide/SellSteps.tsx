import BuySellStepCard from "@/components/Card/BuySellStepCard";

const data = [
  {
    imgUrl: "/assets/how-to-sell/steps-1.svg",
    cardTitle: "List your device",
    icon: "/assets/oru-guide/phoneIcon.svg",
    bio1: "Tap the 'Sell Your Phone' button, share a few device details",
    bio2: 'Get Instant valuation and a buffet of vendor deals to choose from." 📱💰',
  },
  {
    imgUrl: "/assets/how-to-sell/steps-2.svg",
    cardTitle: "Verify your device",
    icon: "/assets/oru-guide/userIcon.svg",
    bio1: "Grab the ORUphones app, install it on your device, log in, and get that verification done!📱🔐",
    bio2: "Speed up your sale by verifying your device (we run a thorough 50+ test check).",
  },
  {
    imgUrl: "/assets/how-to-sell/steps-3.svg",
    cardTitle: "Contact Buyer & Sell",
    icon: "/assets/oru-guide/checkIcon.svg",
    bio1: " Meet & negotiate with nearby potential buyer.",
    bio2: "Let buyer verify & assess your device.",
    bio3: "Collect payment & handover the device to the buyer.",
  },
];

const SellSteps = () => {
  return (
    <div className="grid grid-cols-1  gap-8 px-10 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
      {data.map((item, index) => (
        <BuySellStepCard
          key={index}
          imgUrl={item.imgUrl}
          cardTitle={item.cardTitle}
          icon={item.icon}
          bio1={item.bio1}
          bio2={item.bio2}
          bio3={item.bio3}
        />
      ))}
    </div>
  );
};

export default SellSteps;

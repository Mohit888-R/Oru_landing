import Image from "next/image";
import Link from "next/link";

export const PlayStore = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 pl-4">
      <span className="bg-white  p-2">
        <Image src={"/assets/playstore.svg"} width={180} height={180} alt="" />
      </span>
      <Link
        href={"https://play.google.com/store/apps/details?id=com.oruphones.oru"}
      >
        <Image
          src={"https://d1tl44nezj10jx.cloudfront.net/assets/play_store.png"}
          width={120}
          height={40}
          className="h-15 w-48 bg-contain"
          alt="play store"
        />
      </Link>
    </div>
  );
};

export const AppStore = () => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-2 pl-4">
      <span className="bg-white  p-2">
        <Image src={"/assets/applestore.svg"} width={180} height={180} alt="" />
      </span>
      <Link href={"https://apps.apple.com/in/app/oruphones/id1629378420"}>
        <Image
          src={"https://d1tl44nezj10jx.cloudfront.net/assets/app_store.svg"}
          width={120}
          height={40}
          className="h-15 w-48 bg-contain"
          alt="app store"
        />
      </Link>
    </div>
  );
};

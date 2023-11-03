import Image from "next/image";
import Link from "next/link";

export const FollowUs = () => {
  return (
    <div className="container px-16 py-8 bg-[#F6C018] flex lg:flex-row flex-col border items-center">
      <span className=" text-[20px]  text-center lg:text-[38px] lg:w-6/12 font-bold">
        Follow us on :
      </span>

      <span className="iconContainer  lg:w-6/12 items-center lg:ml-[2.5rem] gap-4 flex  justify-between  text-black">
        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="#"
        >
          <Image
            src="/assets/Footer/mail.svg"
            height={40}
            width={40}
            alt="mail"
            className=""
          />
        </Link>
        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="https://www.facebook.com/oruphones"
        >
          <Image
            src="/assets/Footer/facebook.svg"
            height={40}
            width={40}
            alt="facebook"
            className=""
          />
        </Link>

        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="https://www.instagram.com/oruphones"
        >
          <Image
            src="/assets/Footer/instagram.svg"
            height={40}
            width={40}
            alt="instagram"
            className=""
          />
        </Link>

        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="https://www.linkedin.com/oruphones"
        >
          <Image
            src="/assets/Footer/linkedIn.svg"
            height={40}
            width={40}
            alt="linkedin"
            className=""
          />
        </Link>

        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="https://www.youtube.com/oruphones"
        >
          <Image
            src="/assets/Footer/ytube.svg"
            height={40}
            width={40}
            alt="youtube"
            className=""
          />
        </Link>
        <Link
          className="icon aspect-square rounded-full p-1 hover:scale-110"
          href="https://www.twitter.com/oruphones"
        >
          <Image
            src="/assets/Footer/twitter.svg"
            height={40}
            width={40}
            alt="twitter"
            className=""
          />
        </Link>
      </span>
    </div>
  );
};

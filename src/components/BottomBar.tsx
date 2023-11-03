import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BottomBar = () => {
  const externalLink = [
    { title: "Terms Of Service" },
    { title: "Privacy Policy" },
    { title: "Contact Us" },
  ];
  return (
    <div className="container  flex lg:flex-row flex-col justify-between px-16 pt-4 pb-6">
      <div>
        <span className="iconContainer   items-center lg:ml-[2.5rem] gap-4 flex  justify-between pb-10 text-black">
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

      <ul className="lg:w-6/12 justify-center flex gap-8">
        {externalLink.map((item, index) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

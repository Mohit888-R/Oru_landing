import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BottomBar = () => {
  const externalLink = [
    { title: "Contact Us", link: "/contact-us" },
    { title: "About Us", link: "/about-us" },
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Refund Policy", link: "/refund-policy" },
    { title: "Delivery Policy", link: "/delivery-policy" },
    { title: "Terms Of Service", link: "/terms-of-services" },
  ];
  return (
    <div className="container  flex lg:flex-row flex-col justify-between px-16 pt-4 pb-6">
      <div>
        <span className="iconContainer   items-center lg:ml-[2.5rem] gap-4 flex  justify-between pb-10 text-black">
          <div
            className="icon aspect-square rounded-full p-1 hover:scale-110"
            onClick={() =>
              (window.location.href = "mailto:contact@oruphones.com")
            }
          >
            <Image
              src="/assets/Footer/mail.svg"
              height={40}
              width={40}
              alt="mail"
              className=""
            />
          </div>
          <Link
            className="icon aspect-square rounded-full p-1 hover:scale-110"
            href="https://www.facebook.com/oruphones"
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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

      <ul className="  grid grid-cols-2 gap-4 text-center">
        {externalLink.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            className="underline hover:cursor-pointer text-xs lg:text-lg"
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;

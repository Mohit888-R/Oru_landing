import {
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  MapPin,
  PhoneCall,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const ContactusCard = () => {
  return (
    <div className="inline-flex rounded-lg bg-[#2d3043] p-10 text-white">
      <div className="flex flex-col">
        <span className="text-[24px] font-semibold lg:text-[28px]">
          {" "}
          Contact Us
        </span>
        <span className="text-normal text-[14px] md:text-[18px]">
          Send us an email or call us for any queries!
        </span>

        <div className="py-28">
          <ul className="space-y-12">
            <li className="flex  items-center gap-4">
              <PhoneCall className="h-4 w-4" /> +91 98456 12547
            </li>
            <li className="flex items-center gap-4">
              <MailIcon className="h-4 w-4" /> contact@oruphones.com
            </li>
            <li className="flex gap-4">
              <MapPin className="h-4 w-4" />
              66, Scheme 10, Alwar, Rajasthan (IN)
              <br />
            </li>
          </ul>
        </div>

        <div>
          <span className="text-[18px] font-medium">Follow Us</span>
          <span className="iconContainer flex gap-4 pt-4 text-black ">
            <Link
              className="icon aspect-square rounded-full bg-white p-1 hover:scale-110"
              href="https://www.facebook.com/oruphones"
              target="_blank"
            >
              <Facebook size={20} className="m-1 aspect-square bg-white" />
            </Link>
            <Link
              className="icon aspect-square rounded-full bg-white p-1 hover:scale-110"
              href="https://www.instagram.com/oruphones"
              target="_blank"
            >
              <Instagram size={20} className="m-1 aspect-square bg-white" />
            </Link>
            <Link
              className="icon aspect-square rounded-full bg-white p-1 hover:scale-110"
              href="https://www.linkedin.com/oruphones"
              target="_blank"
            >
              <Linkedin size={20} className="m-1 aspect-square bg-white" />
            </Link>
            <Link
              className="icon aspect-square rounded-full bg-white p-1 hover:scale-110"
              href="https://www.youtube.com/oruphones"
              target="_blank"
            >
              <Youtube size={20} className="m-1 aspect-square bg-white" />
            </Link>
            <Link
              className="icon aspect-square rounded-full bg-white p-1 hover:scale-110"
              href="https://www.twitter.com/oruphones"
              target="_blank"
            >
              <Twitter size={20} className="m-1 aspect-square bg-white" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactusCard;

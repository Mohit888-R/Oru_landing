import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const option = [
    {
      title: "Sell",
      src: "/oru-guide/how-to-sell",
    },
    {
      title: "Buy",
      src: "/oru-guide/how-to-buy",
    },
  ];
  return (
    <>
      <header
        className={`fixed z-20  flex border w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] flex-col border-brand-vl_gray backdrop-blur transition-[background,transform] duration-300 lg:border-b`}
      >
        <nav className={`2xl:container`}>
          <div
            className={`flex w-full min-w-max justify-between items-center gap-8 px-5 py-4 lg:px-7`}
          >
            <Link href={"/"} className="ml-1 h-8 lg:ml-0 lg:mr-2 lg:h-10">
              <Image
                src={"/assets/LogoNav.svg"}
                alt="Logo"
                width={100}
                height={100}
                className="h-8 w-max lg:h-10"
              />
            </Link>
            <div className="flex justify-around gap-2 lg:gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center hover:cursor-pointer gap-2">
                    How To <ChevronDown size={20} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="no-scrollbar overflow-auto">
                  {/* <ul>
                    {option.map((item, index) => (
                      <li
                        key={index}
                        className="text-center cursor-pointer gap-2 p-1 transition-[transform] duration-200 hover:scale-105 hover:bg-gray-300"
                        onClick={() => {
                          router.push(item.src);
                        }}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul> */}
                  {option.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="text-center cursor-pointer gap-2 p-1 transition-[transform] duration-200 hover:scale-105 hover:bg-gray-300"
                      onClick={() => {
                        router.push(item.src);
                      }}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant={"ghost"}>
                <Link href={"/faqs"}>FAQs</Link>
              </Button>
              <Button variant={"ghost"}>
                <Link href={"/aboutus"}>About Us </Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

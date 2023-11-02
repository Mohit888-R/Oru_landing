import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  const option = ["Sell", "Buy"];
  return (
    <>
      <header
        className={`fixed z-10  flex border w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] flex-col border-brand-vl_gray backdrop-blur transition-[background,transform] duration-300 lg:border-b`}
      >
        <nav className={`2xl:container`}>
          <div
            className={`flex w-full min-w-max justify-between items-center gap-1 px-5 py-4 lg:px-7`}
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
            <div className="flex justify-around gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center hover:cursor-pointer gap-2">
                    How To <ChevronDown size={20} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="no-scrollbar overflow-auto">
                  <ul>
                    {option.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer gap-2 p-1 transition-[transform] duration-200 hover:scale-105 hover:bg-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant={"ghost"}>FAQs</Button>
              <Button variant={"ghost"}>About Us</Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

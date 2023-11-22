import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { CheckCheckIcon, CheckCircle } from "lucide-react";
import React from "react";

const ThanksMessagePopup = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-4/5 md:w-full" showCloseButton={false}>
        <DialogHeader>
          <div className="flex text-[24px] m-auto items-center  gap-2 font-semibold text-center text-[#2AA100]">
            <CheckCircle color="#2AA100" /> Thank You!
          </div>
          <div className="text-[18px] font-normal py-4 text-center">
            Your feedback is important to us and we take it very seriously, we
            will get back to you soon. Check your email for more updates.
          </div>
          <div className="flex flex-row justify-around ">
            <Button
              variant={"default"}
              className="w-5/12"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ThanksMessagePopup;

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import React, { useState } from "react";
import { TProps } from "../Form/ContactForm";
import ThanksMessagePopup from "./ThanksMessagePopup";
import contactUs from "@/lib/fetchers/contactUs";

const SubmitMessagePopup = ({
  isOpen,
  formData,
  setOpen,
  onSubmitted,
}: {
  isOpen: boolean;
  formData: TProps;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitted: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [thankPopupOpen, setThankPopupOpen] = useState(false);
  const onSubmit = async () => {
    try {
      const resp = await contactUs({
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      setOpen(false);
      setThankPopupOpen(true);
      onSubmitted();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="w-4/5 md:w-full" showCloseButton={false}>
        <DialogHeader>
          <div className="text-[24px] font-semibold text-center">
            Submit Message
          </div>
          <div className="text-[18px] font-normal py-4 text-center">
            Pressing submit will send us an message regarding your issue with
            your contact details that you have entered. Do you want to continue
            ?
          </div>
          <div className="flex flex-row justify-around ">
            <Button
              variant={"outline"}
              className="w-5/12"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant={"secondary"}
              className="w-5/12"
              onClick={() => {
                onSubmit();
              }}
            >
              Submit
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
      {
        <ThanksMessagePopup
          isOpen={thankPopupOpen}
          setOpen={setThankPopupOpen}
        />
      }
    </Dialog>
  );
};

export default SubmitMessagePopup;

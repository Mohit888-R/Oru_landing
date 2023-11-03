import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import SubmitMessagePopup from "../Popup/SubmitMessagePopup";

const formSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),

  lastName: z
    .string({
      required_error: "Last Name is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),

  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Invalid email format."),

  phone: z
    .string({ required_error: "Phone Number is required." })
    .min(10, {
      message: "Invalid Indian phone number",
    })
    .max(10, {
      message: "Invalid Indian phone number",
    })
    .refine((value) => {
      const digitsOnly = value.replace(/\D/g, "");
      return /\d{10}$/.test(digitsOnly);
    }, "Invalid Indian phone number"),

  message: z.string({ required_error: "message is required" }).min(30, {
    message: "Drop message atleast 30 character",
  }),
});

export type TProps = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
};

const IssueType = [
  "Verification Issue",
  "Listing Issue",
  "Services Issue",
  "Functionality Issue",
  "Other",
];

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [brand, setBrand] = useState<string>();
  const [model, setModel] = useState<string>();
  const [variant, setVariant] = useState<string[]>([]);
  const [issue, setIssue] = useState<string>();
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [variantOpen, setVariantOpen] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>();
  const [selectedModel, setSelectedModel] = useState<string | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>();

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // const data = useQuery(['Model', make], () => fetchModel(make));

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFirstName(values.firstName);
    setEmail(values.email);
    setPhone(values.phone);
    setMessage(values.message);
    setOpen(true);
  }

  const payload: TProps = {
    firstName: firstName || "",
    email: email || "",
    phone: phone || "",
    message: message || "",
  };

  return (
    <div className="w-full ">
      <div className="p-4 py-8 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1  gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="firstname"
                        {...field}
                        className="border border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="lastname"
                        {...field}
                        className="border border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="youremail@gmail.com"
                        {...field}
                        className="border border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+91 9455245645 "
                        {...field}
                        className="border border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message"
                        {...field}
                        className="border border-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-4 flex justify-end ">
              <Button
                type="submit"
                variant={"default"}
                className="w-full bg-[#2d3043] text-[14px] text-white md:text-[18px] lg:w-4/12"
              >
                Submit Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
      {
        <SubmitMessagePopup
          isOpen={open}
          formData={payload}
          setOpen={setOpen}
          onSubmitted={() => {
            setFirstName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }}
        />
      }
    </div>
  );
};

export default ContactForm;

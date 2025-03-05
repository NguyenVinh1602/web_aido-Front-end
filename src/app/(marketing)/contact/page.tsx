"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must have at least 10 digits" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[0-9]+$/, { message: "Phone numbers must contain only numbers" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(160, { message: "Message must not be longer than 160 characters." }),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <MaxWidthWrapper className="px-8">
      <div className="flex justify-between items-center flex-wrap-reverse md:flex-nowrap gap-12">
        {/* Contact Form */}
        <Card className="max-w-sm w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Get In Touch</CardTitle>
            <CardDescription className="text-lg">
              We transform data into a strategic advantage for your business.
              Complete the form below to learn more!
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/** Render Form Fields */}
              {["name", "email", "phone", "message"].map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormLabel
                          className="text-black text-m"
                          style={{ lineHeight: "0.7rem" }}
                        >
                          {fieldName.charAt(0).toUpperCase() +
                            fieldName.slice(1)}
                        </FormLabel>
                        <FormControl>
                          {fieldName === "message" ? (
                            <Textarea
                              {...field}
                              className="resize-none h-20"
                              placeholder="Type your message here ..."
                            />
                          ) : (
                            <Input
                              {...field}
                              className="w-full bg-white text-black border border-gray-400 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                              autoComplete="off"
                            />
                          )}
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                className="w-full bg-black hover:opacity-95 text-white text-sm py-5"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </Card>
        {/* VN map */}
        <div className="w-full h-[585px] bg-gray-800 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?q=21.0285,105.8542&z=14&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-700">Mo Pho Coffee, Yen Lang, HN</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-500 leading-relaxed">
                example@aidoit.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-700">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
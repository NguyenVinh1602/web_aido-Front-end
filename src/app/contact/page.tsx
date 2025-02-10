"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  //Object check
  const formSchema = z.object({
    name: z.string()
        .min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z
      .string()
      .min(10, "Phone number must have at least 10 digits")
      .max(15, "Phone number is too long")
      .regex(/^[0-9]+$/, "Phone numbers must contain only numbers"),
    message: z
      .string()
      .min(10, {
        message: "Bio must be at least 10 characters.",
      })
      .max(160, {
        message: "Bio must not be longer than 30 characters.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full h-auto flex justify-center items-center my-16">
      {/* Content */}
      <div className="w-[1152px] h-auto flex justify-between items-center flex-wrap-reverse">
        {/* Form contact */}
        <Card className=" max-w-sm w-full bg-white border-0 mt-8">
          {/* Title */}
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
            <CardDescription className="text-lg">
              We transform data into a strategic advantage for your
              business. Complete the form below to learn more!
            </CardDescription>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel
                        className=" text-black text-m line"
                        style={{
                          lineHeight: "0.7rem",
                        }}
                      >
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white  text-black border border-gray-400 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                          name="name"
                          autoComplete="off"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel
                        className="text-black text-m line"
                        style={{
                          lineHeight: "0.7rem",
                        }}
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white  text-black border border-gray-400 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                          name="email"
                          autoComplete="off"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel
                        className="text-black text-m line"
                        style={{
                          lineHeight: "0.5rem",
                        }}
                      >
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white  text-black border border-gray-400 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                          type="text"
                          name="phone"
                          autoComplete="off"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel
                        className="text-black text-m line"
                        style={{
                          lineHeight: "0.7rem",
                        }}
                      >
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none h-20"
                          placeholder="type your message here ..."
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className=" w-full bg-black hover:opacity-95 text-white text-sm mb-2 py-5"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </Card>
        <img 
          src="/test.png" 
          alt="test" 
          className="h-[85svh] mt-8"
        />
        
      </div>
    </div>
  );
}

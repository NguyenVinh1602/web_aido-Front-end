"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  //Show/Hide password
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  //Object check
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  //Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="min-h-screen flex items-center justify-center flex-wrap">
      {/* Left Section */}
      <div className="w-full max-w-md flex flex-col justify-center text-left mt-10 px-8">
        <h1 className="text-4xl font-bold mb-6">AIdoIT!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore the future of AI-driven innovation with our IT solutions.
        </p>
        <p className="text-lg text-gray-700">
          Join us in turning AI research into reality through advanced
          technology and creative thinking.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-md px-8">
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-black border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500 py-5"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full text-black border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                          type={showPassword ? "text" : "password"}
                          name="pass"
                          autoComplete="off"
                        />
                      </FormControl>
                      <span
                        onClick={togglePasswordVisibility}
                        className="absolute right-2 top-[90%] translate-y-[-100%] cursor-pointer text-black"
                      >
                        {showPassword ? <Eye /> : <EyeClosed />}
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 hover:opacity-85">
                  <Button className="p-0" variant={"link"}>
                    <Link href={"/sign-up"} className="text-sm">
                      Create New Account
                    </Link>
                  </Button>
                </div>
                <Link
                  href={"/"}
                  className="text-sm text-black underline hover:opacity-85"
                >
                  {" "}
                  Forgot password{" "}
                </Link>
              </div>

              <Button
                className=" w-full bg-black hover:bg-opacity-80 text-white text-xl py-5"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}

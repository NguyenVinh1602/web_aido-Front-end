"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
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
    <div className="min-h-screen bg-white flex items-center justify-center flex-wrap">
      <div className="w-1/2 h-auto flex justify-center pb-10">Logo</div>
      <div className="w-1/2 h-auto">
        <Card className=" max-w-sm w-full bg-white border-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormLabel>
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white  text-white border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500 py-5"
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
                      <FormLabel>
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white text-black border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500 py-5"
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

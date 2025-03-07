"use client";

import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must have at least 10 digits" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[0-9]+$/, {
      message: "Phone numbers must contain only numbers",
    }),
  joined: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function Account() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="container flex flex-col h-full p-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Admin Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/** Render Form Fields */}
              {["name", "email", "phone", "joined"].map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as keyof z.infer<typeof formSchema>}
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormLabel
                          className="text-black text-m block m-2"
                          style={{ lineHeight: "0.7rem" }}
                        >
                          {fieldName.charAt(0).toUpperCase() +
                            fieldName.slice(1)}
                        </FormLabel>
                        {fieldName === "joined" ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <FormControl>
                            <Input
                              {...field}
                              disabled
                              className="w-full bg-white text-black border border-gray-400 focus:outline-none focus:ring focus:ring-orange-500 py-5"
                              autoComplete="off"
                            />
                          </FormControl>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              {/* <Button
                className="w-full bg-black hover:opacity-95 text-white text-sm py-5"
                type="submit"
              >
                Submit
              </Button> */}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Edit Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

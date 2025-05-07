"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, { message: "Tên là bắt buộc" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  age: z
    .string()
    .refine((val) => !isNaN(val), { message: "Tuổi phải là một số hợp lệ" })
    .transform((val) => Number(val))
    .refine((val) => val >= 18, { message: "Tuổi phải từ 18 trở lên" }),
});

export default function FormComponent({ fields, onSubmit }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const handleValidSubmit = (data) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleValidSubmit)}
        className="space-y-4"
      >
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: controller }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    {...controller}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Gửi</Button>
      </form>
    </Form>
  );
}

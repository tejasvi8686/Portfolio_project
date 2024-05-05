"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='"max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="text"
        placeholder="Name"
        {...register("Name", { required: true })}
      />
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="email"
        placeholder="Email"
        {...register("Email", { required: true })}
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        {...register("Message", { required: true, max: 254, min: 50 })}
      />

      <input
       value="Cast your message!"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
        type="submit"
      />
    </form>
  );
}

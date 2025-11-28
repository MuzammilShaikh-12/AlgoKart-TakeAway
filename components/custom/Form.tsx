"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { toast } from "sonner";

interface FormProps {
  name: string;
}

type Inputs = {
  username: string;
  password: string;
};

const Form = ({ name }: FormProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<
    Inputs
  > = (data) => {
    if (
      data.username === "admin" &&
      data.password === "password"
    ) {
      router.push("/resume");
      return;
    } else {
      toast("Invalid credentials");
    }
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-lg font-semibold">
        {name}
      </h1>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="flex flex-col gap-4 p-4">
        <input
          {...register("username", {
            required: true,
          })}
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.username && (
          <span className="text-red-500">
            This field is required
          </span>
        )}
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <span className="text-red-500">
            This field is required
          </span>
        )}
        <input
          type="submit"
          value="Login"
          className="p-2 bg-cyan-600 text-white rounded cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;

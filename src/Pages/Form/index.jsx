import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="fullName..."
          {...register("fullname")}
        />
        <input type="text" placeholder="email..." {...register("email")} />
        <input type="number" placeholder="age..." {...register("age")} />
        <input
          type="password"
          placeholder="password..."
          {...register("password")}
        />
        <input
          type="password"
          placeholder="confirm password..."
          {...register("confirmPassword")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

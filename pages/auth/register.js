import React from "react";
import asyncComponent from "../../utils/async-component";

const Register = asyncComponent(() => import('../../components/auth/register'));


export default function RegisterPage() {
  return (
    <Register/>
  )
}

import React from "react";

import asyncComponent from "../utils/async-component";
import AppLayout from "../components/core/app-layout";

const Home = asyncComponent(() => import('../components/home'));


export default function HomePage() {
  return (
    <AppLayout>
      <Home/>
    </AppLayout>
  )
}

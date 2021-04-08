import dynamic from 'next/dynamic';
import React from "react";
import Loading from "../components/core/loading";

export default function asyncComponent(importComponent) {

  return dynamic(importComponent,
    {
      loading: () => <Loading/>
    });
}

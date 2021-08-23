import React from 'react'
import asyncComponent from '../../utils/async-component'
import AppLayout from '../../components/core/app-layout'

const Register = asyncComponent(() => import('../../components/auth/register'))

export default function RegisterPage() {
  return (
    <AppLayout>
      <Register />
    </AppLayout>
  )
}

import asyncComponent from '../../utils/async-component'
import AppLayout from '../../components/core/app-layout'

const Login = asyncComponent(() => import('../../components/auth/login'))

export default function LoginPage() {
  return (
    <AppLayout>
      <Login />
    </AppLayout>
  )
}

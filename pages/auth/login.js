import asyncComponent from "../../utils/async-component";

const Login = asyncComponent(() => import('../../components/auth/login'));


export default function LoginPage() {
  return (
    <Login/>
  )
}

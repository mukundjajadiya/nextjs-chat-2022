import Head from "next/head";
import { BsChatRightText } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white border-[1px] shadow-2xl p-12 rounded-3xl space-y-12 drop-shadow-3xl">
          <div className="bg-blue-500 w-fit p-5 rounded-3xl drop-shadow-xl mx-auto">
            <BsChatRightText className="w-24 h-24 text-white" />
          </div>

          <button className="drop-shadow-md bg-white p-3 rounded-full flex items-center">
            <FcGoogle className="text-4xl mr-3" />
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

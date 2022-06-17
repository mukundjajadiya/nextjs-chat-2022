import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config.js";
import Login from "./../components/Login";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <div className="flex w-full bg-slate-100 h-screen items-center justify-center">
          <p className="text-4xl text-slate-600">Loading...</p>
        </div>
        x
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Login />
      </>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;

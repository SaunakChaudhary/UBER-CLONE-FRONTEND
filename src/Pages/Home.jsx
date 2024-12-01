import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 w-full bg-zinc-950 h-screen flex flex-col justify-between">
        <img
          src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc"
          alt="logo"
          className="w-20 ml-9"
        />
        <div className="bg-white p-6">
          <h2 className="text-3xl font-bold mb-5 text-center">
            Get Started with Uber
          </h2>
          <NavLink
            to="/user-login"
            className="bg-black text-white flex justify-center rounded text-xl p-2"
          >
            Continue
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

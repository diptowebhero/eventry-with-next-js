"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <nav>
      <div className='container flex justify-between items-center py-4'>
        <div className='nav-brand'>
          <Link href='/'>
            <Image src='/logo.svg' alt='Eventry' width={135} height={135} />
          </Link>
        </div>

        <ul className='flex gap-4 text-[#9C9C9C] items-center'>
          <li>About</li>
          <li>Contact Us</li>
          {auth?.email ? (
            <>
              {" "}
              <li>
                Welcome, <span className='text-white'>{auth.name}</span>
              </li>
              <li
                onClick={handleLogout}
                className='cursor-pointer text-white bg-indigo-500 px-6 py-2 rounded'>
                Log out
              </li>
            </>
          ) : (
            <li>
              <Link href='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

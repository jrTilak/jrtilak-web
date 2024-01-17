import Link from "next/link";
import { Button } from "../ui/button";

const UnderDevelopment = () => {
  return (
    <div className="w-full h-[calc(100vh-200px)] bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-gray-800 bg-blend-overlay flex flex-col items-center justify-center gap-4 rounded-md ">
      <h1 className="text-2xl text-center mt-20 font-bold text-gray-100">
        This page is under development!
      </h1>
      <p className=" text-center text-gray-200">Please come back later..</p>
      <Button variant="outline">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};
export default UnderDevelopment;

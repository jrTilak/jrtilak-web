import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const NoPermission = () => {
  return (
    <div className="w-full h-[calc(100vh-200px)] bg-[url('https://media.licdn.com/dms/image/D4D12AQEOESf68Qf_Aw/article-cover_image-shrink_720_1280/0/1695790927614?e=2147483647&v=beta&t=2bO6USjFxxFngnHbe_Z3R7IxFvwq4zpWC9QxcVOAezY')] bg-cover bg-center bg-gray-800 bg-blend-overlay flex flex-col items-center justify-center gap-4 rounded-md ">
      <h1 className="text-2xl text-center mt-20 font-bold text-gray-100">
        Access Denied!
      </h1>
      <p className=" text-center text-gray-200">
        You don&apos;t have permission to access this page.
      </p>
      <div className="flex gap-4">
        
        <Button variant="outline">
          <Link href="/">Go Home</Link>
        </Button>
        <Button variant="outline">
          <Link href="/contact">Request Access</Link>
        </Button>
      </div>
    </div>
  );
};
export default NoPermission;

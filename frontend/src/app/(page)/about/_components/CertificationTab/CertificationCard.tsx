import Image from "next/image";
import Link from "next/link";
import React from "react";
import placeholderImg from "@/assets/img/projectPlaceholder.jpg";
import { CertificationType } from "@/types/others/certification.types";

const CertificationCard = ({
  certification,
}: {
  certification: CertificationType;
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col md:hover:scale-105 transition-all">
      <Link href={certification?.href || ""} target="_blank" className="">
        <Image
          className="w-full h-full"
          src={certification?.img || placeholderImg}
          alt=""
          height={300}
          width={300}
          quality={100}
        />
      </Link>
      <div className="px-6 py-4 mb-auto">
        <div className="mb-3">
          <span className="text-xs text-primary transition duration-500 ease-in-out">
            {certification?.type}
          </span>
        </div>
        <Link
          href={certification?.href || ""}
          className="font-medium text-base inline-block hover:text-primary transition duration-500 ease-in-out  mb-2 cursor-pointer"
        >
          {certification?.title}
        </Link>
      </div>
    </div>
  );
};

export default CertificationCard;

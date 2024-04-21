import Link from "next/link";
import React from "react";
import CertificationImage from "./CertificationImage";

interface CertificationCardProps {
  href: string;
  title: string;
  type: string;
  _id: string;
  img: any;
}

const CertificationCard = ({
  certification,
  i = 0,
}: {
  certification: CertificationCardProps;
  i?: number;
}) => {
  return (
    <div
      style={{
        animationDelay: `${i * 0.1}s`,
      }}
      className="rounded animate__fadeInUp animate__animated animate__faster overflow-hidden shadow-lg flex flex-col md:hover:scale-105 transition-all"
    >
      <CertificationImage
        img={certification?.img}
        title={certification?.title}
        id={certification?._id}
      />
      <div className="px-6 py-4 mb-auto">
        <div className="mb-3">
          <span className="text-xs text-primary transition duration-500 ease-in-out">
            {certification?.type}
          </span>
        </div>
        <Link
          href={certification?.href || ""}
          target="_blank"
          className="font-medium text-base inline-block hover:text-primary hover:underline transition duration-500 ease-in-out  mb-2 cursor-pointer"
        >
          {certification?.title}
        </Link>
      </div>
    </div>
  );
};

export default CertificationCard;

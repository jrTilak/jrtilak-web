import React from "react";
import CertificationCard from "./CertificationCard";
import ABOUT_JSON from "@/assets/json/about";

const CertificationTab = () => {
  const certifications = ABOUT_JSON.certifications;
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
          {certifications?.map((certificate, i) => {
            return (
              <CertificationCard
                key={certificate.title}
                certification={certificate}
                i={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CertificationTab;

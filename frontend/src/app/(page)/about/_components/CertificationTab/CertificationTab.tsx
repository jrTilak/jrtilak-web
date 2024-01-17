import React from "react";
import CertificationCard from "./CertificationCard";
import { CertificationType } from "@/types/others/certification.types";

const CertificationTab = ({
  certifications,
}: {
  certifications: CertificationType[] | null;
}) => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications && certifications.length > 0
           ? (
            certifications?.map((certificate) => {
              return (
                <CertificationCard
                  key={certificate.title}
                  certification={certificate}
                />
              );
            })
          ) : (
            <>
              <h5 className="text-xl font-bold">No Certifications Found</h5>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificationTab;

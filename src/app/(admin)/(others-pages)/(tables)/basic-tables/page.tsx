import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Smart Administration | Automate attendance, fee collection, and reports with ease. Free up hours of manual work with",
  description:
    "Intelligent tools that handle routine tasks, giving you more time to focus on student success,"
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Staff" />
      <div className="space-y-6">
        <ComponentCard title="Faculty staff">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}

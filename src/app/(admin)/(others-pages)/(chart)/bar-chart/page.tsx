import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Bar Chart | MiSkulAdmin - Next.js Dashboard",
  description:
    "This is Next.js Bar Chart page for MiSkulAdmin - Next.js Tailwind CSS Admin Dashboard ",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Attendance" />
      <div className="space-y-6">
        <ComponentCard title="Attendance">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}

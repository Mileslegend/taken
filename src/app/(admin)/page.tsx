import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import { CardSwipe } from "@/components/ui/card-swipe";
import  ProfileCard  from "@/Components/ProfileCard/ProfileCard"
import { CardCarousel } from "@/components/ui/card-carousel";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Ecommerce() {
  const images = [
    {src: '/d1.png', alt: 'image1' },
    {src: '/d2.png', alt: 'image2' },
    {src: '/d3.png', alt: 'image3' },
    {src: '/d4.png', alt: 'image4' },
    {src: '/d5.png', alt: 'image5' },
    {src: '/d3.png', alt: 'image6' },
  ]
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
        
      </div>

      <div className="col-span-12 xl:col-span-5">
        
        <CardSwipe />
      </div>

      <div className="col-span-12">
        {/* <StatisticsChart /> */}
        <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/* <DemographicCard /> */}
       
    <ProfileCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}

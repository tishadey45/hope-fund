"use client";
import CampaignsCard from "@/components/CampaignsCard";
import { getCampaigns } from "@/services/campaignApi";
import { useEffect, useState } from "react";

export default function AllCampaignsPage() {
  const [campaigns, setCampaigns]= useState([]);
  useEffect(() => {
    const fetchCampaigns = async () => {
      try{
        const data = await getCampaigns();
        setCampaigns(data);
      }catch(error){
        console.error("Error fetching campaigns:", error);
      }
    };
    fetchCampaigns();
  }, []);
 

  return (
    <div className=" mx-auto py-10 px-6 ">
      <h1 className="text-4xl font-bold text-center mb-6 bg-linear-to-r from-blue-900 to-cyan-500 text-transparent bg-clip-text">
         All Campaigns 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 ">
        {campaigns.map((campaign) => (
          <CampaignsCard
            key={campaign._id}
            campaign={campaign}
          />
        ))}
      </div>
    </div>
  );
}

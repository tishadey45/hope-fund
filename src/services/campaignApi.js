import axiosSecure from "@/lib/axiosSecure"

export const getCampaigns = async () => {
   const {data}  = await axiosSecure.get("/campaigns");
   return data;
}

export const getCampaignById = async (id) => {
  const {data} = await axiosSecure.get(`/campaign/${id}`);
  return data;
}
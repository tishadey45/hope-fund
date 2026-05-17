import { getCampaignById } from "@/services/campaignApi";
import Image from "next/image";

export default async function CampaignDetailPage({ params }) {
  const { id } = await params;
  console.log(id);
  const data = await getCampaignById(id);
  console.log(data);
  const {
    campaign_title,
    category,
    campaign_photo,
    goal_amount,
    raised_amount,
    donation_amount,
    organizer,
  } = data;
  return (
    <div className="max-w-6xl mx-auto py-6 px-6">
      <div className="grid lg:grid-cols-2 gap-10 bg-base-100 shadow-2xl rounded-3xl overflow-hidden border">
        <div className="relative flex items-center justify-center">
          <Image
            src={campaign_photo}
            alt={campaign_title}
            width={200}
            height={200}
            className=" object-cover"
          />
          <div className="absolute top-5 left-5">
            <span className="badge badge-primary badge-lg px-4 py-4 text-white">
              {category}
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {campaign_title}
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6">
              Help us achieve this noble cause by contributing to the campaign.
              Every donation brings hope and support to people in need.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Goal Amount</span>
                  <span className="font-bold text-primary">৳{goal_amount}</span>
                </div>

               
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Raised Amount</span>
                  <span className="font-bold text-success">
                    ৳{raised_amount}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-base-200 rounded-xl p-4 mt-4">
                <span className="font-medium">Your Donation</span>
                <span className="font-bold text-blue-600">
                  ৳{donation_amount}
                </span>
              </div>
            </div>
            <div className="mt-8 bg-base-200 p-5 rounded-2xl">
              <div className="flex items-center gap-4">
                <Image
                  src={organizer?.photo}
                  alt={organizer?.name}
                  width={70}
                  height={70}
                  className="rounded-full border-4 border-primary"
                />

                <div>
                  <h3 className="text-xl font-bold">{organizer?.name}</h3>

                  <p className="text-sm text-gray-500">{organizer?.email}</p>

                  <p className="text-sm text-gray-500">{organizer?.phone}</p>

                  <p className="text-sm text-gray-500">{organizer?.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary flex-1 rounded-xl text-white">
              Donate Now
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
}


import Image from "next/image";
import Link from "next/link";

export default function CampaignsCard({ campaign }) {
  const {
    campaign_title,
    category,
    campaign_photo,
    goal_amount,
    raised_amount,
    donation_amount,
    organizer,
  } = campaign;
  console.log(campaign);
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative ">
        <div className="flex items-center justify-center">
          <Image
            src={campaign_photo}
            alt={campaign_title}
            width={100}
            height={100}
            className=" object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
          {campaign_title}
        </h2>

        {/* Amount Section */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Goal Amount</span>
            <span className="font-semibold text-gray-800">৳{goal_amount}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Raised Amount</span>
            <span className="font-semibold text-green-600">
              ৳{raised_amount}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Donation</span>
            <span className="font-semibold text-blue-600">
              ৳{donation_amount}
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <Link href={`/all-campaigns/${campaign._id}`}>
            <button className="btn btn-primary w-full rounded-xl hover:scale-105 transition-transform duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

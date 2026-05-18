"use client";

import { useForm } from "react-hook-form";
import { FaCoins, FaDonate } from "react-icons/fa";
import { PiSubtitlesDuotone } from "react-icons/pi";
import { SiParamountplus } from "react-icons/si";
import { TbCategory, TbPhoto } from "react-icons/tb";

export default function AddCampaignForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const campaignData = {
      ...data,
      goal_amount: Number(data.goal_amount),
      raised_amount: Number(data.raised_amount),
      donation_amount: Number(data.donation_amount),
    };

    console.log(campaignData);
    reset();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Add New Campaign
          </h1>
          <p className="text-gray-500 mt-3">
            Create a donation campaign and inspire people to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <PiSubtitlesDuotone className="mt-1" />
              Campaign Title
            </label>

            <input
              type="text"
              placeholder="Winter Clothes for Street Children"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("campaign_title", {
                required: "Campaign title is required",
              })}
            />

            {errors.campaign_title && (
              <p className="text-red-500 text-sm mt-2">
                {errors.campaign_title.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <TbPhoto className="mt-1" />
              Campaign Photo URL
            </label>

            <input
              type="text"
              placeholder="https://i.ibb.co/example.png"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("campaign_photo", {
                required: "Photo URL is required",
              })}
            />

            {errors.campaign_photo && (
              <p className="text-red-500 text-sm mt-2">
                {errors.campaign_photo.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <TbCategory className="mt-1" />
              Category
            </label>

            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value="">Select Category</option>
              <option value="Child Support">Child Support</option>
              <option value="Flood Relief">Flood Relief</option>
              <option value="Medical">Medical</option>
              <option value="Education">Education</option>
              <option value="Food Donation">Food Donation</option>
            </select>

            {errors.category && (
              <p className="text-red-500 text-sm mt-2">
                {errors.category.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <FaDonate className="mt-1" />
              Goal Amount
            </label>

            <input
              type="number"
              placeholder="200000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("goal_amount", {
                required: "Goal amount is required",
              })}
            />

            {errors.goal_amount && (
              <p className="text-red-500 text-sm mt-2">
                {errors.goal_amount.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <SiParamountplus className="mt-1" />
              Raised Amount
            </label>

            <input
              type="number"
              placeholder="95000"
              defaultValue={0}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("raised_amount")}
            />
          </div>
          <div>
            <label className="font-semibold text-gray-700 mb-2  flex gap-1">
              <FaCoins className="mt-1" />
              Minimum Donation
            </label>

            <input
              type="number"
              placeholder="1500"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
              {...register("donation_amount", {
                required: "Donation amount is required",
              })}
            />

            {errors.donation_amount && (
              <p className="text-red-500 text-sm mt-2">
                {errors.donation_amount.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2 mt-6">
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-bold text-white bg-linear-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-300/50 hover:scale-[1.02] transition-all duration-300"
            >
              Add Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

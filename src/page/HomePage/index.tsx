import axios from "axios";
import React, { useEffect } from "react";
import ImageOne from "../../asset/humid.png";
import ImageTwo from "../../asset/temp.png";
import ImageThree from "../../asset/sun.png";
import ImageFour from "../../asset/water.png";
import ImageFive from "../../asset/PH.png";
import ImageSix from "../../asset/country.png";
import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 0,
    image: ImageOne,
    title: "humidity",
    text: "Humidity plays a pivotal role in precision farming, influencing optimal planting and harvesting",
  },
  {
    id: 1,
    image: ImageTwo,
    title: "temperature",
    text: "Optimizing your yields by aligning cultivation with the perfect thermal conditions.",
  },
  {
    id: 2,
    image: ImageThree,
    title: "season",
    text: "Seasonal intelligence is the cornerstone of precision agriculture.",
  },
  {
    id: 3,
    image: ImageFour,
    title: "water availability",
    text: "Optimizing agricultural outcomes and contributing to sustainable and resilient farming practices.",
  },
  {
    id: 4,
    image: ImageFive,
    title: "PH",
    text: "Delve into the critical role of pH levels in determining precise planting and harvesting times.",
  },
  {
    id: 5,
    image: ImageSix,
    title: "country",
    text: "Tailor your approach to specific geographical conditions, unlocking the full potential of your crops",
  },
];

export default function HomePage() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const token = user?.data?.accessToken;

  const firstName = user?.data?.user?.name.split(" ")[0];

  useEffect(() => {
    const initSession = async () => {
      try {
        if (token) {
          await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/session/`,
            {},
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      } catch (error) {
        console.error("Error initializing session:", error);
      }
    };

    initSession();

    if (user && !localStorage.getItem("isVerified")) {
      Swal.fire({
        icon: "error",
        title: "Email Verification!",
        text: `Please check your inbox for your verification link!`,
        confirmButtonColor: "#006400",
      }).then(() => {
        navigate("/auth/pending-email-verification");
      });
    }
  }, [token, user, navigate]);

  if (!user || !token) {
    navigate("/");
    return null;
  }

  return (
    <div className="">
      <div className="flex items-center">
        <h1 className="text-[28px] font-semibold leading-10">Welcome,</h1>
        <span className="ml-1 font-semibold text-[22px]">{firstName}</span>
      </div>

      <div className="flex flex-col mb-10">
        <p className="text-[22px] lg:text-[28px] max-w-[323px] text-center lg:mx-auto font-medium my-8 leading-8 lg:leading-[42px]">
          Precision Farming: Boost Yields with Smart Planting and Harvesting
          predictions
        </p>

        <div className="flex flex-wrap gap-4 lg:justify-center">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row rounded-lg bg-white p-3 max-w-xs"
            >
              <img
                className="w-16 h-16 mx-auto rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
                src={item.image}
                alt=""
              />
              <div className="px-2">
                <h5 className="mb-2 text-xl font-semibold capitalize">
                  {item.title}
                </h5>
                <p className="text-sm lg:text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mr-auto lg:flex lg:justify-center lg:items-center my-5 lg:mr-0">
          <Link
            to={"/dashboard/inputs"}
            className="bg-[#006400] capitalize px-6 py-2 rounded-[32px] text-white"
          >
            enter crop details
          </Link>
        </div>
      </div>
    </div>
  );
}

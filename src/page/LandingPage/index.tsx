import React from "react";
import { Link } from "react-router-dom";
import ImageOne from "../../asset/Frame 24.png";
import ImageTwo from "../../asset/Frame 24 (1).png";
import ImageThree from "../../asset/Group 2.png";
import ImageFour from "../../asset/Frame 24 (2).png";
import ImageEight from "../../asset/Smile.png";
import ImageFive from "../../asset/Frame 65.svg";
import ImageSix from "../../asset/Rectangle 1.svg";
import ImageSeven from "../../asset/Union.svg";

export default function LandingPage() {
    const cardData = [
        {
            id: 0,
            image: ImageFive,
            title: "Revolutionoze your farming with AI powered crop management",
            text: "Optimize yields, minimize losses, and embrace sustainable practices with Agro Assistance, your Ai-driven guide to smarter farming."
        },
        {
            id: 1,
            image: ImageSix,
            title: "Grow More Grow Smarter",
            text: "Harness the power of AI to generate personalized planting and harvesting recommendations tailored to your specific crops, location, and climate conditions."
        },
        {
            id: 2,
            image: ImageSeven,
            title: "Stay connected, even when you’re not",
            text: "Stay connected, even when you’re not Never miss a beat with offline access to crucial information, ensuring you can make informed decisions even in areas with limited internet connectivity."
        }
    ];
    return (
        <div className="h-screen">
            <header className="items-center py-4 px-6 shadow-md ">
                <nav className="flex items-center select-none lg:w-3/5 justify-between ml-auto">
                    <div className=" font-Lacq text-2xl">
                        <h1 className="capitalize">Agro Assistance</h1>
                    </div>

                    <ul className="ml-2 flex items-center text-black">
                        <li>
                            <Link to="/auth/login" className="hover:text-white py-2 px-6 border border-[#006400] text-black hover:bg-[#006400] rounded-[32px] ">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="flex flex-col px-4 pt-10">
                {/* UP ELEMENT */}
                <div className="flex flex-col lg:flex-row gap-5 justify-between">
                    {/* LEFT TEXT */}
                    {/* <div className=""> */}
                    <div className="font-sans w-[350px] lg:w-[634px] flex flex-col justify-center items-center">
                        <h1 className="font-normal text-3xl leading-[35px] lg:text-[44px] lg:leading-[66px]">
                            Precision Agriculture: Enhance Crop Yields through Intelligent Planting and Harvest Predictions.
                        </h1>

                        <p className="mt-3 text-sm lg:text-base leading-5 lg:leading-[30px] line-clamp-3">
                            Empower your fields with advanced technology for precise planting and harvesting, maximizing efficiency and yield outcomes in every season.
                        </p>
                        <div className="mt-5 mr-auto">
                            <Link className="px-6 py-2 flex items-center text-white w-[150px] justify-center bg-[#006400] rounded-[32px]" to={"/auth/register"}>
                                Get Started
                            </Link>
                        </div>
                    </div>
                    {/* </div> */}

                    {/* RIGHT IMAGE VIEW */}
                    <div className="grid gap-4 grid-cols-2 w-[350px] lg:w-[550px] xl:w-[530px]">
                        <div className="flex flex-col justify-between gap-4">
                            <img src={ImageOne} className="h-auto w-full col" alt="Farmers tilling the ground" />
                            <img src={ImageThree} className="h-auto w-full" alt="women farmers carrying farm produce" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <img src={ImageTwo} className="h-auto w-full" alt="A lady holding a ripe tomato fruit" />
                            <img src={ImageFour} className="h-auto w-full" alt="A farmer tending to a cassava plant" />
                            <img src={ImageEight} className="h-auto w-full" alt="A smiling farmer" />
                        </div>
                    </div>
                </div>

                {/* DOWN SECTION */}
                <div className="mt-8">
                    <div className="grid lg:grid-cols-3 gap-4 flex-wrap">
                        {cardData.map((item) => (
                            <div key={item.id} className="flex flex-row rounded-lg bg-white p-3 md:max-w-xl h[100px]">
                                <img className="w-16 h-16 mx-auto rounded-t-lg object-cover" src={item.image} alt="" />
                                <div className="px-2">
                                    <h5 className="mb-2 text- font-semibold capitalize">{item.title}</h5>
                                    <p className="text-xs lg:text-base mt-3 line-clamp-4">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Link } from "react-router-dom";
import ImageOne from "../../asset/Frame 24.png";
import ImageTwo from "../../asset/Frame 24 (1).png";
import ImageThree from "../../asset/Group 2.png";
import ImageFour from "../../asset/Frame 24 (2).png";
import ImageFive from "../../asset/Frame 65.png";
import ImageSix from "../../asset/Rectangle 1.png";
import ImageSeven from "../../asset/Union.png";

export default function LandingPage() {
  const cardData = [
    {
      id: 0,
      image: ImageFive,
      title: "Revolutionoze your farming with AI powered crop management",
      text: "Optimize yields, minimize losses, and embrace sustainable practices with Agro Assistance, your Ai-driven guide to smarter farming.",
    },
    {
      id: 1,
      image: ImageSix,
      title: "Grow More Grow Smarter",
      text: "Harness the power of AI to generate personalized planting and harvesting recommendations tailored to your specific crops, location, and climate conditions.",
    },
    {
      id: 2,
      image: ImageSeven,
      title: "Stay connected, even when you’re not",
      text: "Stay connected, even when you’re not Never miss a beat with offline access to crucial information, ensuring you can make informed decisions even in areas with limited internet connectivity.",
    },
  ];
  return (
    <div>
      <header className="items-center py-4 px-6 shadow-md ">
        <nav className="flex items-center select-none justify-between">
          <div className=" font-Lacq text-2xl">
            <h1 className="capitalize">Agro Assistance</h1>
          </div>

          <ul className="ml-2 flex items-center text-black">
            <li>
              <Link
                to="/auth/login"
                className="hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                className="hover:bg-neutral-500 py-2 px-3 rounded-lg hover:underline hover:underline-offset-[0.3em]"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col px-4 pt-10">
        {/* UP ELEMENT */}
        <div className="flex flex-col lg:flex-row gap-5 w[90%] mx-auto">
          {/* LEFT TEXT */}
          {/* <div className=""> */}
          <div className="font-sans w-[90%] flex flex-col justify-center items-center">
            <h1 className="font-normal text-4xl lg:text-[44px]">
              Precision Agriculture: Enhance Crop Yields through Intelligent
              Planting and Harvest Predictions.
            </h1>

            <p className="mt-3 text-sm lg:text-base line-clamp-3">
              Empower your fields with advanced technology for precise planting
              and harvesting, maximizing efficiency and yield outcomes in every
              season.
            </p>
            <div className="mt-5 mr-auto">
              <Link
                className="px-6 py-2 flex items-center text-white w-[150px] justify-center bg-[#006400] rounded-[32px]"
                to={"/dashboard"}
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* </div> */}

          {/* RIGHT IMAGE VIEW */}
          <div className="grid gap-4 grid-cols-2 w-full">
            <div className="flex flex-col justify-between gap-4">
              <img
                src={ImageOne}
                className="h-auto w-full col"
                alt="image is loading"
              />
              <img
                src={ImageThree}
                className="h-auto w-full"
                alt="image is loading"
              />
            </div>

            <div className="flex flex-col gap-4">
              <img
                src={ImageTwo}
                className="h-auto w-full"
                alt="image is loading"
              />
              <img
                src={ImageFour}
                className="h-auto w-full"
                alt="image is loading"
              />
              <img
                src={ImageFour}
                className="h-auto w-full"
                alt="image is loading"
              />
            </div>
          </div>
        </div>

        {/* DOWN SECTION */}
        <div className="my-8">
          <div className="grid lg:grid-cols-3 gap-4 flex-wrap">
            {cardData.map((item) => (
              <div
                key={item.id}
                className="flex flex-row rounded-lg bg-white p-3 md:max-w-xl h[100px]"
              >
                <img
                  className="w-16 h-16 mx-auto rounded-t-lg object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col justify-between px-2">
                  <h5 className="mb-2 text-sm lg:text-xl font-semibold capitalize">
                    {item.title}
                  </h5>
                  <p className="text-xs lg:text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*

      <div className="absolute top-[70px] left-0 right-0">
        {" "}
        <div className="grid place-items-center w-[90%] h-full mx-auto absolute top-[70px] left-0 right-0">
          <div className="flex flex-row px-5 gap-5 justify-between items-center w-full">
            <div className="font-sans w-[634px]">
              <h1 className="font-normal text-3xl">
                Precision Agriculture: Enhance Crop Yields through Intelligent
                Planting and Harvest Predictions.
              </h1>

              <p className="mt-3">
                Empower your fields with advanced technology for precise
                planting and harvesting, maximizing efficiency and yield
                outcomes in every season.
              </p>
              <div className="mt-5 items-center">
                <Link
                  className="px-6 py-2 flex items-center text-white w-[150px] justify-center bg-[#006400] rounded-[32px]"
                  to={"/auth/login"}
                >
                  Get Started
                </Link>
                {/* <Button title={"Get Started"} />
              </div>
            </div>
            <div className="border rounded-[32px] w-1/2 bg-[#D2D2D2] p-5"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

import cloud from "../../asset/Moon cloud mid rain.svg";
import Button from "../../components/Button";
import ImageOne from "../../asset/Frame 1618868329.svg";
import ImageTwo from "../../asset/Frame 1618868330.svg";
import ImageThree from "../../asset/Frame 1618868331.svg";
import ImageFour from "../../asset/Frame 1618868333.svg";

export default function HomePage() {
  const TITLE = [
    "Crop",
    "Temperature",
    "Humidity",
    "PH",
    "Country",
    "Optimal Planting",
    "Optimal Planting",
  ];
  const tableData = [
    {
      id: 0,
      cropImage:
        "http://www.plantgrower.org/uploads/6/5/5/4/65545169/croppedimage570400-19690129-lsweetcorn_orig.jpg",

      cropName: "maize",
      temp: [
        { temp_min: 297.56, temp_max: 300.05, pressure: 1015, humidity: 64 },
      ],
      country: "Nigeria",
      soil: [{ ph_min: 5.5, ph_max: 6.5 }],
      times: [{ time_min: "march", time_max: "may" }],
    },
    {
      id: 1,
      cropImage:
        "https://feelgoodfoodie.net/wp-content/uploads/2022/01/how-to-cook-lentils-7.jpg",
      cropName: "lentil",
      temp: [
        { temp_min: 297.56, temp_max: 300.05, pressure: 1015, humidity: 64 },
      ],
      country: "kenya",
      soil: [{ ph_min: 6.0, ph_max: 7.0 }],
      times: [{ time_min: "october", time_max: "november" }],
    },
    {
      id: 2,
      cropImage:
        "https://i5.walmartimages.com/seo/Fresh-Seedless-Watermelon-Each_e2ec527d-fe7b-4309-9373-186de34557cf.1c562d1a69a2a8f4cb7b5de8f125fc76.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      cropName: "watermelon",
      temp: [
        { temp_min: 297.56, temp_max: 300.05, pressure: 1015, humidity: 64 },
      ],
      country: "Nigeria",
      soil: [{ ph_min: 6.0, ph_max: 6.8 }],
      times: [{ time_min: "september", time_max: "november" }],
    },
  ];
  return (
    <div className="h-full gap-5 p-5">
      <div className="flex flex-col">
        <h1 className="text-[28px] font-semibold leading-10">Welcome</h1>
        <p className="ml-4">John Doe</p>
      </div>

      <div className="flex flex-col mt-5 gap-5">
        <div className="flex space-x-3">
          <div className="rounded-xl p-3 w-[70%] bg-white">
            <img
              src={ImageOne}
              alt=""
              className="w-[150px] h-[150px] absolute left-[45%] top-[10%]"
            />
            <img
              src={ImageTwo}
              alt=""
              className="w-[150px] h-[150px] absolute left-[30%] top-[14%]"
            />
            <img
              src={ImageThree}
              alt=""
              className="w-[150px] h-[150px] absolute left-[10%] top-[33%]"
            />
            <img
              src={ImageFour}
              alt=""
              className="w-[150px] h-[150px] absolute left-[30%] top-[35%]"
            />

            <p className="text-[20px] font-medium mb-20 leading-8">
              Precision Farming: <br /> Boost Yields with <br /> Smart Planting
              and <br /> Harvesting predictions
            </p>

            <div className="flex justify-end mt-5">
              <Button title={"Get Started"} />
            </div>
          </div>

          {/* DIV 2 */}
          <div className="rounded-xl p-3 w-[35%] h-[174px] bg-white">
            {/* DAY & TIME */}
            <div className="flex justify-between">
              <span className="">Monday</span>
              <span className="uppercase">11:32pm</span>
            </div>

            <div className="flex justify-between">
              <span className="uppercase">16&deg;c</span>
              <img src={cloud} alt="" />
            </div>

            <div className="flex justify-between">
              <div className="">
                <span className="">humidity: 51%</span>
              </div>
              <div className="flex flex-col">
                <span className="">sunrise: 6:03am</span>
                <span className="">sunrise: 9:18pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-3 w-full bg-white">
          <h3 className="">Top Crops</h3>
          {/* TABLE ELEMENT */}
          <div className="overflow-hidden overflow-x-auto border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-300">
                <tr>
                  {TITLE.map((item) => (
                    <th
                      key={item}
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {tableData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal items-center text-gray-900">
                      <div className="relative h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover object-center"
                          src={item.cropImage}
                          alt=""
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.cropName}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold ">
                        <span className="uppercase">
                          {Math.round(item.temp[0].temp_min - 273.15)}&deg;c
                        </span>{" "}
                        <span className="">to</span>
                        <span className="uppercase">
                          {Math.round(item.temp[0].temp_max - 273.15)}&deg;c
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold ">
                        <span className="">{item.temp[0].humidity}%</span>
                        <span className=""> to </span>
                        <span className="">{item.temp[0].pressure}%</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold ">
                        <span className="">{item.soil[0].ph_min}</span>
                        <span className=""> to </span>
                        <span className="">{item.soil[0].ph_max}</span>
                      </span>
                    </td>
                    <td className="px-6 capitalize py-4">{item.country}</td>
                    <td className="px-6 py-4 capitalize">
                      {item.times[0].time_min}
                    </td>
                    <td className="px-6 py-4 capitalize">
                      {item.times[0].time_max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

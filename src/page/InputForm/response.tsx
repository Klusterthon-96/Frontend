import ImageOne from "../../asset/Frame 1618868343.svg";

export default function Response() {
  return (
    <>
      <img src={ImageOne} alt="" />

      <div className="">
        <p className="">Nigeria</p>
        <p className="">Maize (Corn)</p>

        <ul>
          <li>Average Temperature Level 25&deg;C to 35&deg;C</li>
          <li>Average Humidity: 70% to 80%</li>
          <li>Optimal Soil pH: 5.5 t0 6.5</li>
          <li>Water Availability: Adequate</li>
          <li>Season: Rainy season</li>
          <li>Optimal Planting Time: March to May</li>
          <li>Optimal HArvesting Time: September to November</li>
        </ul>

        <div className="bg-white rounded-xl p-4 w-[540px]">
          <div className="font-normal break-words text-base">
            <p className=""> Was this response better or worse?</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-[#006400] p-6 py-2 rounded-[43px]">
              Comment
            </button>
            <button className="border border-[#006400] p-6 py-2 rounded-[43px]">
              Enter new input
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

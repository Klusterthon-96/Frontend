import ImageOne from "../../asset/Frame 1618868343.svg";

export default function Response() {
  return (
    <>
      <img src={ImageOne} alt="" className="h-auto" />

      <div className="mt-4 font-sans">
        <p className="">Nigeria</p>
        <p className="mt-1.5">Maize (Corn)</p>

        <ul className=" list-discmy-3">
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Average Temperature Level 25&deg;C to 35&deg;C
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Average Humidity: 70% to 80%
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Optimal Soil pH: 5.5 t0 6.5
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Water Availability: Adequate
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Season: Rainy season
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Optimal Planting Time: March to May
          </li>
          <li style={{ marginTop: "2px", marginLeft: "20px" }}>
            Optimal Harvesting Time: September to November
          </li>
        </ul>

        <div className="bg-white rounded-xl p-4 w-[508px]">
          <div className="font-normal break-words text-base">
            <p className=""> Was this response better or worse?</p>
          </div>

          <div className="flex justify-around items-center w-[284px] mt-4 mb-8">
            <button className="flex flex-col gap-3">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10C1 8.89543 1.89543 8 3 8C4.65685 8 6 9.34315 6 11V15C6 16.6569 4.65685 18 3 18C1.89543 18 1 17.1046 1 16V10Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.4787 5.30626L14.2124 6.16634C13.9942 6.87111 13.8851 7.22349 13.969 7.5018C14.0369 7.72695 14.1859 7.92102 14.389 8.04871C14.64 8.20655 15.0197 8.20655 15.7791 8.20655H16.1831C18.7532 8.20655 20.0382 8.20655 20.6452 8.9673C20.7145 9.05425 20.7762 9.14669 20.8296 9.24367C21.2965 10.0921 20.7657 11.2351 19.704 13.5211C18.7297 15.6189 18.2425 16.6678 17.338 17.2852C17.2505 17.3449 17.1605 17.4013 17.0683 17.4541C16.116 18 14.9362 18 12.5764 18H12.0646C9.20572 18 7.77628 18 6.88814 17.1395C6 16.2789 6 14.8939 6 12.1239V11.1503C6 9.69464 6 8.96678 6.25834 8.3006C6.51668 7.63441 7.01135 7.08664 8.00069 5.99112L12.0921 1.46056C12.1947 1.34694 12.246 1.29012 12.2913 1.25075C12.7135 0.88328 13.3652 0.924643 13.7344 1.34235C13.774 1.3871 13.8172 1.44991 13.9036 1.57554C14.0388 1.77205 14.1064 1.87031 14.1654 1.96765C14.6928 2.83913 14.8524 3.87436 14.6108 4.85715C14.5838 4.96692 14.5488 5.0801 14.4787 5.30626Z"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="">Better</span>
            </button>
            <button className="flex flex-col gap-3">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="elements">
                  <path
                    id="Rectangle 2044"
                    d="M1 9C1 10.1046 1.89543 11 3 11C4.65685 11 6 9.65685 6 8V4C6 2.34315 4.65685 1 3 1C1.89543 1 1 1.89543 1 3V9Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M14.4787 13.6937L14.2124 12.8337C13.9942 12.1289 13.8851 11.7765 13.969 11.4982C14.0369 11.2731 14.1859 11.079 14.389 10.9513C14.64 10.7935 15.0197 10.7935 15.7791 10.7935H16.1831C18.7532 10.7935 20.0382 10.7935 20.6452 10.0327C20.7145 9.94575 20.7762 9.85331 20.8296 9.75633C21.2965 8.90785 20.7657 7.76487 19.704 5.4789C18.7297 3.38111 18.2425 2.33222 17.338 1.71485C17.2505 1.65508 17.1605 1.5987 17.0683 1.54586C16.116 1 14.9362 1 12.5764 1H12.0646C9.20572 1 7.77628 1 6.88814 1.86053C6 2.72106 6 4.10607 6 6.87607V7.84966C6 9.30536 6 10.0332 6.25834 10.6994C6.51668 11.3656 7.01135 11.9134 8.00069 13.0089L12.0921 17.5394C12.1947 17.6531 12.246 17.7099 12.2913 17.7493C12.7135 18.1167 13.3652 18.0754 13.7344 17.6577C13.774 17.6129 13.8172 17.5501 13.9036 17.4245C14.0388 17.228 14.1064 17.1297 14.1654 17.0323C14.6928 16.1609 14.8524 15.1256 14.6108 14.1429C14.5838 14.0331 14.5488 13.9199 14.4787 13.6937Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <span className="">Worse</span>
            </button>
          </div>

          <div className="flex mt- space-x-3">
            <button className="bg-[#006400] text-white p-6 py-2 rounded-[43px]">
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

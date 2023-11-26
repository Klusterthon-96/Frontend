export default function HelpCenter() {
  return (
    <>
      <div className="pb-[60px] min-h-screen font-sans w-full ">
        <div className="">
          <h1 className="text-[22px] font-[600]">Support</h1>

          {/* Temperature Container */}
          <div className="mt-5 text-xs leading-[18px]">
            <h4 className="text-base font-[600]">Temperature</h4>
            <p className="mt-[12px] font-normal">
              Farmers often need to monitor temperature levels to make informed
              decisions about their crops and livestock. There are several
              methods to measure temperature on a farm, and the choice depends
              on the specific needs and resources of the farmer. Here are some
              common methods:
            </p>

            <ul className="list-decimal pl-4">
              <li className="">
                Traditional Thermometers:
                <ul className="list-disc pl-4">
                  <li>
                    Mercury Thermometers: These are traditional but are being
                    phased out due to the environmental hazards associated with
                    mercury. They require manual reading.
                  </li>
                  <li>
                    Alcohol Thermometers: Similar to mercury thermometers but
                    use a colored alcohol instead. They are safer but may not be
                    as accurate.
                  </li>
                </ul>
              </li>
              <li className="">
                Digital Thermometers:
                <ul className="list-disc pl-4">
                  <li>
                    Handheld Digital Thermometers: These are widely available,
                    easy to use, and provide quick and accurate readings. They
                    are suitable for measuring air or soil temperature.
                  </li>
                  <li>
                    Infrared Thermometers: These devices measure surface
                    temperature without direct contact. They are useful for
                    quickly assessing temperature in specific spot.
                  </li>
                </ul>
              </li>
              <li className="">
                Smartphone Apps:
                <ul className="list-disc pl-4">
                  <li>
                    Numerous apps are available for smartphones that can provide
                    local weather information, including temperature. While they
                    might not be as accurate as dedicated devices, they can
                    offer a quick and convenient way to check the temperature.
                  </li>
                </ul>
              </li>
              <li className="">
                Livestock Temperature Monitoring:
                <ul className="list-disc pl-4">
                  <li>
                    For livestock, body temperature is crucial. Specialized
                    devices like ear tags with temperature sensors or infrared
                    thermometers designed for animals can be used.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Humidity Container */}
          <div className="mt-5 text-xs leading-[18px]">
            <h4 className="text-base font-[600]">Humidity</h4>
            <p className="mt-[12px] font-normal">
              Measuring humidity is essential for farmers as it directly
              influences plant growth, disease development, and the overall
              health of crops. Here are several methods farmers can use to
              measure humidity on their farms:
            </p>
            <ul className="list-decimal pl-4">
              <li className="">
                Hygrometers:
                <ul className="list-disc pl-4">
                  <li>
                    Analog Hygrometers: These are traditional humidity
                    measurement devices with a dial or needle indicating the
                    humidity level. They are simple and cost-effective.
                  </li>
                  <li>
                    Digital Hygrometers: These devices provide a numerical
                    readout of humidity and are generally more accurate than
                    analog hygrometers. Some digital hygrometers also come with
                    additional features such as temperature readings.
                  </li>
                </ul>
              </li>
              <li className="">
                Psychrometers:
                <ul className="list-disc pl-4">
                  <li>
                    Traditional Wet and Dry Bulb Psychrometers: These consist of
                    two thermometers, one of which has a wet wick. Evaporation
                    from the wet wick cools that thermometer, and the difference
                    between the wet and dry bulb temperatures can be used to
                    determine humidity using a psychrometric chart.
                  </li>
                  <li>
                    Digital Psychrometers: Modern digital psychrometers combine
                    temperature and humidity sensors to provide accurate
                    readings. They are more convenient and eliminate the need
                    for manual calculations.
                  </li>
                </ul>
              </li>
              <li className="">
                Dew Point Meters:
                <ul className="list-disc pl-4">
                  <li>
                    Dew Point Hygrometers: These instruments measure the
                    temperature at which air becomes saturated and dew forms.
                    Dew point is a valuable indicator of humidity, especially in
                    situations where condensation can impact crops.
                  </li>
                </ul>
              </li>
              <li className="">
                Smartphone Apps:
                <ul className="list-disc pl-4">
                  <li>
                    Several apps are available for smartphones that can provide
                    local weather information, including humidity levels. While
                    not as precise as specialized devices, they can offer a
                    quick overview.
                  </li>
                </ul>
              </li>

              <li className="">
                Livestock Monitoring:
                <ul className="list-disc pl-4">
                  <li>
                    For farmers with livestock, especially in confined spaces,
                    monitoring humidity is crucial for preventing heat stress.
                    Specialized devices designed for livestock, such as those
                    measuring temperature and humidity, can be employed.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* PH LEVEL CONTAINER */}
          <div className="mt-5 text-xs leading-[18px]">
            <h4 className="text-base font-[600]">PH Level</h4>
            <p className="mt-[12px] font-normal">
              Measuring the pH level of soil is crucial for farmers as it
              directly affects nutrient availability to plants. Here's how
              farmers can measure pH:
            </p>
            <ul className="list-decimal pl-4">
              <li className="">
                Soil pH Test Kits:
                <ul className="list-disc pl-4">
                  <li>
                    pH Test Strips: These are simple and inexpensive. Farmers
                    can mix soil with water and dip the strip into the solution.
                    The color change on the strip is then compared to a color
                    chart to determine pH.pH Test Strips: These are simple and
                    inexpensive. Farmers can mix soil with water and dip the
                    strip into the solution. The color change on the strip is
                    then compared to a color chart to determine pH.
                  </li>
                  <li>
                    Liquid pH Test Kits: These kits involve mixing soil with a
                    liquid indicator solution. The color change is then compared
                    to a chart to determine the pH level.
                  </li>
                </ul>
              </li>
              <li className="">
                Soil pH Meters:
                <ul className="list-disc pl-4">
                  <li>
                    Handheld pH Meters: These electronic devices provide a
                    digital readout of the soil pH. They usually require a
                    soil-water suspension for accurate readings. It's essential
                    to calibrate these meters regularly for accurate results.
                  </li>
                  <li>
                    Pen-style pH Meters: Similar to handheld meters, but more
                    compact and often more suitable for quick on-the-spot
                    measurements.
                  </li>
                </ul>
              </li>
              <li className="">
              Professional Soil Testing Labs:
                <ul className="list-disc pl-4">
                  <li>
                  Sending soil samples to a laboratory: This is a more
                  comprehensive option. Farmers can collect soil samples from
                  different parts of their fields and send them to a soil
                  testing lab. The lab will provide detailed information on pH
                  as well as nutrient levels and recommendations for soil
                  amendments.
                  </li>
                </ul>
              </li>
              <li className="">
                Smartphone Apps:
                <ul className="list-disc pl-4">
                  <li>
                    Several apps are available for smartphones that can provide
                    local weather information, including humidity levels. While
                    not as precise as specialized devices, they can offer a
                    quick overview.
                  </li>
                </ul>
              </li>

              <li className="">
                Livestock Monitoring:
                <ul className="list-disc pl-4">
                  <li>
                    For farmers with livestock, especially in confined spaces,
                    monitoring humidity is crucial for preventing heat stress.
                    Specialized devices designed for livestock, such as those
                    measuring temperature and humidity, can be employed.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

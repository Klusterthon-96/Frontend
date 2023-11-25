export default function HelpCenter() {
  return (
    <>
      <div className="bg-[#F5F5F5] pb-[60px] min-h-screen font-sans w-full ">
        <div className="pt-[24px] w-[95%] pl-[32px] ">
          <h2 className="text-[28px] font-[600] text-[#000] ">Help Center</h2>
          {/* <h2 className="text-[28px]   font-[600] text-[#000] ">Support</h2> */}
          {/* Temperature Container */}
          <div className="mt-[24px]">
            <h2 className="text-[24px] font-[600] text-[#000] ">Temperature</h2>
            <p className="text-[16px] mt-[12px] text-[#000] font-normal ">
              Farmers often need to monitor temperature levels to make informed decisions about their crops and livestock. There are several methods to measure temperature on a farm, and the choice depends on the specific needs and resources of the
              farmer. Here are some common methods:
            </p>
            <div>
              <h4 className="mt-[12px]"> 1. Traditional Thermometers:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Mercury Thermometers: These are traditional but are being phased out due to the environmental hazards associated with mercury. They require manual reading.</li>
                <li className="mt-[5px]">&#x2022; Alcohol Thermometers: Similar to mercury thermometers but use a colored alcohol instead. They are safer but may not be as accurate.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 2. Digital Thermometers:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Handheld Digital Thermometers: These are widely available, easy to use, and provide quick and accurate readings. They are suitable for measuring air or soil temperature.</li>
                <li className="mt-[5px]">&#x2022; Infrared Thermometers: These devices measure surface temperature without direct contact. They are useful for quickly assessing temperature in specific spot.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 3. Smartphone Apps:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Numerous apps are available for smartphones that can provide local weather information, including temperature. While they might not be as accurate as dedicated devices, they can offer a quick and convenient way to check the
                  temperature.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 4. Livestock Temperature Monitoring:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; For livestock, body temperature is crucial. Specialized devices like ear tags with temperature sensors or infrared thermometers designed for animals can be used.</li>
              </ul>
            </div>
          </div>
          {/* Humidity Container */}
          <div className="mt-[24px]">
            <h2 className="text-[24px] font-[600] text-[#000] ">Humidity</h2>
            <p className="text-[16px] mt-[12px] text-[#000] font-normal ">
              Measuring humidity is essential for farmers as it directly influences plant growth, disease development, and the overall health of crops. Here are several methods farmers can use to measure humidity on their farms:
            </p>
            <div>
              <h4 className="mt-[12px]"> 1. Hygrometers:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Analog Hygrometers: These are traditional humidity measurement devices with a dial or needle indicating the humidity level. They are simple and cost-effective.</li>
                <li className="mt-[5px]">
                  &#x2022; Digital Hygrometers: These devices provide a numerical readout of humidity and are generally more accurate than analog hygrometers. Some digital hygrometers also come with additional features such as temperature readings.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 2. Psychrometers:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Traditional Wet and Dry Bulb Psychrometers: These consist of two thermometers, one of which has a wet wick. Evaporation from the wet wick cools that thermometer, and the difference between the wet and dry bulb temperatures
                  can be used to determine humidity using a psychrometric chart.
                </li>
                <li className="mt-[5px]">&#x2022; Digital Psychrometers: Modern digital psychrometers combine temperature and humidity sensors to provide accurate readings. They are more convenient and eliminate the need for manual calculations.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 3. Dew Point Meters:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Dew Point Hygrometers: These instruments measure the temperature at which air becomes saturated and dew forms. Dew point is a valuable indicator of humidity, especially in situations where condensation can impact crops.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 4. Smartphone Apps:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Several apps are available for smartphones that can provide local weather information, including humidity levels. While not as precise as specialized devices, they can offer a quick overview.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 5. Livestock Monitoring:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; For farmers with livestock, especially in confined spaces, monitoring humidity is crucial for preventing heat stress. Specialized devices designed for livestock, such as those measuring temperature and humidity, can be
                  employed.
                </li>
              </ul>
            </div>
          </div>
          {/* PH Level Container */}
          <div className="mt-[24px]">
            <h2 className="text-[24px] font-[600] text-[#000] ">PH Level</h2>
            <p className="text-[16px] mt-[12px] text-[#000] font-normal ">Measuring the pH level of soil is crucial for farmers as it directly affects nutrient availability to plants. Here's how farmers can measure pH:</p>
            <div>
              <h4 className="mt-[12px]"> 1. Soil pH Test Kits:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; pH Test Strips: These are simple and inexpensive. Farmers can mix soil with water and dip the strip into the solution. The color change on the strip is then compared to a color chart to determine pH.pH Test Strips: These
                  are simple and inexpensive. Farmers can mix soil with water and dip the strip into the solution. The color change on the strip is then compared to a color chart to determine pH.
                </li>
                <li className="mt-[5px]">&#x2022; Liquid pH Test Kits: These kits involve mixing soil with a liquid indicator solution. The color change is then compared to a chart to determine the pH level.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 2. Soil pH Meters:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Handheld pH Meters: These electronic devices provide a digital readout of the soil pH. They usually require a soil-water suspension for accurate readings. It's essential to calibrate these meters regularly for accurate
                  results.
                </li>
                <li className="mt-[5px]">&#x2022; Pen-style pH Meters: Similar to handheld meters, but more compact and often more suitable for quick on-the-spot measurements.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 3. Professional Soil Testing Labs:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Sending soil samples to a laboratory: This is a more comprehensive option. Farmers can collect soil samples from different parts of their fields and send them to a soil testing lab. The lab will provide detailed information
                  on pH as well as nutrient levels and recommendations for soil amendments.{" "}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 4. pH Probes for Precision Agriculture:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Precision Agriculture Technology: Some farmers use advanced technologies, such as GPS-guided pH probes, to precisely map pH variations across their fields. This allows for targeted and efficient soil management practices.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 5. Indicator Plants:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Certain plants are sensitive to soil pH levels. Observing the health and growth of indicator plants, like blueberries (which prefer acidic soil) or alfalfa (which prefers neutral to slightly alkaline soil), can provide
                  farmers with indirect information about soil pH.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 6. Visual Soil Inspection:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Soil Characteristics: In some cases, visual inspection of soil characteristics can provide clues about pH. For example, acidic soils may have a reddish tint, while alkaline soils may be more chalky or have a grayish
                  appearance.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 7. Portable Soil Testing Devices:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Some portable devices are designed for on-the-go testing. These may include handheld devices that can quickly measure pH in the field without the need for extensive sample preparation.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> When measuring pH, it's important for farmers to follow best practices:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Collect Representative Samples: Take samples from various locations within a field to ensure a representative average.</li>
                <li className="mt-[5px]">&#x2022; Follow Testing Guidelines: Whether using test strips, meters, or lab services, follow the provided guidelines for sample preparation and testing.</li>
                <li className="mt-[5px]">&#x2022; Regular Monitoring: pH levels can change over time, so regular monitoring is essential, especially when implementing soil management practices.</li>
                <li className="mt-[5px]">&#x2022; Interpretation: Understand the ideal pH range for the crops you are growing. Most plants prefer slightly acidic to neutral soil, but there are variations depending on the crop.</li>
              </ul>
            </div>
            <h4 className="mt-[12px]"> Accurate pH measurement is a critical component of soil management, influencing nutrient availability and ultimately impacting crop health and productivity.</h4>
          </div>
          {/* Water Availability Level Container */}
          <div className="mt-[24px]">
            <h2 className="text-[24px] font-[600] text-[#000] ">Water Availability</h2>
            <p className="text-[16px] mt-[12px] text-[#000] font-normal ">
              Measuring water availability is crucial for farmers to ensure proper irrigation and optimize water use. Several methods can be employed to assess water availability on a farm:
            </p>
            <div>
              <h4 className="mt-[12px]"> 1. Soil Moisture Sensors:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Time Domain Reflectometry (TDR) Sensors: These sensors measure the time it takes for an electromagnetic pulse to travel through the soil. The moisture content is determined based on the speed of the pulse.{" "}
                </li>
                <li className="mt-[5px]">&#x2022; Capacitance Sensors: These sensors measure the dielectric constant of the soil, which is influenced by moisture content. They are commonly used to monitor soil water availability.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 2. Gravimetric Method:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; HWeighing Soil Samples: This method involves collecting soil samples, weighing them, drying them, and then re-weighing to determine the water content. While accurate, it's a labor-intensive process and not suitable for
                  continuous monitoring.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 3. Tensiometers:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; Tensiometers measure soil water tension, indicating how hard plant roots need to work to extract water. They consist of a tube filled with water and a porous ceramic tip buried in the soil. Farmers can read the water
                  tension from a gauge attached to the tube.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 4. Neutron Probe:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Neutron probes measure soil moisture content by detecting the amount of neutrons emitted by the soil. This method provides accurate measurements but requires specialized equipment. </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 5. Satellite and Remote Sensing:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Satellite Imagery: Satellite technology can be used to estimate soil moisture levels over large areas. This information is useful for understanding general trends in water availability.</li>
                <li className="mt-[5px]">&#x2022; Remote Sensing Technology: Drones equipped with sensors can provide high-resolution data on soil moisture content in specific areas of the farm.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 6. Weather Stations:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">
                  &#x2022; On-site Weather Stations: These stations can provide information on rainfall, evaporation rates, and other weather parameters that influence water availability. Combining this data with soil moisture measurements gives a
                  more comprehensive picture.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]"> 7. Water Level Sensors:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; For irrigation ponds or reservoirs, water level sensors can be employed to monitor the available water volume. This information is critical for planning irrigation schedules.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]">8. Groundwater Monitoring Wells:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; For farms relying on groundwater, monitoring wells equipped with sensors can provide information on the water table and groundwater availability.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]">9. Visual Inspection:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Observing Plant Health: Wilting or stressed plants can be an indicator of insufficient water availability. While not a direct measurement, visual inspection complements quantitative methods.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]">9. Use of Water Budgets:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Water balance calculations involve estimating inputs (precipitation, irrigation) and outputs (evaporation, plant uptake) to assess water availability over time.</li>
              </ul>
            </div>
            <div>
              <h4 className="mt-[12px]">10. Smartphone Apps:</h4>
              <ul className="mt-[5px] ml-[30px]">
                <li className="mt-[5px]">&#x2022; Several apps provide real-time weather information, including rainfall predictions. While not a direct measure of soil moisture, it can aid in making informed decisions about irrigation.</li>
              </ul>
            </div>
            <h4 className="mt-[12px]">
              Selecting the appropriate method depends on factors such as the scale of the operation, budget, and the specific needs of the crops. Regular monitoring of water availability is essential for efficient water management and sustainable
              farming practices.
            </h4>
            <div>
              <h4 className="mt-[12px] text-[16px] font-[600] text-[#000] ">Water Availability:</h4>
              <ul className="mt-[5px]">
                <li className="mt-[5px]">
                  Low: 0-49.99
                  <br />
                  Moderate: 50-99.99
                  <br />
                  High: 100 and above
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h4 className="mt-[12px]">
                1. Headline: Revolutionoze your farming with AI powered crop management Subheading : Optimize yields, minimize losses, and embrace sustainable practices with Agro Assistance, your Ai-driven guide to smarter farming. CTA : Get started
                Today
              </h4>
            </div>
            <br />
            <div>
              <h4 className="mt-[12px]">2. Headline : Grow More Grow Smarter Body copy : Harness the power of AI to generate personalized planting and harvesting recommendations tailored to your specific crops, location, and climate conditions.</h4>
            </div>
            <br />
            <div>
              <h4 className="mt-[12px]">
                3. Offline Access for uninterrupted Farming Headline: Stay connected, even when you’re not Body copy : Never miss a beat with offline access to crucial information, ensuring you can make informed decisions even in areas with limited
                internet connectivity.
              </h4>
            </div>
            <br />
            <br />
            <div className=" w-full grid justify-center items-center ">
              <ul className="">
                <li className="mt-[5px]">Temperature: </li>
                <li className="mt-[5px]">Cool: 15-18.99</li>
                <li className="mt-[5px]">Mild: 19-23.99</li>
                <li className="mt-[5px]">Warm: 24-28.99</li>
                <li className="mt-[5px]">Hot: 29 and above</li>
              </ul>
              <br />
              <ul className="">
                <li className="mt-[5px]">Humidity: </li>
                <li className="mt-[5px]">Low: 0-19.99</li>
                <li className="mt-[5px]">Moderate: 20-39.99</li>
                <li className="mt-[5px]">Average: 40-59.99</li>
                <li className="mt-[5px]">High: 60-79.99</li>
                <li className="mt-[5px]">Very High: 80 and above</li>
              </ul>
              <br />
              <ul className="">
                <li className="mt-[5px]">pH: </li>
                <li className="mt-[5px]">Strongly Acidic: 0-1.99</li>
                <li className="mt-[5px]">Moderately Acidic: 2-5.99</li>
                <li className="mt-[5px]">Neutral: 6-6.99</li>
                <li className="mt-[5px]">Moderately Alkaline: 7-9.99</li>
                <li className="mt-[5px]">Highly Alkaline: 10 and above</li>
              </ul>
              <br />
              <ul className="">
                <li className="mt-[5px]">Water Availability: </li>
                <li className="mt-[5px]">Low: 0-49.99</li>
                <li className="mt-[5px]">Moderate: 50-99.99</li>
                <li className="mt-[5px]">High: 100 and above</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

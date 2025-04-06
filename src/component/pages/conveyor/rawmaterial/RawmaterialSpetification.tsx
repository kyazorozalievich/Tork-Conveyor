"use client";

import Table from "../ConveyorPages/Table";

const RawmaterialSpetification = () => {
  const characterData = {
    title: "Technical Specifications",
    table: [
      [
        "Specification	",
        "Belt Material",
        "Weight Capacity",
        "Belt Width",
        "Belt Speed	",
        "Drive Power	",
        "Incline Capability	",
        "Temperature Resistance	",
        "Dust Protection	",
      ],
      [
        "Standard Duty		",
        "Rubber/PVC		",
        "Up to 100 kg/m		",
        "400-800 mm		",
        "0.5-1.5 m/s		",
        "2-5 kW		",
        "Up to 15°		",
        "-10°C to +60°C		",
        "Basic Sealing		",
      ],
      [
        "Heavy Duty		",
        "Steel/Chain		",
        "100-500 kg/m		",
        "800-1500 mm		",
        "0.3-1.0 m/s		",
        "5-25 kW		",
        "Up to 20°		",
        "-20°C to +80°C		",
        "Enhanced Sealing		",
      ],
      [
        "Extreme Duty	",
        "Reinforced Vulcanized Rubber	",
        "500+ kg/m	",
        "1500-2500 mm	",
        "0.1-0.5 m/s	",
        "25-75 kW	",
        "Up to 30°	",
        "-40°C to +120°C	",
        "Complete Enclosure	",
      ],
    ],
  };

  return <Table data={characterData} />;
};

export default RawmaterialSpetification;

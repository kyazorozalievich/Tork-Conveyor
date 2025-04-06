"use client";
import Table from "../ConveyorPages/Table";

const TextileSystem = () => {
  const systemData = {
    title: "Textile-Specific vs. Standard Conveyor Systems",
    table: [
      [
        "Feature",
        "Belt Surface",
        "Fabric Protection",
        "Static Control		",
        "Edge Design		",
        "Transfer Points		",
        "Speed Control		",
        "Tension Control		",
        "Cleaning Features		",
      ],
      [
        "Standard Conveyor		",
        "Rubber/PVC		",
        "Basic	",
        "Minimal		",
        "Standard edges		",
        "Standard gaps		",
        "Fixed/Variable		",
        "Manual adjustment		",
        "Basic		",
      ],
      [
        "Textile-Specific Conveyor	",
        "Smooth PVC/Silicone/PTFE	",
        "Enhanced with low-friction surface	",
        "Anti-static properties	",
        "Rounded edges to prevent snags	",
        "Minimized gaps to prevent fabric catching	",
        "Precision variable with soft start/stop	",
        "Automated tension management	",
        "Self-cleaning mechanisms	",
      ],
    ],
  };
  return <Table data={systemData} />;
};

export default TextileSystem;

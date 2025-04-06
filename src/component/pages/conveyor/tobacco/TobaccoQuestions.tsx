"use client";
import Questions from "../ConveyorPages/Questions";
import scss from "./TobaccoQuestions.module.scss";

const TobaccoQuestions = () => {
  const questionsData = [
    {
      id: 1,
      question:
        "What makes your conveyor systems suitable for tobacco leaf handling?",
      answer:
        "Our tobacco leaf handling conveyors feature gentle transport mechanisms that prevent damage to delicate leaves. We use specialized belts with controlled tension and precisely designed transfer points to minimize leaf breakage and maintain quality throughout the process.",
    },
    {
      id: 2,
      question:
        "How do your conveyor systems meet the hygiene requirements of the tobacco industry?",
      answer:
        "Our tobacco industry conveyor systems are constructed with FDA-approved materials and feature stainless steel components, smooth surfaces, and tool-less quick-release mechanisms for thorough cleaning. They're designed to prevent product contamination and meet all relevant industry hygiene standards.",
    },
    {
      id: 3,
      question:
        "Can your conveyors integrate with existing tobacco processing machinery?",
      answer:
        "Yes, our conveyor systems are designed with flexibility in mind to integrate seamlessly with existing tobacco processing equipment. Our engineering team can customize connection points, heights, speeds, and control systems to ensure smooth operation with your current machinery.",
    },
    {
      id: 4,
      question: "What maintenance is required for tobacco conveyor systems?",
      answer:
        "Our tobacco conveyors require regular inspection of belts, rollers, and drive components, typically on a quarterly basis. Daily cleaning of food-contact surfaces, monthly lubrication of moving parts, and annual replacement of wear items ensure optimal performance. We provide detailed maintenance schedules and training.",
    },
    {
      id: 5,
      question:
        "How do you handle dust control in tobacco processing conveyors?",
      answer:
        "Our tobacco processing conveyors incorporate enclosed designs, dust extraction points, and specialized seals to minimize dust release. We can also integrate with your existing dust collection systems or provide complete solutions including filters and extraction fans.",
    },
  ];
  return <Questions data={questionsData} />;
};

export default TobaccoQuestions;

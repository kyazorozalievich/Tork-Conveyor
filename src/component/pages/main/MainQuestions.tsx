"use client";
import Questions from "../conveyor/ConveyorPages/Questions";

const MainQuestions = () => {
  const questionsData = [
    {
      id: 1,
      question:
        "1. What types of conveyors are available, and how do I choose the right one for my production?",
      answer:
        "There are many types of conveyors: belt, roller, modular, slat, chain, and more. The right choice depends on your production specifics—product type, load weight, working conditions, and required speed. We always start with a detailed analysis of your needs and then select the most efficient custom solution tailored to your facility.",
    },
    {
      id: 2,
      question:
        "2. How much does it cost to manufacture and install a turnkey conveyor system?",
      answer:
        "The cost depends on several factors: conveyor length and type, materials, drive system, automation level, and control systems. We provide an initial estimate during consultation, and after receiving your technical requirements, we deliver a detailed quotation. Our goal is to offer a cost-effective and reliable solution.",
    },
    {
      id: 3,
      question:
        "3. Which industries commonly use belt, modular, and roller conveyors?",
      answer:
        "Our conveyors are widely used in the food, pharmaceutical, logistics, automotive, electronics, and many other industries. Belt conveyors are versatile and suit most sectors. Modular conveyors are moisture-resistant and easy to clean—ideal for food production. Roller conveyors work great for warehouse and packaging logistics. We always adapt our designs to your industry’s specific needs.",
    },
    {
      id: 4,
      question: "4. How is the performance of a conveyor system calculated?",
      answer:
        "Performance depends on the belt speed, conveyor length, product size, and weight. Our engineers carry out detailed calculations based on your production parameters to ensure the system runs smoothly without downtime or overloading. We aim to integrate the conveyor seamlessly into your existing workflow.",
    },
    {
      id: 5,
      question:
        "5. What does maintenance and warranty coverage include for conveyor systems?",
      answer:
        "All our conveyor systems come with a warranty ranging from 12 to 36 months. We provide technical support, scheduled maintenance, and spare parts supply. Service contracts are also available to ensure your lines operate smoothly. Our specialists are ready to visit your facility if needed.",
    },
    {
      id: 6,
      question: "6. Can a conveyor system help automate my production?",
      answer:
        "Yes—automation is one of the main benefits of conveyor systems. We design conveyors with sensors, sorting units, automated controls, and integration with your existing machinery. This minimizes human error, increases speed and precision, and significantly reduces operating costs.",
    },
  ];

  return <Questions data={questionsData} />;
};

export default MainQuestions;

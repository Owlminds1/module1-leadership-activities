"use client";

import React, { useState } from "react";

export default function FoodChoicesChart() {
  const [values, setValues] = useState({
    root: "Food Choices",
    level1a: "",
    level1b: "",
    level2a: "",
    level2b: "",
    level2c: "",
    level2d: "",
  });

  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="relative w-[800px] h-[500px] bg-white rounded-lg shadow-md flex justify-center items-center">
        {/* SVG Lines */}
        <svg className="absolute w-full h-full top-0 left-0">
          {/* Root to Level 1 */}
          <line
            x1="120"
            y1="250"
            x2="250"
            y2="150"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="120"
            y1="250"
            x2="250"
            y2="350"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Level1a to Level2 */}
          <line
            x1="420"
            y1="150"
            x2="550"
            y2="100"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="420"
            y1="150"
            x2="550"
            y2="200"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Level1b to Level2 */}
          <line
            x1="420"
            y1="350"
            x2="550"
            y2="300"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="420"
            y1="350"
            x2="550"
            y2="400"
            stroke="green"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Arrowhead */}
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="6"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="green" />
            </marker>
          </defs>
        </svg>

        {/* Root */}
        <input
          type="text"
          value={values.root}
          onChange={(e) => handleChange("root", e.target.value)}
          className="absolute left-10 top-[220px] px-4 py-2 rounded-md bg-green-300 shadow-md text-center"
        />

        {/* Level 1 */}
        <input
          type="text"
          value={values.level1a}
          onChange={(e) => handleChange("level1a", e.target.value)}
          className="absolute left-[250px] top-[120px] px-4 py-2 rounded-md bg-blue-300 shadow-md text-center"
        />
        <input
          type="text"
          value={values.level1b}
          onChange={(e) => handleChange("level1b", e.target.value)}
          className="absolute left-[250px] top-[320px] px-4 py-2 rounded-md bg-red-300 shadow-md text-center"
        />

        {/* Level 2 */}
        <input
          type="text"
          value={values.level2a}
          onChange={(e) => handleChange("level2a", e.target.value)}
          className="absolute left-[550px] top-[70px] px-4 py-2 rounded-md bg-blue-300 shadow-md text-center"
        />
        <input
          type="text"
          value={values.level2b}
          onChange={(e) => handleChange("level2b", e.target.value)}
          className="absolute left-[550px] top-[170px] px-4 py-2 rounded-md bg-red-300 shadow-md text-center"
        />
        <input
          type="text"
          value={values.level2c}
          onChange={(e) => handleChange("level2c", e.target.value)}
          className="absolute left-[550px] top-[270px] px-4 py-2 rounded-md bg-blue-300 shadow-md text-center"
        />
        <input
          type="text"
          value={values.level2d}
          onChange={(e) => handleChange("level2d", e.target.value)}
          className="absolute left-[550px] top-[370px] px-4 py-2 rounded-md bg-red-300 shadow-md text-center"
        />
      </div>
    </div>
  );
}

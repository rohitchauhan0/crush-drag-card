"use client";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggingBox, setDraggingBox] = useState(null); // Track which box is being dragged
  const [positions, setPositions] = useState({
    box1: { x: 550, y: 300, zIndex: 5 },
    box2: { x: 500, y: 300, zIndex: 4 },
    box3: { x: 500, y: 220, zIndex: 3 },
    box4: { x: 450, y: 200, zIndex: 2 },
    box5: { x: 450, y: 200, zIndex: 1 },
  });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, box) => {
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setDraggingBox(box);
    setOffset({
      x: e.clientX - positions[box].x,
      y: e.clientY - positions[box].y,
    });

    // Bring the current box to the top
    setPositions((prevPositions) => ({
      ...prevPositions,
      [box]: {
        ...prevPositions[box],
        zIndex: Math.max(...Object.values(prevPositions).map((p) => p.zIndex)) + 1,
      },
    }));
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !draggingBox) return;

    setPositions((prevPositions) => ({
      ...prevPositions,
      [draggingBox]: {
        ...prevPositions[draggingBox],
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      },
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingBox(null);
  };

  return (
    <div
      className="relative h-screen w-screen bg-gray-100 bg-image"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Box 1 */}
      <div
        className={`absolute h-44 w-[400px] bg-red-500 shadow-lg shadow-black ${
          isDragging && draggingBox === "box1" ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => handleMouseDown(e, "box1")}
        style={{
          left: `${positions.box1.x}px`,
          top: `${positions.box1.y}px`,
          zIndex: positions.box1.zIndex,
        }}
      >
        <Image src="/paper.webp" alt="Background Image" width={100} height={100} className="w-full h-full object-cover relative" />
        <div className=" absolute top-0 flex items-center justify-center w-full h-full flex-col space-y-3">
        <p className=" text-4xl font-semibold text-black font-zeyada">Drag the paper to move</p>
        </div>
      </div>

      {/* Box 2 */}
      <div
        className={`absolute h-48 w-[500px] bg-blue-500 shadow-md shadow-black ${
          isDragging && draggingBox === "box2" ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => handleMouseDown(e, "box2")}
        style={{
          left: `${positions.box2.x}px`,
          top: `${positions.box2.y}px`,
          zIndex: positions.box2.zIndex,
        }}
      >
              <Image src="/paper.webp" alt="Background Image" width={100} height={100} className="w-full h-full object-cover relative" />
        <div className=" absolute top-0 flex items-center justify-center w-full h-full flex-col space-y-3">

        <h2 className=" text-6xl font-bold  text-red-700 font-zeyada ">You are too cute</h2>
        </div>

      </div>


      <div
        className={`absolute h-[400px] w-[500px] bg-blue-500 shadow-md shadow-black ${
          isDragging && draggingBox === "box3" ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => handleMouseDown(e, "box3")}
        style={{
          left: `${positions.box3.x}px`,
          top: `${positions.box3.y}px`,
          zIndex: positions.box3.zIndex,
        }}
      >
              <Image src="/paper.webp" alt="Background Image" width={100} height={100} className="w-full h-full object-cover relative" />
        <div className=" absolute top-0 flex items-center justify-center w-full h-full flex-col space-y-3">

        <Image src="/heart.webp" alt="Background Image" width={100} height={100} className=" h-52 w-52 object-contain relative" />
        <p className=" text-xl font-semibold text-black font-zeyada">Drag the paper to move</p>
        </div>

      </div>


      <div
        className={`absolute h-[400px] w-[600px] bg-blue-500 shadow-md shadow-black ${
          isDragging && draggingBox === "box4" ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => handleMouseDown(e, "box4")}
        style={{
          left: `${positions.box4.x}px`,
          top: `${positions.box4.y}px`,
          zIndex: positions.box4.zIndex,
        }}
      >
              <Image src="/paper.webp" alt="Background Image" width={100} height={100} className="w-full h-full object-cover relative" />
        <div className=" absolute top-0 flex items-center justify-center w-full h-full flex-col space-y-3">

        <Image src="/muskan.JPG" alt="Background Image" width={100} height={100} className=" h-72 w-72 object-cover relative" />
        <p className=" text-3xl font-semibold text-black font-zeyada">There is a message for you</p>
        </div>

      </div>


      <div
        className={`absolute h-[200px] w-[500px] bg-blue-500 shadow-md shadow-black ${
          isDragging && draggingBox === "box5" ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => handleMouseDown(e, "box5")}
        style={{
          left: `${positions.box5.x}px`,
          top: `${positions.box5.y}px`,
          zIndex: positions.box5.zIndex,
        }}
      >
              <Image src="/paper.webp" alt="Background Image" width={100} height={100} className="w-full h-full object-cover relative" />
        <div className=" absolute top-0 flex items-center justify-center w-full h-full flex-col space-y-3">

       
        <p className=" text-5xl font-semibold text-black font-zeyada">Can i get your number 🥺</p>
        </div>

      </div>
    </div>
  );
};

export default Page;

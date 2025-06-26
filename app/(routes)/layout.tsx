
import React from "react";

export default function LayoutRoutes({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative h-[100px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Welcome to Epic Ryck And Morty
        </h1>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}

"use client";

import React from "react";

export default function header() {
  return (
    <div>
      <header className="grid grid-cols-4 justify-around items-center p-6 bg-gray-800">
        <img src="/images/my-profile.png" alt="My Profile pic" />
        <div className="grid col-span-2 justify-center items-center">
          <h1 className="text-4xl font-bold">Mayank Piparde</h1>
          <p className="text-lg">B.Tech CSE | Developer | Tech Enthusiast</p>
        </div>
      </header>
    </div>
  );
}

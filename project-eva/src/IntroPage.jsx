// IntroPage.js
import React from "react";
import { useProgress } from "@react-three/drei";
import "./App.css";

function IntroPage({ onJoin }) {
  const { progress } = useProgress();
  const isLoaded = progress >= 100;

  return (
    <div className="intro-container">
      <div className="intro-content p-2">
        <div className="text-container">
          <h1 className="mb-4 text-xl font-bold">Who am I ?</h1>
          <p>
            {" "}
            Hello! My name is Tim. A while ago, I discovered a way to travel
            through time. Curious, I set the coordinates and jumped to the year
            2050. What I saw there was heart-wrenching. The world was torn apart
            by wars, hatred, and mistrust. Nature was rebelling against us, and
            people were suffering. I rushed back to our time, desperate to warn
            everyone. I tried talking to scientists, government officials, and
            other important people, but no one believed my tale. I realized that
            I needed to do something big to get everyone's attention. So, here I
            am, running a never-ending virtual marathon to spread the message of
            peace and unity. As I run, there will be a message displayed
            alongside me, reflecting what we need to focus on to prevent the
            grim future I witnessed. The message might change with the
            situations around the world, urging us to act together. You're not
            just spectators but a crucial part of this journey. By giving me
            virtual energy drinks and cheering for me, you help me keep running
            and spreading the message. Every cheer, every drink helps to keep me
            going, and in turn, helps to keep the message alive. So come, join
            me in this marathon for peace. Together, we can change the course of
            the future and create a world filled with love, understanding, and
            harmony.
          </p>{" "}
        </div>
        <div className="relative pt-1 px-8">
          {/* Replace existing progress display with the provided Tailwind component */}
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={progress.toFixed(0)}
              className="relative block rounded-full bg-gray-200"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
                <span className="font-bold text-white">
                  {progress.toFixed(0)}%
                </span>
              </span>
              <span
                className="block h-4 rounded-full bg-indigo-600 text-center"
                style={{ width: `${progress}%` }}
              ></span>
            </span>
          </div>
          <button
            onClick={onJoin}
            disabled={!isLoaded}
            className={`mt-4 px-4 py-2 font-bold text-white bg-indigo-600 rounded-full mb-4 ${
              !isLoaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoaded ? "Join me" : "Loading..."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;

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
            Hey there, humans! <br /> This is Tim, and I come with an urgent
            message from the future that we must act on now! I discovered time
            travel and went to the year 2050. What I witnessed was devastating -
            a world torn apart by war, suffering, and environmental destruction.
            <br />
            I rushed back, desperate to warn everyone before it's too late. I
            <br />
            tried telling scientists and leaders, but no one believed me. So now
            <br />
            I'm running an endless virtual marathon, displaying a message of
            <br />
            peace, unity and care for our planet. The message changes to reflect
            <br />
            the critical issues we must address today. You're not just
            <br />
            spectators - by giving me energy and cheering, you keep me and this
            <br />
            vital message going. Together we can change the course of the
            <br />
            future. Join my marathon for peace! Spread the word and run with me
            <br />
            however you can!
          </p>
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
            {isLoaded ? "Join" : "Loading..."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;

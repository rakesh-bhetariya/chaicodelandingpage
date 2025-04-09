import React, { useState, useEffect, useRef } from "react";
import { Users, Code2, Brain, Play } from "lucide-react";
import ReactPlayer from "react-player/youtube";
import Feature from "./feature";

const Hero = () => {
  //   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const videoRef = useRef < HTMLVideoElement > null;
  //   const observerRef = (useRef < IntersectionObserver) | (null > null);
  //   const videoContainerRef = useRef < HTMLDivElement > null;

  //   useEffect(() => {
  //     observerRef.current = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (!entry.isIntersecting && isPlaying && videoRef.current) {
  //             videoRef.current.pause();
  //             setIsPlaying(false);
  //           }
  //         });
  //       },
  //       { threshold: 0.5 }
  //     );

  //     if (videoContainerRef.current) {
  //       observerRef.current.observe(videoContainerRef.current);
  //     }

  //     return () => {
  //       if (observerRef.current) {
  //         observerRef.current.disconnect();
  //       }
  //     };
  //   }, [isPlaying]);

  //   const handlePlayClick = () => {
  //     if (videoRef.current) {
  //       if (isPlaying) {
  //         videoRef.current.pause();
  //       } else {
  //         videoRef.current.play();
  //       }
  //       setIsPlaying(!isPlaying);
  //     }
  //   };

  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying) {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoContainerRef.current) {
      observerRef.current.observe(videoContainerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-green-600 font-medium mb-4">
          Trusted by 1.5M+ code learners
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-8 animate-slide-up"
          style={{ animationDelay: `150ms` }}
        >
          Consistency and Community Learning
          <br /> for Coding Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Feature
            icon={<Users className="w-6 h-6 text-green-600" />}
            title="Peer Learning"
            description="Learn together, grow together with our active community"
          />
          <Feature
            icon={<Code2 className="w-6 h-6 text-green-600" />}
            title="Code Reviews"
            description="Get feedback from peers and mentors on your code"
          />
          <Feature
            icon={<Brain className="w-6 h-6 text-green-600" />}
            title="Virtual Hostel"
            description="Experience the power of community learning"
          />
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200">
            Check all live cohorts
            <div className="ml-2 w-2 h-2 bg-white rounded-full animate-ping" />
          </button>
        </div>

        <div
          ref={videoContainerRef}
          className="relative max-w-4xl mx-auto my-9 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-gray-900">
            <ReactPlayer
              ref={playerRef}
              url="https://youtu.be/yG8JMlldoCE"
              playing={isPlaying}
              controls={true}
              width="100%"
              height="100%"
              className="!rounded-2xl"
            />
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 hover:opacity-100"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-105">
                  <Play
                    className="w-8 h-8 text-green-600 ml-1"
                    fill="currentColor"
                  />
                </div>
              </button>
            )}
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">
              Learn Web Development with Industry Experts
            </h3>
            <p className="text-white/90 mt-2">
              Join our comprehensive program and master modern web technologies
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

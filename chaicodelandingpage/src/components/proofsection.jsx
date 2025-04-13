import React, { useState, useEffect, useRef } from "react";
import { Heart, Star } from "lucide-react";
import TWEETS from "../utils/getAllTweets";
import MicrosoftLogo from "../assets/logos/microsoft-6.svg";
import GoogleLogo from "../assets/logos/google-g-2015.svg";
// import AmazonLogo from "../assets/logo/amazon.svg";
// import MetaLogo from "../assets/logo/meta.svg";

const userAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
];

const TweetCard = ({ tweet, index }) => (
  <div
    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
    style={{
      animationDelay: `${index * 50}ms`,
      flex: "0 0 auto",
      width: "300px",
      marginRight: "1rem",
    }}
  >
    <div className="flex items-center space-x-3 mb-4">
      <img
        src={tweet.image}
        alt={tweet.author}
        className="w-10 h-10 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <h4 className="font-medium text-gray-900">{tweet.author}</h4>
      </div>
    </div>
    <img
      src={tweet.image}
      alt="Tweet screenshot"
      className="w-full rounded-lg mb-3 object-cover"
      loading="lazy"
    />
    <p className="text-gray-600 text-sm">{tweet.content}</p>
  </div>
);

const ProofSection = () => {
  const [displayedTweets, setDisplayedTweets] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const shuffled = [...TWEETS].sort(() => 0.5 - Math.random());
    setDisplayedTweets(shuffled.slice(0, 12));
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const animateScroll = () => {
      if (isPaused || !scrollContainer) return;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-red-500 animate-bounce-subtle" />
            <p className="text-lg font-medium text-gray-900">
              Love from our community
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join thousands of satisfied learners
          </h2>
          <div className="flex items-center justify-center space-x-4 text-green-600">
            <div className="flex -space-x-2">
              {userAvatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`User ${i + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="font-medium">Join 1.5M+ learners</p>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto py-4 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            cursor: isPaused ? "grab" : "auto",
          }}
        >
          {displayedTweets.map((tweet, index) => (
            <TweetCard key={tweet.id} tweet={tweet} index={index} />
          ))}

          {displayedTweets.map((tweet, index) => (
            <TweetCard
              key={`duplicate-${tweet.id}`}
              tweet={tweet}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our alumni work at leading tech companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Microsoft",
                logo: MicrosoftLogo,
              },
              {
                name: "Google",
                logo: GoogleLogo,
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              },
              {
                name: "Meta",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
              },
            ].map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md p-3 flex items-center justify-center mb-2 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

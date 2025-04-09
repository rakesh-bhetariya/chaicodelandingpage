import React from "react";

const Feature = ({
  icon,
  title,
  description,
  delay,
  animation = "animate-fade-in-up",
}) => (
  <div
    className={`group flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${animation}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300 animate-bounce-subtle">
      <div className="transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);


export default Feature;

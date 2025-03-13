import { useState } from "react"
import { cars } from "./constants/cars"
import clsx from "clsx";

function App() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  const handleNext = () => {
    const arrayLength = cars.length;

    if(activeCarIndex == arrayLength - 1) return

    setActiveCarIndex(activeCarIndex + 1)
  }

  const handlePrev = () => {
    if(activeCarIndex == 0) return

    setActiveCarIndex(activeCarIndex - 1)
  }

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <div className="w-full md:w-80 min-w-80 max-w-[400px] h-full md:h-5/6 min-h-[590px] max-h-[700px] lg:border-2 flex flex-col overflow-hidden">
        <section className="h-1/2 w-full relative">
          <div 
            className={clsx(
              "w-[1179px] h-full flex duration-500 ease-in-out",
              activeCarIndex == 0 && "-translate-x-0 -translate-y-0",
              activeCarIndex == 1 && "-translate-x-1/3 -translate-y-24",
              activeCarIndex == 2 && "-translate-x-2/3 -translate-y-0",
            )}
          >
            <svg
              width="1179"
              height="466"
              className="relative -top-16"
              fill="none"
            >
              <path
                stroke="url(#paint0_linear_3_70)"
                strokeLinecap="round"
                strokeWidth="256.528"
                d="M-23.5 285.5c208.109-74.556-46.22 15.227 161.888-59.328 208.11-74.556 335.822 137.463 554.77 108.985 226.119-29.41 296.743-227.325 522.242-261.128"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_70"
                  x1="-397.954"
                  x2="1791.96"
                  y1="392.691"
                  y2="83.337"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C1810A"></stop>
                  <stop offset="0.515" stopColor="#910398"></stop>
                  <stop offset="1" stopColor="#14C8BF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <section className="absolute inset-0 flex justify-center items-center">
            {cars.map((item, index) => (
              <div
                key={item.id} 
                className="absolute left-0 overflow-hidden"
              >
                <img
                  className={clsx(
                    "duration-500 ease-in-out",
                    index == activeCarIndex && "translate-y-0",
                    index < activeCarIndex && "-translate-y-full",
                    index > activeCarIndex && "translate-y-full",
                  )}
                  src={item.image} 
                  alt="Car image" 
                />
              </div>
            ))}
          </section>
        </section>
        <section className="h-1/2 w-full flex flex-col justify-end py-6 gap-6 px-4">
          <h2 className="text-center relative flex justify-center items-center font-semibold text-xl">
            {cars.map((item, index) => (
              <span 
                key={item.id}
                className="overflow-hidden absolute"
              >
                <span 
                  className={clsx(
                    "block uppercase duration-500 ease-in-out",
                    index == activeCarIndex && "translate-y-0",
                    index < activeCarIndex && "-translate-y-full",
                    index > activeCarIndex && "translate-y-full",
                  )}
                >
                  {item.name.line1} <br />
                  {item.name.line2}
                </span>
              </span>
            ))}
          </h2>
          <div className="h-20 relative text-gray-500 flex justify-center items-center">
            {cars.map((item, index) => (
              <div 
                key={item.id}
                className="overflow-hidden absolute"
              >
                <p 
                  className={clsx(
                    "text-center duration-500 ease-in-out",
                    index == activeCarIndex && "translate-y-0",
                    index < activeCarIndex && "-translate-y-full",
                    index > activeCarIndex && "translate-y-full",
                  )}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1">
            {Array(3).fill(0).map((_, index) => (
              <div
                key={index} 
                className={clsx(
                  "h-1 rounded-full duration-500 ease-in-out",
                  index == activeCarIndex ? "w-14 bg-black" : "w-7 bg-gray-300"
                )}
              />
            ))}
          </div>
          <div className="flex justify-between items-baseline">
            <button
              onClick={handlePrev} 
              className="px-10 py-2 bg-gray-200 rounded-md active:bg-opacity-75 duration-150"
            >
              <span className="text-gray-700 text-lg">
                Previous
              </span>
            </button>
            <button
              onClick={handleNext} 
              className="px-10 py-2 bg-black rounded-md active:bg-opacity-75 duration-150"
            >
              <span className="text-white text-lg">
                Next
              </span>
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default App

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
      <div className="w-full md:w-80 h-full md:h-5/6 lg:border-2 flex flex-col overflow-hidden">
        <section className="h-1/2 w-full relative">
          {/* <div className="w-[300%] h-full flex bg-red-300">
            <div className="flex-grow bg-blue-200"></div>
            <div className="flex-grow bg-orange-200"></div>
            <div className="flex-grow bg-lime-200"></div>
          </div> */}
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
        <section 
          className="h-1/2 w-full flex flex-col gap-6 px-4"
        >
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

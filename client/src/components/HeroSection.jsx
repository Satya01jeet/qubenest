import React,
{useState} from 'react'
import hero_img from '../assets/images/traveller1.png';
import bg from '../assets/decors/Decore.png';
import TextSlideShow from './TextSlideShow';

const HeroSection = () => {

  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const toggleCallbackModal = () => {
    setIsCallbackModalOpen(!isCallbackModalOpen);
  }

  return (
    <div className='flex flex-col md:flex-row justify-center pt-24 px-8'>
      {/* text section */}
      <div className="flex flex-col md:mt-16 md:w-1/2">
        <div className="space-y-6 md:ml-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-merriweather">
            A <span className='text-amber-400'>Home</span>
             <br />
             Away From
             <span className='text-amber-400'> Home</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-lg lg:mx-2 font-merriweather">
          An accommodation which gives you the warmth of your home, familiarity of your surrounding, comfort of your own bed, and sense of community and belongings.......
          </p>
          <button className="mt-4 px-6 py-3 bg-amber-300 text-black rounded-lg shadow-lg hover:bg-amber-400 active:scale-95 transition ease-in-out font-semibold" onClick={toggleCallbackModal}>
            Book a <span className='text-orange-600 font-bold text-lg'>FREE</span> callback 📞
          </button>
        </div>

        <TextSlideShow />
      </div>

      {/* image section */}
      <div className="my-8 flex md:relative md:w-1/2 justify-center">
        <div className="hidden w-[600px] mt-[-160px] mr-[-200px] md:block">
          <img
            src={bg}
            alt=""
            className=""
          />
        </div>

        <div className="w-[500px] md:absolute md:top-[-55px] md:left-[10px] md:w-[600px]">
          <img
            src={hero_img}
            alt="Traveler with luggage"
            className="w-[700px]"
          />
        </div>
      </div>

      {/* {callback modal} */}
      {isCallbackModalOpen && (
        <div
          className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50 z-50" 
          onClick={toggleCallbackModal} // Close modal when clicking outside content
        >
          <div
            className="bg-white rounded-lg p-8 w-full max-w-sm relative shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            role="dialog"
            aria-labelledby="calback-title"
            aria-modal="true"
          >
            <h2
              id="login-title"
              className="text-2xl font-bold mb-6 text-center"
            >
              Enter details
            </h2>
            <form
              className="flex flex-col space-y-4"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default submission behavior
                console.log("callback details submitted");
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2"
                required
                aria-label="Name"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="border border-gray-300 rounded px-4 py-2"
                required
                aria-label="Number"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2"
                required
                aria-label="Email"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-md py-2 px-4 hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroSection
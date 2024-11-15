import React from 'react';
import Bed from '../assets/images/bed.png';
import Bike from '../assets/images/bike.png';
import Clock from '../assets/images/clock.png';
import Dice from '../assets/images/dice.png';
import Freelancer from '../assets/images/freelancer.png';
import Gym from '../assets/images/gym.png';
import Kitchen from '../assets/images/kitchen.png';
import Machine from '../assets/images/machine.png';
import Power from '../assets/images/power.png';
import Router from '../assets/images/router.png';
import building from '../assets/images/building.png';

const IconGrid = () => {
  return (
    <div className="flex justify-evenly items-center min-h-screen rounded-2xl my-28">
      <div className='shadow-md'>
        <img src={building} alt="building" className='h-[500px] rounded-2xl'/>
      </div>
      <div className='flex justify-between w-1/3'>
        {/* Left Column */}
        <div className="flex flex-col items-start space-y-8">
          <div className="flex items-center">
            <img src={Bed} alt="Bed" className="w-12 h-12" />
            <span className="font-semibold ml-4">Fully Furnished</span>
          </div>
          <div className="flex items-center">
            <img src={Gym} alt="Dumbbell" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">Access to Gym</span>
          </div>
          <div className="flex items-center">
            <img src={Bike} alt="Bike" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">2-wheeler parking</span>
          </div>
          <div className="flex items-center">
            <img src={Clock} alt="Clock" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">24x7 Support</span>
          </div>
          <div className="flex items-center">
            <img src={Dice} alt="Dice" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">Playzone</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start space-y-8">
          <div className="flex items-center">
            <img src={Freelancer} alt="Freelancer" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">WFH Friendly</span>
          </div>
          <div className="flex items-center">
            <img src={Machine} alt="Machine" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">Self Laundary Service</span>
          </div>
          <div className="flex items-center">
            <img src={Power} alt="Power" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4"> 24/7 Power Backup</span>
          </div>
          <div className="flex items-center">
            <img src={Router} alt="Router" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">High-Speed WiFi</span>
          </div>
          <div className="flex items-center">
            <img src={Kitchen} alt="Kitchen" className="text-bold w-12 h-12" />
            <span className="font-semibold ml-4">Fully Equipped Kitchen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconGrid;

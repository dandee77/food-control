import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, MapPinIcon, TruckIcon } from 'lucide-react';
export const HowItWorks = () => {
  const steps = [{
    icon: <SearchIcon size={24} className="text-white" />,
    title: 'Choose a Restaurant',
    description: 'Browse through hundreds of restaurants and cuisines',
    color: 'bg-primary'
  }, {
    icon: <MapPinIcon size={24} className="text-white" />,
    title: 'Select Your Food',
    description: 'Choose from thousands of available dishes',
    color: 'bg-secondary'
  }, {
    icon: <TruckIcon size={24} className="text-white" />,
    title: 'Delivery or Pickup',
    description: 'Get it delivered or pick it up yourself',
    color: 'bg-accent'
  }];
  return <section className="section-padding bg-backgroundAlt">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-textLight">
            Ordering your favorite food has never been easier
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2">
                    <motion.div initial={{
                width: '0%'
              }} whileInView={{
                width: '100%'
              }} viewport={{
                once: true
              }} transition={{
                duration: 1,
                delay: 0.5
              }} className={`h-full ${index === 0 ? 'bg-primary' : 'bg-secondary'}`} />
                  </div>}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-textLight">{step.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
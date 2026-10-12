import React from 'react';
import PricingFeature from './PricingFeature';
import { Features } from 'tailwindcss';

const PricingCard = ({pricing}) => {
    const { name, price, duration, description, features } = pricing;
    return (
      <div className="flex flex-col border p-4 bg-green-600 rounded-2xl">
        {/* card header */}
        <h1 className="text-4xl">{name}</h1>
        <h3 className="text-2xl">
          {price} / {duration}
        </h3>

        {/* card body */}
        <div className="bg-green-800 rounded-2xl p-5 flex-1">
          <p>{description}</p>
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </div>
        <button className="btn w-full mt-4">Subscribe</button>
      </div>
    );
};

export default PricingCard;
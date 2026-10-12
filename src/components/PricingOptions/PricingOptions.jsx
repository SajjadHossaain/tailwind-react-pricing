import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';
const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    return (
        <div>
            <h2>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-2'>
                {/* manual card make */}
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {/* from daisy ui*/}

                {
                    pricingData.map(pricing => <DaisyPricing pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;
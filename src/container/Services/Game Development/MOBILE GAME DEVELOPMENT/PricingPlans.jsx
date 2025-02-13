import React, { useState } from 'react';
import Subheading from '../../../../Layout/Subheading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const plans = [
    {
      name: 'FREE',
      icon: '◇',
      title: 'Create your first game 100% free.',
      price: 0,
      features: [
        'Fully featured, open-source game engine',
        'Publish to Android/Desktop (once per day)',
        'Try multiplayer and online services for free',
        'Thousands of free assets on the Asset Store'
      ],
      buttonText: 'Create an account',
      buttonVariant: 'black'
    },
    {
      name: 'SILVER',
      icon: '◆',
      title: 'Learn faster, create more, publish with ease.',
      price: 15.99,
      features: [
        'Publish on Google Play, desktop and on the web',
        'Store up to 50 games in the cloud',
        'Unlimited lobbies for players in multiplayer games',
        'Analytics to follow your game virality',
        'Become a gamedev with the Complete GDevelop Master Course.',
        '100 credits per month'
      ],
      buttonText: 'Get started',
      buttonVariant: 'primary'
    },
    {
      name: 'GOLD',
      icon: '⬧',
      iconColor: 'text-yellow-400',
      title: 'Full creation and marketing features. Publish anywhere.',
      price: 31.99,
      features: [
        'Publish your game on iOS',
        'Dedicated channel on Discord',
        'Unlimited leaderboards and player feedbacks',
        'Unlimited lobbies for players in multiplayer games',
        '300 credits per month, to promote your game or use in asset store',
        '1 free asset pack to claim per month'
      ],
      buttonText: 'Get started',
      buttonVariant: 'primary'
    },
    {
      name: 'PRO',
      icon: '⬢',
      iconColor: 'text-red-500',
      title: 'Unlimited usage. Full professional features.',
      price: 259,
      features: [
        'Dedicated support channel on Discord for pros',
        'Collaboration: share projects with teammates',
        'Version history for projects',
        'Unlimited cloud projects',
        'Unlimited lobbies for players in multiplayer games',
        'Access to the upcoming pro marketplace',
        'Billing/invoices available'
      ],
      buttonText: 'Get started',
      buttonVariant: 'primary'
    }
  ];

  return (
    <WrapperContainer>
      
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                  ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                  ${billingCycle === 'yearly' ? 'bg-purple-600 text-white shadow-sm' : 'text-gray-500'}`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-gray-100 rounded-lg p-6 flex flex-col transform hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex-grow space-y-4">
                  {/* Plan Icon & Name */}
                  <div className="flex flex-col items-center">
                    <span className={`text-2xl mb-2 ${plan.iconColor || 'text-gray-400'}`}>
                      {plan.icon}
                    </span>
                    <span className="text-xs font-medium text-gray-500">{plan.name}</span>
                  </div>

                  {/* Plan Title */}
                  <Subheading className="text-base">{plan.title}</Subheading>

                  {/* Features List */}
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Button - Always at Bottom */}
                <div className="mt-auto">
                  <button
                    className={`w-full py-2 px-3 mt-4 rounded-md text-center text-sm font-medium transition-colors duration-200
                      ${plan.buttonVariant === 'black' 
                        ? 'bg-black text-white hover:bg-gray-800' 
                        : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </WrapperContainer>
  );
};

export default PricingPlans;

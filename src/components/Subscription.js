import React from 'react';
import './Subscription.css';

const Subscription = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0 per month',
      features: [
        'Unlimited Courses',
        '1 Admin Account',
        '1 Instructor Account',
        '1 GB Storage',
        'Community Support'
      ]
    },
    {
      title: 'Individual',
      price: '$59 per month',
      features: [
        'Unlimited Courses',
        '1 Admin Account',
        '1 Instructor Account',
        '10 GB Storage',
        'Email Support',
        'Custom Domain'
      ]
    },
    {
      title: 'Business',
      price: '$119 per month',
      features: [
        'Unlimited Courses',
        '5 Admin Accounts',
        '10 Instructor Accounts',
        '100 GB Storage',
        'Priority Support',
        'Custom Domain',
        'Advanced Analytics'
      ]
    },
    {
      title: 'Agency',
      price: '$274 per month',
      features: [
        'Unlimited Courses',
        '25 Admin Accounts',
        '50 Instructor Accounts',
        '1 TB Storage',
        'Dedicated Support',
        'Custom Domain',
        'Advanced Analytics',
        'White Labeling'
      ]
    }
  ];

  return (
    
   <div>
    <h1 className='titlesub'>Optimal Pricing For eLearning Business</h1>
     <div className="subscription-page">
     
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <h3>{plan.title}</h3>
          <h4>{plan.price}</h4>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Subscription;

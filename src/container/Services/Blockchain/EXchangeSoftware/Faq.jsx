import React, { useState } from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How much does it cost to build a cryptocurrency exchange platform?',
      answer: 'The cost of building a cryptocurrency exchange platform can vary significantly based on features, complexity, and security requirements. Basic platforms typically start from $50,000, while more sophisticated exchanges can cost $150,000 or more. Factors affecting cost include trading engine complexity, security measures, user interface, and regulatory compliance requirements.'
    },
    {
      question: 'How long does white label crypto exchange development take?',
      answer: 'White label crypto exchange development typically takes 2-4 months. This timeline includes customization, branding, testing, and deployment. The exact duration depends on specific requirements, customizations needed, and the complexity of additional features requested.'
    },
    {
      question: 'How to create a cryptocurrency exchange?',
      answer: 'Creating a cryptocurrency exchange involves several key steps: 1) Define your target market and features 2) Choose between white-label solution or custom development 3) Ensure legal compliance and obtain necessary licenses 4) Implement robust security measures 5) Integrate payment systems and cryptocurrencies 6) Test thoroughly for security and performance 7) Launch and maintain the platform.'
    },
    {
      question: 'What are the benefits of hiring Appinventiv as your cryptocurrency exchange development company?',
      answer: 'Benefits include experienced blockchain developers, comprehensive security measures, scalable architecture, regulatory compliance expertise, ongoing technical support, and proven track record in crypto exchange development.'
    },
    {
      question: 'What are some of the top features of a cryptocurrency exchange platform?',
      answer: 'Key features include: Multi-currency support, secure wallet integration, real-time trading engine, advanced order types, KYC/AML compliance, two-factor authentication, liquidity aggregation, customer support system, and mobile accessibility.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '50px',
    color: '#1a1a1a',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #2A2A72 0%, #009FFD 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: '10px 0',
  };

  const faqContainerStyle = {
    display: 'grid',
    gap: '16px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const faqItemStyle = (isOpen) => ({
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: isOpen 
      ? '0 10px 30px rgba(0, 0, 0, 0.1)'
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s ease',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  });

  const questionButtonStyle = (isOpen) => ({
    width: '100%',
    padding: '24px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: isOpen 
      ? 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'
      : '#ffffff',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '17px',
    fontWeight: '600',
    color: isOpen ? '#2A2A72' : '#333',
    position: 'relative',
    transition: 'all 0.3s ease',
    borderRadius: '16px',
  });

  const arrowStyle = (isOpen) => ({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.4s ease',
    fontSize: '20px',
    color: isOpen ? '#2A2A72' : '#666',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isOpen ? 'rgba(42, 42, 114, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    borderRadius: '50%',
    marginLeft: '15px',
  });

  const answerStyle = (isOpen) => ({
    maxHeight: isOpen ? '500px' : '0',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    padding: isOpen ? '0 30px 24px' : '0 30px',
    color: '#555',
    lineHeight: '1.8',
    fontSize: '16px',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <>
    
    <WrapperContainer>
    <div style={containerStyle}>
      <h1 style={headerStyle}>Frequently Asked Questions</h1>
      <div style={faqContainerStyle}>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={faqItemStyle(isOpen)}>
              <button
                onClick={() => toggleFaq(index)}
                style={questionButtonStyle(isOpen)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)';
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
              >
                {faq.question}
                <span style={arrowStyle(isOpen)}>↓</span>
              </button>
              <div style={answerStyle(isOpen)}>
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </WrapperContainer>
    
    </>
   
  );
};

export default Faq;
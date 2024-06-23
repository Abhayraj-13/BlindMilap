import React from 'react';
import styled from 'styled-components';

const FeatureSection = styled.section`
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  position: absolute;
  background-color: #030b1c;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  width: 99vw;
  left: 0;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns per row
  grid-gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack cards on small screens
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 500px; // Make cards longer
  backdrop-filter: blur(10px); // Frosted glass effect
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 1s ease-in-out; // Updated duration for hover effect

  &:hover {
    transform: rotateY(180deg); // Rotate sideways
  }
`;

const FeatureIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const Features = () => {
  const featureData = [
    {
      icon: '/icon-random-matching.svg',
      title: 'Random Matching',
      description: 'Connect with new like-minded individuals and broaden your cosmic horizons.',
    },
    {
      icon: '/icon-profile-matching.svg',
      title: 'Profile-based Matching',
      description: 'Find your perfect celestial soulmates based on shared interests and expertise.',
    },
    {
      icon: '/icon-chat.svg',
      title: 'Chat Rooms & Private Messaging',
      description: 'Engage in real-time discussions, share knowledge, and build connections.',
    },
    {
      icon: '/icon-star-party.svg',
      title: 'Virtual Star Parties',
      description: 'Gather online to observe celestial phenomena together, guided by experts.',
    },
  ];

  return (
    <FeatureSection>
      <h2>Explore Our Cosmic Features</h2>
      <FeatureGrid>
        {featureData.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon src={feature.icon} alt={`${feature.title} Icon`} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeatureSection>
  );
};

export default Features;

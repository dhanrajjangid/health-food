// PrivacyPolicy.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Paragraph>Welcome to Minimal React!</Paragraph>
      <Paragraph>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, https://minimal-react.netlify.app (the "Website").</Paragraph>
      
      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>We collect the following information when you use the Website:</Paragraph>
      <Paragraph>- Personal Information: This may include your name, email address, billing and shipping address, and phone number. We collect this information when you create an account, place an order, or contact us.</Paragraph>
      <Paragraph>- Non-Personal Information: This may include your browsing history, IP address, and device information. We collect this information automatically through cookies and other tracking technologies.</Paragraph>
      
      <SectionTitle>2. Use of Information</SectionTitle>
      <Paragraph>We use the information we collect for the following purposes:</Paragraph>
      <Paragraph>- To process your orders and deliver your products.</Paragraph>
      <Paragraph>- To send you marketing and promotional communications (with your consent).</Paragraph>
      <Paragraph>- To personalize your experience on the Website.</Paragraph>
      <Paragraph>- To improve the Website and our services.</Paragraph>
      <Paragraph>- To comply with legal and regulatory requirements.</Paragraph>

      <SectionTitle>3. Sharing of Information</SectionTitle>
      <Paragraph>We may share your information with third-party service providers who help us operate the Website and fulfill your orders.</Paragraph>
      <Paragraph>We will not sell or rent your personal information to third parties.</Paragraph>

      <SectionTitle>4. Your Choices</SectionTitle>
      <Paragraph>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails.</Paragraph>
      <Paragraph>You can also manage your cookie preferences by adjusting your browser settings.</Paragraph>

      <SectionTitle>5. Data Security</SectionTitle>
      <Paragraph>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website is 100% secure.</Paragraph>

      <SectionTitle>6. Children's Privacy</SectionTitle>
      <Paragraph>Our Website is not intended for children under the age of 18. We do not knowingly collect personal information from children.</Paragraph>

      <SectionTitle>7. Changes to Privacy Policy</SectionTitle>
      <Paragraph>We reserve the right to modify this Privacy Policy at any time. The revised Privacy Policy will be effective immediately upon posting on the Website.</Paragraph>

      <SectionTitle>8. Contact Us</SectionTitle>
      <Paragraph>If you have any questions about this Privacy Policy, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink>.</Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;

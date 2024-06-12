import React from "react";
import { Container, EmailLink, Paragraph, SectionTitle, Title } from "./Components/StyledComponents";

const CancellationPolicy = () => {
    return (
      <Container>
        <Title>Cancellation Policy</Title>
        <Paragraph>Welcome to Minimal React!</Paragraph>
        <Paragraph>This Cancellation Policy outlines the conditions under which you can cancel your order on our website, https://minimal-react.netlify.app (the "Website").</Paragraph>
        
        <SectionTitle>1. Cancellation Before Shipment</SectionTitle>
        <Paragraph>You can cancel your order free of charge if you notify us before your order ships.</Paragraph>
        <Paragraph>To cancel your order, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink> with your order number.</Paragraph>
        
        <SectionTitle>2. Cancellation After Shipment</SectionTitle>
        <Paragraph><strong>Digital Products:</strong> Unfortunately, we cannot cancel orders for digital products once they have been downloaded.</Paragraph>
        <Paragraph><strong>Wooden Products:</strong> Unfortunately, we cannot cancel orders for wooden products once they have been shipped.</Paragraph>
        
        <SectionTitle>3. Exceptions</SectionTitle>
        <Paragraph>We reserve the right to refuse cancellation requests for orders that are already in the process of being fulfilled.</Paragraph>
        
        <SectionTitle>4. Contact Us</SectionTitle>
        <Paragraph>If you have any questions about our Cancellation Policy, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink>.</Paragraph>
      </Container>
    );
  };
  
  export default CancellationPolicy;
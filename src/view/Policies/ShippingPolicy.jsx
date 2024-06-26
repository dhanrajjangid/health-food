import React from "react";
import { Container, EmailLink, Paragraph, SectionTitle, Title } from "./Components/StyledComponents";

const ShippingPolicy = () => {
    return (
      <Container>
        <Title>Shipping Policy</Title>
        <Paragraph>Welcome to Buy Minimal!</Paragraph>
        <Paragraph>This Shipping Policy outlines the estimated delivery times and costs for orders placed on our website, Buy Minimal (the "Website").</Paragraph>
        
        <SectionTitle>1. Order Processing</SectionTitle>
        <Paragraph>We aim to process all orders within 5 business days of receipt.</Paragraph>
        
        <SectionTitle>2. Shipping Methods and Costs</SectionTitle>
        <Paragraph>We offer the following shipping methods for orders within India:</Paragraph>
        <Paragraph><strong>Standard Shipping:</strong> This is our most economical option with an estimated delivery time of 7-12 business days. The shipping cost will be calculated at checkout based on the weight and destination of your order.</Paragraph>
        
        <SectionTitle>3. Free Shipping</SectionTitle>
        <Paragraph>We may offer free shipping promotions from time to time. These promotions will be clearly advertised on the Website.</Paragraph>
        
        <SectionTitle>4. Tracking Your Order</SectionTitle>
        <Paragraph>You will receive a confirmation email with tracking information once your order ships. You can track your order online through the carrier's website.</Paragraph>
        
        <SectionTitle>5. Delivery Times</SectionTitle>
        <Paragraph>Your products will be delivered within 7 to 12 days from the date of purchase.</Paragraph>
        
        <SectionTitle>6. International Shipping</SectionTitle>
        <Paragraph>We do not currently offer international shipping.</Paragraph>
        
        <SectionTitle>7. Damaged or Lost Packages</SectionTitle>
        <Paragraph>If you receive a damaged package, please contact us immediately at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink> with photos of the damage. We will work with you to resolve the issue.</Paragraph>
        <Paragraph>If your package is lost in transit, we will file a claim with the carrier on your behalf.</Paragraph>
        
        <SectionTitle>8. Contact Us</SectionTitle>
        <Paragraph>If you have any questions about our Shipping Policy, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink>.</Paragraph>
      </Container>
    );
  };
  
  export default ShippingPolicy;
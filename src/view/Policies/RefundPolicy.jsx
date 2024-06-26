import React from "react";
import { Container, EmailLink, Paragraph, SectionTitle, Title } from "./Components/StyledComponents";


const RefundPolicy = () => {
    return (
      <Container>
        <Title>Refund Policy</Title>
        <Paragraph>Welcome to Buy Minimal!</Paragraph>
        <Paragraph>We are committed to providing you with a satisfying shopping experience. This Refund Policy outlines the conditions under which we offer refunds for products purchased on our website, https://buyminimal.shop (the "Website").</Paragraph>
        
        <SectionTitle>1. Digital Products</SectionTitle>
        <Paragraph>We offer a 7-day return policy for unused and unopened digital products. If you are not satisfied with your digital purchase, you may request a full refund within 7 days from the date of purchase.</Paragraph>
        <Paragraph>To request a refund for a digital product, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink> with your order number and reason for return.</Paragraph>
        <Paragraph>Please note that we cannot offer refunds for downloaded digital products.</Paragraph>
        
        <SectionTitle>2. Wooden Products</SectionTitle>
        <Paragraph>We offer a 7-day return policy for unused and unopened wooden products.</Paragraph>
        <Paragraph>Customers are responsible for return shipping costs for wooden products.</Paragraph>
        <Paragraph>To initiate a return for wooden products, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink> with your order number and reason for return. We will arrange for pick-up of the returned wooden product at your convenience.</Paragraph>
  
        <SectionTitle>3. Exceptions</SectionTitle>
        <Paragraph>There are a few exceptions to our refund policy:</Paragraph>
        <Paragraph>- Used or opened products: We cannot offer refunds for products that have been used or opened.</Paragraph>
        <Paragraph>- Damaged products: We will replace damaged products free of charge. However, we cannot offer refunds for damaged products.</Paragraph>
        <Paragraph>- Sale items: All sale items are final sale and cannot be returned or refunded.</Paragraph>
  
        <SectionTitle>4. Processing Time</SectionTitle>
        <Paragraph>Refunds will be processed within 4-5 business days of receiving your returned product.</Paragraph>
        <Paragraph>Refunds will be issued to the original payment method used for the purchase.</Paragraph>
  
        <SectionTitle>5. Contact Us</SectionTitle>
        <Paragraph>If you have any questions about our Refund Policy, please contact us at <EmailLink href="mailto:jangiddhanraj376@gmail.com">jangiddhanraj376@gmail.com</EmailLink>.</Paragraph>
      </Container>
    );
  };
  
  export default RefundPolicy;
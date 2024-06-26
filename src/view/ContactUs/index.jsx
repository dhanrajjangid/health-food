// ContactUs.js
import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Paragraph,
  EmailLink,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
  Image,
} from "./Components/StyledComponents";

const ContactUs = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Subtitle>Have a Question or Feedback?</Subtitle>
      <Paragraph>
        We'd love to hear from you! Feel free to reach out with any inquiries or
        comments you may have.
      </Paragraph>

      <Paragraph>
        You can contact us via email at{" "}
        <EmailLink href="mailto:jangiddhanraj376@gmail.com">
        jangiddhanraj376@gmail.com
        </EmailLink>
        .
      </Paragraph>

      {/* <Paragraph>Alternatively, you can fill out the form below:</Paragraph>

      <ContactForm onSubmit={()=> alert('Form Submitted')}> 
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="5" placeholder="Your Message"></TextArea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm> */}

      <Paragraph>We'll get back to you as soon as possible!</Paragraph>

      <Subtitle>Contact Number:</Subtitle>
      <Paragraph>
        +91 9685010351
      </Paragraph>

      <Subtitle>Operational Address:</Subtitle>
      <Paragraph>
        35 Suman Nagar, Indore, M.P, India, Pin: 452010.
      </Paragraph>

      <Image src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contact Us" />
    </Container>
  );
};

export default ContactUs;

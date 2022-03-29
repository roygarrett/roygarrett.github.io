import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './PageContactElements';


const PageContact = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_./Roy-Garrett', 'template_xzqt099', form.current, '2zLssl-mVDmHSk3Xc')
        .then((result) => {
            console.log(result.text);
        }, 
        (error) => {
            console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>./Roy-Garrett</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Submit Email Contents Below!</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='text' name='from_name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' name='email' required />
              <FormLabel htmlFor='for'>Content</FormLabel>
              <FormInput type='text' name='message' required />
              <FormButton type='submit'>Submit</FormButton>
              <Text>Result Text Here</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PageContact;

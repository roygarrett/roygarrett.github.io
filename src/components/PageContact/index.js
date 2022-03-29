import React, {useState, useRef} from 'react';
import{ init } from '@emailjs/browser';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './PageContactElements';
init("2zLssl-mVDmHSk3Xc");

const Result = () => {
  return(
    'Your message has been sent. Thank you!' 
  );
};

const PageContact = () => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    init.sendForm('service_./Roy-Garrett', 'template1', form.current, '2zLssl-mVDmHSk3Xc')
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
              <Text>{result ? <Result /> : null}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PageContact;

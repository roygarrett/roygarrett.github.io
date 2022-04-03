import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, FormMessageArea, FormSubmitInput} from './PageContactElements';

// const Result = () => {
//   return(
//     'Your message has been sent. Thank you!' 
//   );
// };

const PageContact = () => {
  //const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_./Roy-Garrett', 'template1', form.current, '2zLssl-mVDmHSk3Xc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    // showResult(true);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>./Roy-Garrett</Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail}>
              <FormH1>Submit E-mail below!</FormH1>
              <FormLabel>Name</FormLabel>
              <FormInput type='text' name='from_name' required />
              <FormLabel>Email</FormLabel>
              <FormInput type='email' name='email' required />
              <FormLabel>Message</FormLabel>
              <FormMessageArea type='text' name='message' required />
              <FormSubmitInput type='submit' value='Send' />
              {/* <Text>{result ? <Result /> : null}</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PageContact;

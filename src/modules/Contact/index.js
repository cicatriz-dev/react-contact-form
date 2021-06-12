import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../utils/components/Card';
import Header from '../../utils/components/Header';
import ContactForm from './components/ContactForm';

const Contact = () => {
  const userState = useSelector((state) => state.user);

  return (
    <div>
      <Header username={userState?.username} />
      <Card>
        <ContactForm />
      </Card>
    </div>
  );
};

export default Contact;

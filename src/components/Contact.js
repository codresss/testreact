import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Home from "./Home";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;

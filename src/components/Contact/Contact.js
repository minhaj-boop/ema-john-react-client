import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <Form id="form">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone" />
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Enter a message here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;

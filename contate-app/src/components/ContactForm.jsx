import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getContacts }) => {
  const [value, setValue] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = value;

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContacts(value);
    setValue({ ...CONTACT_FORM_INIT_STATE });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="group"> Group</label>
          <select name="group" id="group" value={group} onChange={handleChange}>
            <option value="">Select Our Group</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <br />
        <input type="submit" value={"Create A New Contact"} />
      </form>
    </div>
  );
};

export default ContactForm;

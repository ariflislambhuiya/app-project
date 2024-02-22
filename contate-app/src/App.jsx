import { useState } from "react";
import ContactForm from "./components/ContactForm";
import TableView from "./components/tableView/TableView";

function App() {
  const [contacts, setContact] = useState([]);

  const getContacts = (contact) => {
    // setContact([].concat(contacts, contact));
    setContact([...contacts, contact]);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContacts={getContacts} />
      <TableView contacts={contacts} />
    </div>
  );
}

export default App;

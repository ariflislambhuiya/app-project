import React, { useState } from "react";
import TableViewItem from "./TableViewItem";

const TableView = ({ contacts }) => {
  const [filter, setFilter] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  let filterContacts = [];
  if (filter === "All") {
    filterContacts = contacts;
  } else {
    filterContacts = contacts.filter((contact) => contact.group === filter);
  }

  if (searchTerm) {
    filterContacts = filterContacts.filter(
      (contact) =>
        contact.name.includes(searchTerm) || contact.email.includes(searchTerm)
    );
  }

  return (
    <>
      <br />
      Filters:
      <select value={filter} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="">None</option>
      </select>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Email:</th>
            <th>Group:</th>
          </tr>
        </thead>
        <tbody>
          {filterContacts.map((contact, index) => (
            <TableViewItem key={index} contact={contact} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableView;

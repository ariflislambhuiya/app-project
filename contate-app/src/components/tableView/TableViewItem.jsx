import React from "react";

const TableViewItem = ({ contact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.group}</td>
    </tr>
  );
};

export default TableViewItem;

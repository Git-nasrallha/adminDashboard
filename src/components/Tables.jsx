import React from "react";
import {Table} from "react-bootstrap";


const Tables = (props) => {
  return (
    <div>
      <Table responsive>
        {props.children}
      </Table>
    </div>
  );
};

export default Tables;

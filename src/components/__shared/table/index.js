import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  OutlinedInput,
  Button
} from "@material-ui/core";

const TableRecord = ({ records }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Input Numerical Value</TableCell>
          <TableCell>Input Unit of Measure</TableCell>
          <TableCell>Target Unit of Measure</TableCell>
          <TableCell>Student Response</TableCell>
          <TableCell>Output</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records.map(
          ({ inputValue, measure, targetMeasure, studentResponse, result }) => (
            <TableRow>
              <TableCell>{inputValue}</TableCell>
              <TableCell>{measure}</TableCell>
              <TableCell>{targetMeasure}</TableCell>
              <TableCell>{studentResponse}</TableCell>
              <TableCell>{result}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TableRecord;

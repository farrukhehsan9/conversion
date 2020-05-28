import React, { useState } from "react";
import { Card, CardContent, OutlinedInput, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { inference, addToRecord } from "../../redux/actions/testActions";
import TableRecord from "../__shared/table";

const Test = () => {
  const [fields, setFields] = useState({
    inputValue: "",
    measure: "",
    targetMeasure: "",
    studentResponse: ""
  });

  const dispatch = useDispatch();
  const { records } = useSelector(state => state.test);

  const { inputValue, measure, targetMeasure, studentResponse } = fields;

  const onChange = (e, name) =>
    setFields({
      ...fields,
      [name]: e.target.value
    });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "4vw",
        width: "100%"
      }}
    >
      <Card style={styles.cardContainer}>
        <CardContent style={styles.cardContent}>
          <div style={styles.textFieldContainer}>
            {[
              {
                name: "inputValue",
                value: inputValue,
                placeholder: "Enter Input Value"
              },
              { name: "measure", value: measure, placeholder: "Enter Measure" },
              {
                name: "targetMeasure",
                value: targetMeasure,
                placeholder: "Enter Target Measure"
              },
              {
                name: "studentResponse",
                value: studentResponse,
                placeholder: "Enter Student Response"
              }
            ].map(({ name, value }) => (
              <OutlinedInput onChange={e => onChange(e, name)} value={value} />
            ))}
          </div>
          <div style={styles.buttonContainer}>
            <Button
              style={styles.evaluate}
              onClick={() =>
                dispatch(
                  inference(inputValue, measure, targetMeasure, studentResponse)
                )
              }
              variant="contained"
            >
              Evaluate
            </Button>
            <Button
              style={styles.addToRecord}
              onClick={() => dispatch(addToRecord())}
              variant="contained"
            >
              Add To Records
            </Button>
          </div>
        </CardContent>
      </Card>
      <TableRecord records={records} />
    </div>
  );
};

const styles = {
  cardContainer: { minWidth: "85%", minHeight: "10vw", margin: "4vw 0" },
  cardContent: { width: "100%", display: "flex", flexDirection: "column" },
  textFieldContainer: {
    width: "100%",
    overflowX: "scroll",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  buttonContainer: {
    alignSelf: "center",
    display: "flex",
    width: "40%",
    margin: "2vw 0",
    justifyContent: "space-between"
  },
  addToRecord: { backgroundColor: "#E91E65", color: "#fff" },
  evaluate: { backgroundColor: "#FFF", color: "#000" }
};

export default Test;

import React from "react";
import { Container } from "react-bootstrap";
import { Formulas } from "../types/props";
import FormulaBox from "./formulaBox";
import { Situation } from "./situation";

export const Content: React.FC<Formulas> = ({ formula }) => {
  return (
    <Container style={{ minWidth: "88%", height: "100%", overflow: "scroll", margin: 0 }}>
      <Situation />
      <FormulaBox formula={formula} />
    </Container>
  );
};

export default Content;

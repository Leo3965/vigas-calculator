import { FC } from "react";
import { CloseButton, ListGroup } from "react-bootstrap";
import { Force } from "../types/force";

interface ForceListProps {
  forces: Array<Force>;
  onForceRemove: (data: string) => void;
}

export const ForceList: FC<ForceListProps> = ({ forces, onForceRemove }) => {
  if (forces.length === 0) {
    return <></>;
  }

  return (
    <>
      <h6>Forças</h6>
      <ListGroup>
        {forces.map((force) => (
          <ListGroup.Item className="bg-dark text-light" key={force.id}>
            <div className="d-flex justify-content-around">
              {force.id}={force.intensity}N{" "}
              <CloseButton
                variant="white"
                onClick={() => onForceRemove(force.id)}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

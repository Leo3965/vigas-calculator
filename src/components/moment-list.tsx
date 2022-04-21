import { FC } from "react";
import { CloseButton, ListGroup } from "react-bootstrap";
import { Moment } from "../types/moment";

interface MomentListProps {
  moments: Array<Moment>;
  onMomentRemove: (data: string) => void;
}

export const MomentList: FC<MomentListProps> = ({
  moments,
  onMomentRemove,
}) => {
  if (moments.length === 0) {
    return <></>;
  }

  return (
    <>
      <h6>Forças</h6>
      <ListGroup>
        {moments.map((moment) => (
          <ListGroup.Item className="bg-dark text-light" key={moment.id}>
            <div className="d-flex justify-content-around">
              {moment.id}={moment.value}KNm{" "}
              <CloseButton
                variant="white"
                onClick={() => onMomentRemove(moment.id)}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

import React from "react";
import { StyledCard } from "./styles/Card.styled";

type Props = {
  id: number;
  title: string;
  body: string;
  image: string;
};
const Card: React.FC<Props> = ({ id, title, body, image }) => {
  return (
    <StyledCard layout={id % 2 === 0 ? "row-reverse" : undefined}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
};

export default React.memo<Props>(Card);

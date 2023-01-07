import React from "react";
import { CardWrapper } from "./CardStyled";
import { IUser } from "../Home/HomeInterface";

interface CardProps {
  data: IUser;
  onclick: (event: React.MouseEvent, data: any) => void;
}

const Card: React.FC<CardProps> = ({ data, onclick }: CardProps) => {
  return (
    <CardWrapper onClick={(e: any) => onclick(e, data.login)}>
      <div className="image_section">
        <img src={data.avatar_url} alt="random" />
      </div>
      <div className="details_section">
        <div className="details">
          <span>Name: </span>
          <span>{data.login}</span>
        </div>
        <div className="details">
          <span>Type: </span>
          <span>{data.type}</span>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

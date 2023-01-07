import React from "react";
import { IRepo } from "./RepoInterface";
import { RepoCardWrapper } from "./ReposStyled";
interface CardProps {
  data: IRepo;
  name: string | undefined;
}

const RepoCard: React.FC<CardProps> = ({ data, name }: CardProps) => {
  return (
    <RepoCardWrapper>
      <div className="details_container">
        <span className="title">Author:</span>
        <span className="result">{data.owner.login}</span>
      </div>
      <div className="details_container">
        <span className="title">Repo Name:</span>
        <span className="result">{data.full_name}</span>
      </div>
      <div className="details_container">
        <span className="title">Number of Stars:</span>
        <span className="result">{data.stargazers_count}</span>
      </div>
      <div className="details_container">
        <span className="title">Watchers:</span>
        <span className="result">{data.watchers_count}</span>
      </div>
      <div className="details_container">
        <span className="title">Forks:</span>
        <span className="result">{data.forks_count}</span>
      </div>
      <div className="details_container">
        <span className="title">Open Issue:</span>
        <span className="result">{data.open_issues_count}</span>
      </div>
    </RepoCardWrapper>
  );
};

export default RepoCard;

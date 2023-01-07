import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { IRepo } from "../Repos/RepoInterface";
import { RepoDetailsWrapper } from "./RepoDetailsStyled";

function RepoDetails() {
  const { name: urlName } = useParams();
  const { repo, status } = useAppSelector((state) => state.repo);

  console.log({ repo });
  return (
    <RepoDetailsWrapper>
      {repo
        .filter(({ name }) => name === urlName)
        .map((data: IRepo, ind) => (
          <>
            <div className="details_container">
              <span className="title">Full Name:</span>
              <span className="result">{data.full_name}</span>
            </div>
            <div className="details_container">
              <span className="title">Name:</span>
              <span className="result">{data.name}</span>
            </div>
            <div className="details_container">
              <span className="title">Description:</span>
              <span className="result">{data.description}</span>
            </div>
            <div className="details_container">
              <span className="title">Default Branch:</span>
              <span className="result">{data.default_branch}</span>
            </div>
            <div className="details_container">
              <span className="title">Author:</span>
              <span className="result">{data.owner.login}</span>
            </div>
            <div className="details_container">
              <span className="title">Repository Link:</span>
              <span
                className="result link_url"
                onClick={() => {
                  window.open(`https:${data.git_url?.split(":")[1]}`);
                }}
              >
                {data.git_url}
              </span>
            </div>
          </>
        ))}
    </RepoDetailsWrapper>
  );
}

export default RepoDetails;

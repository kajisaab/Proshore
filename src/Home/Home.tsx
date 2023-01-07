import { useLayoutEffect } from "react";
import { HomeWrapper, LoadingState } from "./HomeStyled";
import { IUser } from "./HomeInterface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userAsync } from "../features/counter/userSlice";
import Card from "../Card";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useAppDispatch();
  const { value, status } = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    dispatch(userAsync());
  }, [dispatch]);

  const onClick = (e: any, data: any) => {
    // alert(`clicked ${data}`);
  };
  return (
    <HomeWrapper>
      {status === "loading" ? (
        <LoadingState>Loading...</LoadingState>
      ) : (
        <>
          <div className="grid_view_container">
            {value.map((data: IUser, ind: any) => (
              <Link to={`users/${data.login}/repos`} key={ind}>
                <Card data={data} onclick={onClick} />
              </Link>
            ))}
          </div>
        </>
      )}
    </HomeWrapper>
  );
}

export default Home;

import { Link, useParams } from "react-router-dom";
import { InputWrapper, ReposWrapper } from "./ReposStyled";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  useCallback,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
} from "react";
import { repoAsync } from "../features/repos/repoSlice";
import RepoCard from "./RepoCard";
import { TablePagination } from "@mui/material";

interface Props {}

function Repos(props: Props) {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const { repo, status } = useAppSelector((state) => state.repo);
  const [overflowState, setOverflowState] = useState<boolean>(false);
  const [repoDetails, setRepoDetails] = useState<any>({
    per_page: 10,
    page: 1,
    direction: "asc",
    type: "all",
    sort: "full_name",
  });
  const [repoList, setRepoList] = useState<any>([]);
  const dispatch = useAppDispatch();
  const { name } = useParams();

  const fetchRepo = useCallback(() => {
    dispatch(
      repoAsync({
        name: `${name}`,
        per_page: repoDetails.per_page,
        page: repoDetails.page,
        direction: repoDetails.direction,
        type: repoDetails.type,
        sort: repoDetails.sort,
      })
    );
  }, [repoDetails, name, dispatch]);

  useLayoutEffect(() => {
    fetchRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repoDetails]);

  useEffect(() => {
    setRepoList([...repo]);
  }, [repo]);

  const sortFunction = (type: string) => {
    setRepoDetails({
      ...repoDetails,
      sort: type,
    });
    setOverflowState(false);
  };

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOverflowState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const searchData = (data: string) => {
    if (data !== undefined) {
      const filterData: any =
        repo.length > 0 &&
        // eslint-disable-next-line array-callback-return
        repo.filter((val: any) => {
          if (data === "") {
            return val;
          }
          return (
            val?.full_name.toLowerCase().includes(data.toLowerCase()) ||
            val?.watchers_count === parseInt(data)
          );
        });
      setRepoList(filterData);
    }
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setRepoDetails({ ...repoDetails, page: newPage + 1 });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const page = parseInt(event.target.value, 10);
    setRepoDetails({
      ...repoDetails,
      per_page: parseInt(event.target.value, 10),
      page: 1,
    });
  };
  return (
    <ReposWrapper>
      <div className="header_section">
        <InputWrapper onChange={(e) => searchData(e.target.value)} />
        <div className="dropdown_wrapper" ref={dropdownRef}>
          <button
            className="button_container"
            onClick={() => setOverflowState(!overflowState)}
          >
            <span>{`Sort : ${repoDetails.sort}`}</span>
          </button>
          {overflowState && (
            <div className="overflow_container">
              <span onClick={() => sortFunction("created")}>Created</span>
              <span onClick={() => sortFunction("updated")}>Updated</span>
              <span onClick={() => sortFunction("pushed")}>Pushed</span>
              <span onClick={() => sortFunction("full_name")}>full_name</span>
            </div>
          )}
        </div>
      </div>
      <div className="grid_view_container">
        {status === "loading" && <span>loading</span>}
        {status === "idle" &&
          repoList.map((data: any, ind: any) => (
            <Link to={`repository/${data.name}`} key={ind}>
              <RepoCard data={data} name={name} />
            </Link>
          ))}
      </div>
      <div className="pagination_container">
        <TablePagination
          component="div"
          count={100}
          page={repoDetails.page - 1}
          onPageChange={handlePageChange}
          rowsPerPage={repoDetails.per_page}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </ReposWrapper>
  );
}

export default Repos;

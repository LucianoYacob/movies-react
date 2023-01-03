import stlyes from "../styles/Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useSearchParams} from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  // const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={stlyes.searchContainer} onSubmit={handleSubmit}>
      <div className={stlyes.searchBox}>
        <input
          className={stlyes.searchInpunt}
          type="text"
          value={search ?? ""}
          autoFocus
          onChange={(e) => {
            const value = e.target.value;
            // setQuery({ search: value });
            // navigate("/?search=" + value);
            setQuery({search: value})
          }}
          placeholder="Title"
          aria-label="Search Movies"
        />
        <FaSearch size={20} color="black"  className={stlyes.searchButton}/>
      </div>
    </form>
  );
}

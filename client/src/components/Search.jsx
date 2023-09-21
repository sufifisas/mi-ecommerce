import { SearchIcon } from "../icons"

const Search = () => {
  return (
    <div className="Search">
        <form className="container">
            <SearchIcon className="icon" size={24} fill="#007E78" />
            <input className="field" type="search"/>
        </form>
        <button className="btn hidden sm:block">Search</button>
    </div>
  )
}

export default Search
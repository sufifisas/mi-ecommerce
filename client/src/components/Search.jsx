import { SearchIcon } from "../icons"

const Search = () => {
  return (
    <div className="Search">
        <form className="container">
            <SearchIcon className="icon" size={24} fill="#54B435" />
            <input className="field" type="search"/>
        </form>
        <button className="btn hidden sm:block px-6 py-3.5">Search</button>
    </div>
  )
}

export default Search
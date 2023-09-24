import { SearchIcon } from "../icons"

const Search = () => {
  return (
    <div className="Search gap-3">
        <form className="container">
            <SearchIcon className="icon" size={24} fill="#54B435" />
            <input className="field" type="search"/>
        </form>
        <button className="btn hidden sm:block px-6 py-3.5 hover:px-6 hover:py-3.5 rounded-3xl hover:rounded-3xl">Search</button>
    </div>
  )
}

export default Search
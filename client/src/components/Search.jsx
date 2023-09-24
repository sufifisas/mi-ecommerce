import { useState } from "react"
import { SearchIcon } from "../icons"

const Search = ({ keyword, setKeyword, placeholder }) => {
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted')
    setKeyword(searchKeyword);
  }
  return (
    <div className="Search gap-3">
        <form onSubmit={handleSubmit} className="container" id="search">
            <SearchIcon className="icon" size={24} fill="#54B435" />
            <input onChange={(e) => {setSearchKeyword(e.target.value); if(!e.target.value) { setKeyword(e.target.value) }}} placeholder={placeholder} className="field" type="search"/>
        </form>
        <button form="search" type="submit" className="px-6 py-3.5 hover:px-6 hover:py-3.5 rounded-3xl hover:rounded-3xl btn hidden sm:block">Search</button>
    </div>
  )
}

export default Search
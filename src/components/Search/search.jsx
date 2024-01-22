import { SearchFieldContainerStyled, SearchFieldWrapperStyled } from "./search.styled"
import { IoMdSearch } from "react-icons/io";

export default function Search() {
    return (
        <SearchFieldContainerStyled>
            <SearchFieldWrapperStyled>
                <input type="text" className='search-field' name="search-field" placeholder="Search for songs . . . ♪ " />
                <span className="react-icon search-icon"><IoMdSearch /></span>
            </SearchFieldWrapperStyled>
        </SearchFieldContainerStyled>
    )
}
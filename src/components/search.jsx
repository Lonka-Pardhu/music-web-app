export default function Search() {
    return (
        <>
            <div className="search-field-wrapper">
                <div className="search-field-container">
                    <input type="text" className='search-field' name="search-field" placeholder="Search for songs . . . ♪ " />
                    <span className="material-symbols-outlined search-icon">search</span>
                </div>
            </div>
        </>
    )
}
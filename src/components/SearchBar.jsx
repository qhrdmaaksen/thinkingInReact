/*
* 서치 바
* 1. input type text 생성
* 2. checkbox 생성
* */
function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    if (typeof filterText === 'undefined'){
        return '입력된 검색어가 없습니다.'
    }
    return (
        <form>
            {/*input 에 값을 filterText 에 담고 입력 이벤트가 발생하면 입력된 text 의 값을 setFilterText 에 담는다*/}
            <div>
                <input
                    type="text"
                    placeholder="검색 입력"
                    value={filterText}
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
            </div>
            {/*input 에 checked 의 값을 inStockOnly 에 담고 입력 이벤트가 발생하면 체크된 상태를 setInStockOnly 에 담는다*/}
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}
                    />
                    {' '}
                    재고가 있는 상품만 표시
                </label>
            </div>
        </form>
    )
}

export default SearchBar
/*
* 서치 바
* 1. input type text 생성
* 2. checkbox 생성
* */
function SearchBar() {
    return (
        <form>
            <div>
                <input type="text" placeholder="검색 입력"/>
            </div>
            <div>
                <label>
                    <input type="checkbox"/>
                    {' '}
                    재고가 있는 상품만 표시
                </label>
            </div>
        </form>
    )
}

export default SearchBar
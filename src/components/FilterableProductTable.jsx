import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

/*
* 전체 테이블 구성 컴포넌트
* 1. 서치 바 위치
* 2. 제품테이블 위치 및 최상위 App 에서 받은 props(products) 를 ProductTable 컴포에 props 로 넘김*/
function FilterableProductTable({ products}) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products}/>
        </div>
    )
}

export default FilterableProductTable
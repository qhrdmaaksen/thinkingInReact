/*
* ProductTable component
* 1. FilterableProductTable 에서 받은 props(products) 를 이용하여 제품 테이블을 구성
* */
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

function ProductTable({products, filterText, inStockOnly}) {
    const rows = []; // 최종적으로 렌더링할 행 데이터를 저장할 빈 배열 생성
    let lastCategory = null; // 이전에 렌더링된 카테고리를 저장할 변수 초기화

    if (!products || products.length === 0) {
        // 제품이 없는 경우 표시할 내용
        return <div>표시할 제품이 없습니다.</div>
    }

    products.forEach((product) => {//제품 데이터 순회
        /*
        * product.name 을 소문자로 바꾸고 해당 제품들중에 검색된 text 와
        * 비교하여 검색 조건 부합하다면 다음 로직 진행, 없다면 제품 건너뛰고 다음 제품 이동*/
        if (product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1) {
            return;
        }
        //sStockOnly 가 true 이고 제품의 stocked 값이 false 이면 해당 제품을 건너뛰고 다음 제품으로 이동
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            /*
            * 현재 제품의 카테고리가 이전에 렌더링된 카테고리와 다른 경우에
            * ProductCategoryRow 컴포넌트를 rows 배열에 추가
            * */
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            )
        }
        rows.push(
            /*
            * 현재 제품에 대한 ProductRow 컴포넌트를 rows 배열에 추가
            * */
            <ProductRow
                product={product}
                key={product.name}
            />
        )
        lastCategory = product.category
        // 해당 변수는 다음 제품을 처리할 때 사용되어 카테고리가 변경되었는지 확인
    })

    return (
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>가격</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable
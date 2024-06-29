/*
* ProductTable component
* 1. FilterableProductTable 에서 받은 props(products) 를 이용하여 제품 테이블을 구성
* */
import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

function ProductTable({products}) {
    const rows = []; // 최종적으로 렌더링할 행 데이터를 저장할 빈 배열 생성
    let lastCategory = null; // 이전에 렌더링된 카테고리를 저장할 변수 초기화

    if (!products || products.length === 0) {
        // 제품이 없는 경우 표시할 내용
        return <div>표시할 제품이 없습니다.</div>
    }

    products.forEach((product) => {
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
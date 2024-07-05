import classes from './ProductRow.module.css'

function ProductRow({product}) {
    const name = product.stocked ? product.name :
        /*
        * product.stocked 가 true(재고 있음)라면 product.name 을 그대로 표시
        * product.stocked 가 false(재고 없음)이라면 product.name 을 빨간색으로 표시
        * */
        <span className={classes.noStock}>
            {product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow
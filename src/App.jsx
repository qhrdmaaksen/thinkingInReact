import './App.css'
import FilterableProductTable from "./components/FilterableProductTable.jsx";

const PRODUCTS = [
    {category: 'Fruit', price: '1000원', stocked: true, name: '사과'},
    {category: 'Fruit', price: '2000원', stocked: true, name: '배'},
    {category: 'Fruit', price: '3000원', stocked: false, name: '수박'},
    {category: 'Vegetables', price: '4000원', stocked: true, name: '시금치'},
    {category: 'Vegetables', price: '5000원', stocked: false, name: '완두콩'},
    {category: 'Vegetables', price: '6000원', stocked: true, name: '호박'}
]

export default function App() {
    return <FilterableProductTable product={PRODUCTS} />
}

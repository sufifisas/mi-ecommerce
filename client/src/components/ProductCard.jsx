import { Link } from "react-router-dom"

const ProductCard = ({ brand, title, code, id }) => {
  return (
    <div className="ProductCard">
        <div className="flex-grow flex flex-col">
            <div className="flex-grow">
                <div className="tag">{ brand }</div>
                <h3 className="font-bold mb-1 text-lg">{ title }</h3>
            </div>

            <div className="mt-4">
                <p className="text-xs text-[#CED8DD]">UPC12</p>
                <p className="text-sm font-semibold">{ code }</p>
            </div>
        </div>
        <div className="mt-2">
            <Link to={id}>
                <button className="btn w-full">Edit</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard
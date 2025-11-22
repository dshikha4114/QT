import "./Category.css"
function Category({imgurl,titlenm}){
    return <div className="category">
        <img src={imgurl} width={70} height={70}/>
        <h3>{titlenm}</h3>

    </div>
}
export default Category;    
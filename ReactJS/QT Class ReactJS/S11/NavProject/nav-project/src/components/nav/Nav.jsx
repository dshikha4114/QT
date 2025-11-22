import "./Nav.css";
function Nav(){
    return <div className="nav">
        <div className="brand">
            <h1>Brand Name</h1>
        </div>
        <div className="categories">
            <a href="">Home</a>
            <a href="">Mens</a>
            <a href="">Womens</a>
            <a href="">Electronics</a>
            <a href="">Jewellery</a>
        </div>
        <div className="icons">
            <a href=""> <i class="bi bi-person-circle"></i> </a>
            <a href=""> <i class="bi bi-cart-check-fill"></i></a>
            <button>Logout</button>
        </div>

    </div>
}
export default Nav;
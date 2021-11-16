import React from "react"

function Navbar() {
    return (
        <div>
        <header className="header">
  <div className="main-header-wraper main-header">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-3">
          <div className="logo-container">
            {/* Logo */}
            <div className="logo">
              <a href="index.html">
                <img className="default-logo" src="assets/images/logo.png" data-rjs={2} alt="ecommerce" />
                <img className="sticky-logo" src="assets/images/logo.png" data-rjs={2} alt="ecommerce" />
              </a>
            </div>
            {/* End of Logo */}
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-7 col-xl-6">
          {/* menu container */}
          <div className="menu-container">
            <div className="menu-wraper">
              <nav>
                {/* Header-menu */}
                <div className="header-menu dosis">
                  <div id="menu-button">
                  </div>
                  <ul>
                    <li className="active"><a href="#">Home</a>
                      <ul>
                        <li><a href="index.html">Home Version 01</a></li>
                        <li><a href="index-2.html">Home Version 02</a></li>
                        <li className="active"><a href="index-3.html">Home Version 03</a></li>
                        <li><a href="index-4.html">Home Version 04</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                      <ul>
                        <li><a href="#">Shop Details</a>
                          <ul>
                            <li><a href="shop-details.html">Shop Details</a></li>
                            <li><a href="shop-details-withbar.html">Shop details with sidebar</a></li>
                            <li><a href="shop-details-download.html">Shop Details Download</a></li>
                            <li><a href="shop-details-external.html">Shop Details External</a></li>
                            <li><a href="shop-details-grouped.html">Shop Details Grouped</a></li>
                            <li><a href="shop-details-onsale.html">Shop Details onsale</a></li>
                            <li><a href="shop-details-outstck.html">Shop Details Outstck</a></li>
                            <li><a href="shop-details-variable.html">Shop Details Variable</a></li>
                          </ul>
                        </li>
                        <li><a href="shop-2col.html">Shop 2 Column</a></li>
                        <li><a href="shop-2col-withbar.html">Shop 2Col with sidebar</a></li>
                        <li><a href="shop-3col.html">Shop 3 Column</a></li>
                        <li><a href="shop-3col-withbar.html">Shop 3Col with sidebar</a></li>
                        <li><a href="shop-4col.html">Shop 4 Column</a></li>
                        <li><a href="shop-4col-withbar.html">Shop 4Col with sidebar</a></li>
                        <li><a href="shop-5col.html">Shop 5 Column</a></li>
                        <li><a href="shop-6col.html">Shop 6 Column</a></li>
                        <li><a href="shop-masonary.html">Shop Masonary</a></li>
                        <li><a href="shop-minimal.html">Shop minimal</a></li>
                        <li><a href="shop-carousel.html">Shop Carousel</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Catagories</a>
                      <ul>
                        <li><a href="categories-page1.html">Categories 1</a></li>
                        <li><a href="categories-page2.html">Categories 2</a></li>
                        <li><a href="categories-page3.html">Categories 3</a></li>
                        <li><a href="categories-page4.html">Categories 4</a></li>
                      </ul>
                    </li>
                    <li><a href="#">collection</a>
                      <ul>
                        <li><a href="collection-page1.html">Collection 1</a></li>
                        <li><a href="collection-page2.html">Collection 2</a></li>
                        <li><a href="collection-page3.html">Collection 3</a></li>
                        <li><a href="collection-page4.html">Collection 4</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="cart-list.html">Cart List</a></li>
                        <li><a href="checkout.html">Check Out</a></li>
                        <li><a href="wish-list.html">Wish List</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="myaccount.html">My Account</a></li>
                        <li><a href="order-tracking.html">Order Tracking</a></li>
                        <li><a href="search-result.html">Search Results</a></li>
                        <li><a href="logout.html">Log Out</a></li>
                        <li><a href="#">Coming Soon</a>
                          <ul><li><a href="comming-soon.html">Coming Soon 01</a></li>
                            <li><a href="comming-soon2.html">Coming Soon 02</a></li>
                          </ul>
                        </li>
                        <li><a href="#">404 Page</a>
                          <ul>
                            <li><a href="error1.html">404 Page 1</a></li>
                            <li><a href="error2.html">404 Page 2</a></li>
                            <li><a href="error3.html">404 Page 3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul>
                        <li><a href="blog-2clumn.html">Blog Layout</a></li>
                        <li><a href="blog-2clumn-withbar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-pinterest.html">Blog Pinterest</a></li>
                        <li><a href="blog-pinterest-withbar.html">Blog Pinterest with Sidebar</a></li>
                        <li><a href="blog-list.html">Blog list</a></li><li><a href="blog-list-withbar.html">Blog list with Sidebar</a></li>
                        <li><a href="blog-details-withbar.html">Blog Details With Sidebar</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
                {/* End of Header-menu */}
              </nav>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 top-order">
          {/* modal menu */}
          <div className="modal-menu-container">
            <ul className="list-unstyled mb-0">
              <li>
                <div className="search-btn" title="search">
                  <a href="#">
                    <img src="assets/img/icons/search-button.svg" alt="" className="svg" />
                  </a>
                </div>
              </li>
              <li>
                <div className="menu-btn" title="Category menu">
                  <a href="#">
                    <img src="assets/img/icons/manu-button.svg" alt="" className="svg" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* End of modal menu */}
        </div>
      </div>
    </div>
  </div>
</header>
<div className="slidenav catagory-menu">
  <div className="menu-navigation">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="catagory-menu-header d-flex  align-items-center">
            <div className="logo">
              <a href="index.html"><img className="default-logo" src="assets/images/logo.png" data-rjs={2} alt="ecommerce" /></a>
            </div>
            <div className="menu-cancel">
              <img src="assets/img/icons/close-button.svg" className="svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="search-bar primary-form parsley-validate">
            <form action="#">
              <input type="text" className="theme-input-style" placeholder="Type Your Search Here" required />
              <input type="submit" className="search-icon" defaultValue="" />
            </form>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 offset-lg-1">
          <div className="catagory-menu-wrap">
            <nav>
              <ul className="list-unstyled">
                <li><a href="#">Men</a>
                  <span><img src="assets/img/icons/man.svg" className="svg" alt="" /></span>
                  <ul>
                    <li><a href="#">Top Wear</a></li>
                    <li><a href="#">Bottom Wear</a></li>
                    <li><a href="#">Foot Wear</a></li>
                    <li><a href="#">Inner Wear</a></li>
                    <li><a href="#">Traditional Wear</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Accessoriesear</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Accessoriesear</a></li>
                  </ul>
                </li>
                <li><a href="#">Women</a>
                  <span><img src="assets/img/icons/woman.svg" className="svg" alt="" /></span>
                  <ul>
                    <li><a href="#">Kurti &amp; Fatua</a></li>
                    <li><a href="#">Salwar Kameez</a></li>
                    <li><a href="#">Boutique Dress</a></li>
                    <li><a href="#">Saree</a></li>
                    <li><a href="#">Gown</a></li>
                    <li><a href="#">Lehenga</a></li>
                    <li><a href="#">Palazzo</a></li>
                    <li><a href="#">Kurti &amp; Fatua</a></li>
                    <li><a href="#">Salwar Kameez</a></li>
                  </ul>
                </li>
                <li><a href="#">Kids</a>
                  <span><img src="assets/img/icons/kid.svg" className="svg" alt="" /></span>
                  <ul>
                    <li><a href="#">Gear &amp; Activity</a></li>
                    <li><a href="#">Baby Carriers</a></li>
                    <li><a href="#">Nursery</a></li>
                    <li><a href="#">Diapering</a></li>
                    <li><a href="#">Nursing &amp; Feeding</a></li>
                    <li><a href="#">Baby Toys</a></li>
                    <li><a href="#">Bath &amp; Potty</a></li>
                    <li><a href="#">Health &amp; Safety</a></li>
                    <li><a href="#">Baby Clothing</a></li>
                  </ul>
                </li>
                <li><a href="#">Home Decor</a>
                  <span><img src="assets/img/icons/home-dec.svg" className="svg" alt="" /></span>
                  <ul>
                    <li><a href="#">Smart Home</a></li>
                    <li><a href="#">Bath</a></li>
                    <li><a href="#">Bedding</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Home Appliances</a></li>
                    <li><a href="#">Home Improvement</a></li>
                    <li><a href="#">Kids' Home</a></li>
                    <li><a href="#">Kitchen &amp; Dining</a></li>
                    <li><a href="#">Lamps &amp; Lighting</a></li>
                    <li><a href="#">Luggage</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="offcanvas-overlay"></div>
{/* offcanvas mainmenu */}
<div className="offcanvas offcanvas-mainmenu">
  <div className="offcanvas-cancel">
    <img src="assets/img/icons/close-button.svg" className="svg" alt="" />
  </div>
</div>
{/* offcanvas mainmenu */}

</div>
    );
  }
  
  export default Navbar;
  
import React from "react"
import ParallaxMousemove from '../../lib';

function Homepage() {
  return (
    <div>
        <ParallaxMousemove>
        <section className="banner-slider">
            <div className="slider-inner-wrap">
                <div className="owl-carousel banner-carousel1">
                {/* single slider wrap */}
                <div className="single-slider-wrap" data-bg-img="assets/images/1.jpg">
                    <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6">
                        <div className="banner-image" data-trigger="parallax_layers">
                            <img src="assets/images/33.jpg" alt="" data-depth="0.5" />
                        </div>
                        </div> */}
                        <div className="col-md-12 text-center">
                        <ParallaxMousemove.Layer config={{
                            xFactor: 0.5,
                            yFactor: 1.5,
                            springSettings: {
                            stiffness: 30,
                            damping: 30
                            }
                        }}>

                <div className="container">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                        <div className="col-12 display-mobile-none">
                            {/* single Collection */}
      
                            <div className="single-add-inner small-img" data-bg-img="assets/images/44.jpg">
                            <div className="single-add">
                                {/* <p>#womenhat</p> */}
                                <h3 style={{color:'white'}}>Social Media</h3>
                                <h5 style={{color:'white', width:'55%'}}>It is no longer a matter of whether you’ll do Social Media or not, it is about how you’ll do it.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        <div className="single-slider-text custom-div-text">
                            <h1>We do creations that matter.</h1>
                            <p>Day by day we go out exploring endless possibilities, we open our eyes to the brave new world of advertising.</p>
                            <a href="#" className="btn">Browse more</a>
                        </div>
                        <div className="col-12 display-mobile-none">
                            {/* single Collection */}
      
                            <div className="single-add-inner small-img" data-bg-img="assets/images/44.jpg">
                            <div className="single-add">
                                {/* <p>#womenhat</p> */}
                                <h3 style={{color:'white'}}>Social Media</h3>
                                <h5 style={{color:'white', width:'55%'}}>It is no longer a matter of whether you’ll do Social Media or not, it is about how you’ll do it.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        <div className="col-sm-12 col-md-7 display-mobile-none">
                            {/* single Collection */}
                            <div className="single-add-inner small-img" data-bg-img="assets/images/55.png">
                            <div className="single-add">
                                {/* <p>On Summer</p> */}
                                <h3 style={{color:'white'}}>Branding</h3>
                                <h5 style={{color:'white', width:'60%'}}>A clear brand identity is the key to maintaining consistency.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        <div className="col-md-5 col-sm-12 display-mobile-none">
                            {/* single Collection */}
                            <div className="single-add-inner small-img" data-bg-img="assets/images/66.png">
                            <div className="single-add">
                                {/* <p>New Collection</p> */}  
                                <h3 style={{color:'white'}}>Consultancy</h3>
                                <h5 style={{color:'white'}}>Our formula is simple, create meaningful things. To do so, we use a powerful combination of customer research.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 display-mobile-none">
                        {/* single Collection */}
                        <div className="single-add-inner larg-img discount" data-bg-img="assets/images/77.jpg">
                        <div className="single-add"> 
                            <h2 style={{color:'white'}}><span>Web</span> Development</h2>
                            <h5 style={{color:'white'}}>Our team is ready to provide world-class services from hosting to mobile advertising.</h5>
                            {/* <p>For Gents Wear</p> */}
                        </div>
                        <a href="#" className="btn">Learn more</a>
                        </div>
                        {/* End of single Collection */}
                    </div>
                    <div className="col-lg-3 custom-div display-mobile-none">
                        {/* single Collection */}
                        <div className="single-add-inner larg-img discount" data-bg-img="assets/images/77.jpg">
                        <div className="single-add"> 
                            <h2 style={{color:'white'}}><span>Web</span> Development</h2>
                            <h5 style={{color:'white'}}>Our team is ready to provide world-class services from hosting to mobile advertising.</h5>
                            {/* <p>For Gents Wear</p> */}
                        </div>
                        <a href="#" className="btn">Learn more</a>
                        </div>
                        {/* End of single Collection */}
                    </div>
                    </div>
                </div>


                        </ParallaxMousemove.Layer>

                        {/* <ParallaxMousemove.Layer config={{
                            xFactor: 0.2,
                            yFactor: 0.5,
                            springSettings: {
                            stiffness: 50,
                            damping: 30
                            }
                        }}>
                        
                        </ParallaxMousemove.Layer> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="single-slider-wrap" data-bg-img="assets/images/6.jpg">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        {/* slider text */}
                        <div className="single-slider-text">
                            {/* <span><a href="shop-details.html">#travelbag</a></span> */}
                            <h1 style={{color:'white'}}>We do creations that matter</h1>
                            <p style={{color:'white'}}>Day by day we go out exploring endless possibilities, we open our eyes to the brave new world of advertising.</p>
                            <a href="#" className="btn">Browse more</a>
                        </div>
                        {/* End of slider text */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* single slider wrap */}
                </div>
            </div>
            </section>
            </ParallaxMousemove>
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                        <div className="col-12">
                            {/* single Collection */}
      
                            <div className="single-add-inner small-img" data-bg-img="assets/images/44.jpg">
                            <div className="single-add">
                                {/* <p>#womenhat</p> */}
                                <h3 style={{color:'white'}}>Social Media</h3>
                                <h5 style={{color:'white', width:'55%'}}>It is no longer a matter of whether you’ll do Social Media or not, it is about how you’ll do it.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        <div className="col-sm-12 col-md-7">
                            {/* single Collection */}
                            <div className="single-add-inner small-img" data-bg-img="assets/images/55.png">
                            <div className="single-add">
                                {/* <p>On Summer</p> */}
                                <h3 style={{color:'white'}}>Branding</h3>
                                <h5 style={{color:'white', width:'60%'}}>A clear brand identity is the key to maintaining consistency.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        <div className="col-md-5 col-sm-12">
                            {/* single Collection */}
                            <div className="single-add-inner small-img" data-bg-img="assets/images/66.png">
                            <div className="single-add">
                                {/* <p>New Collection</p> */}  
                                <h3 style={{color:'white'}}>Consultancy</h3>
                                <h5 style={{color:'white'}}>Our formula is simple, create meaningful things. To do so, we use a powerful combination of customer research.</h5>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            </div>
                            {/* End of single Collection */}
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        {/* single Collection */}
                        <div className="single-add-inner larg-img discount" data-bg-img="assets/images/77.jpg">
                        <div className="single-add"> 
                            <h2 style={{color:'white'}}><span>Web</span> Development</h2>
                            <h5 style={{color:'white'}}>Our team is ready to provide world-class services from hosting to mobile advertising.</h5>
                            {/* <p>For Gents Wear</p> */}
                        </div>
                        <a href="#" className="btn">Learn more</a>
                        </div>
                        {/* End of single Collection */}
                    </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="offer parallax-window" data-parallax="scroll" data-image-src="assets/images/3.jpg">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <div className="offer-inner-area">
                            <h4 className="get-upto">About us</h4>
                            <h1>INNOVATION</h1>
                            <h4>We are a group of  <span>digital marketing </span> experts who love what they do!</h4>
                            <a href="#" className="btn">See more</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> */}


            <section className="banner-slider">
            <div className="slider-inner-wrap">
                <div className="banner-carousel4 owl-carousel">
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img1.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Social<br />Media</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img2.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Men’s<br />Fashion</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img3.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Women’s<br />Fashion</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img4.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Kid’s<br />Fashion</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img5.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Boy's<br />Fashion</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                {/* single slider wrap */}
                <div className="single-slider-wrap">
                    {/* slider image */}
                    <div className="banner-image">
                    <img src="assets/img/banner/banner4-img6.jpg" alt="" />
                    </div>
                    {/*End of slider image */}
                    {/* banner hover layer */}
                    <div className="banner-hover-layer">
                    <div className="banner-hover-text-wrap">
                        <div className="banner-hover-text">
                        <h2>Girl’s<br />Fashion</h2>
                        <div className="hover-catagory-menu">
                            <nav>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Top Wear</a></li>
                                <li><a href="#">Bottom Wear</a></li>
                                <li><a href="#">Traditional Wear</a></li>
                                <li><a href="#">Foot Wear</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Inner Wear</a></li>
                                <li><a href="#">Fragrance</a></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="catagory-button">
                        <span className="down-arro"><img src="assets/img/icons/down-arro.svg" className="svg" alt="" /></span>
                        <span className="up-arro"><img src="assets/img/icons/up-arro.svg" className="svg" alt="" /></span>
                        </div>
                    </div>
                    </div>
                    {/*End of banner hover layer */}
                </div>
                {/* single slider wrap */}
                </div>
            </div>
            </section>

            <section className="pt-100 pb-70">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    {/* about area */}
                    <div className="about-area-inner">
                    {/* about header */}
                    <div className="about-header">
                        <span>About Us</span>
                        <h3>Best Brand Best Quality</h3>
                    </div>
                    {/*End of about header */}
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form words.</p>
                    <p>
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Inter net. It uses a dictionary of over 200 Latin words.</p>
                    <a href="#">More About Us <span><i className="fa fa-angle-right" /></span></a>
                    </div>
                    {/*End of about area */}
                </div>
                <div className="col-md-6">
                    <div className="about-image-inner">
                    <div className="about-image">
                        <img src="assets/img/featuerd/about1.jpg" alt="" className="about-image1" />
                        <img src="assets/img/featuerd/about2.jpg" alt="" className="about-image2" />
                        <img src="assets/img/featuerd/about3.jpg" alt="" className="about-image3" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>


    </div>
  );
}

export default Homepage;

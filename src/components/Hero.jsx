const Hero = () => {
    return(
        <div className="container">

        <main className="hero">
            <div className="hero-content">
                <h1>Your Feet Deserves The Best</h1>
                <p>Your Feet Deserves The Best and we'r here to help you with our shoes.your Feet deserves the best and we'r here to help you with our shoes.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div> 
                <div className="shopping">
                    <p>Now Available on</p>
                    <div className="brand-icons">
                    
                        <img src="/images/amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
            <img src="/images/hero-image.png" alt="" />
            </div>
        </main>
        </div>
    )
};
export default Hero;
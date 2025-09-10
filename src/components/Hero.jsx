import OrangeButton from "./OrangeButton"

function Hero(){
    return(
        <section className="flex md:flex-row flex-col justify-between items-center">
            <div>
                <h1 className="md:text-[62px] text-[40px] font-extrabold text-gradient">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p className="text-[#81AFDD]">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="text-white mt-4 flex md:flex-row flex-col">
                    <input className="bg-[#052D56] w-[456px] py-4 px-4" type="email" placeholder="Enter your email" />
                    <OrangeButton>Get Started</OrangeButton>
                </div>
                <div className="flex mt-4 items-center gap-2">
                    <img width={181.79} src="/Group 81.png" alt="testimonial" />
                    <span className="text-[#FFFFFF]">1,600 people requested access a visit in last 24 hours</span>
                </div>
            </div>
            <div>
                <img width={900} src="Header Illustration.png" alt="hero-image" />
            </div>
            
        </section>
    )
}



export default Hero
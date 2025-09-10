function Brands(){
    return(
        <div className="flex justify-center gap-10 items-center mt-10">
            <BrandImage src="/google.png" alt={'google'} />
            <BrandImage src="/slack.png" alt="slack" />
            <BrandImage src="/atlassian.png" alt="atlassian" />
            <BrandImage src="/dropbox.png" alt="dropbox" />
            <BrandImage src="/shopify.png" alt="shopify" />
        </div>
    )
}

export default Brands

function BrandImage({src, alt}){
    return(
        <img width={100} src={src} alt={alt} />
    )
}
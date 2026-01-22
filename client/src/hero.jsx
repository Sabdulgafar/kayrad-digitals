import Images from "./ImageParser"

function HeroSection({salute, intro, callToAction}){
    return(
        <div className="grid md:grid-cols-2 max-md:grid-rows-2">
            <div className="md:text-left pt-12 md:pt-40 md:pl-30">
                <h1 className="text-4xl">{salute}</h1>
                <h2 className="text-xl max-md:mt-3 max-md:mb-8 my-6">{intro}</h2>
                <button className="text-white bg-slate-900 rounded-md p-2.5 w-max mt-3 md:mt-6">{callToAction}</button>
            </div>
            <div>
                <img src={Images.heroImage} alt="Hero Image" className="rounded-b-4xl md:mx-10 md:my-8 md:h-140 md:w-140 max-md:w-full max-md:h-full sm:-mt-40 max-md:-mt-10 mx-auto block"/>
            </div>
        </div>
    )
}

export default HeroSection
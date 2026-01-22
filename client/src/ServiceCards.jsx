function ServiceCards({image, title, description, action, isFeatured}){

    return(
        <div className={`${isFeatured === "yes" ? "bg-green-300" : "bg-red-300"} border-b-2 rounded-4xl pb-2`}>
            
            <img src={image} className="rounded-t-4xl"/>
            <h1 className="text-2xl m-4">{title}</h1>
            <p>{description}</p>
            <button className="p-1.5 border-2 border-black rounded-md my-5 w-30">{action}</button>
        </div>
    )
}
export default ServiceCards
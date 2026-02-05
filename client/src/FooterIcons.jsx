function FooterIcon({alphabet, name}){
    return (
        <div>
            <div className="h-12 w-12 bg-gray-500 rounded-full p-4 m-2">
                <p>{alphabet}</p>
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default FooterIcon;
import FooterIcon from "./src/FooterIcons";
function Footer(){

    const icons = [
        {id:1, name:"Facebook", alphabet:"F"},
        {id:2, name:"Twitter", alphabet:"T"},
        {id:3, name:"Instagram", alphabet:"I"}
    ]
    return(
        <div className="bg-slate-900 text-white p-5 mt-15 rounded-t-3xl">
            <div className="flex flex-row flex-3 justify-between max-sm:flex-col">
                <div className="flex flex-row-3">
                {icons.map(icon=>(
                    <FooterIcon
                    key={icon.id}
                    name={icon.name}
                    alphabet={icon.alphabet}
                    />
                ))}
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default Footer;
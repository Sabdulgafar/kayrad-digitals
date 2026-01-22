function NavBar(){

const NavBarLinks = [
    {id: 1, name: "Home", href: "#"},
    {id: 2, name: "About", href: "#"},
    {id: 3, name: "Projects", href: "#"},
    {id: 4, name: "Portfolio", href: "#"}
]
    return(
        <nav className="bg-slate-900 w-full p-2.5 rounded-t-xl">
            <div className="flex flex-3 flex-row justify-between text-white">
                <div className="ml-4 mt-1.5"><span className="text-lg bg-white text-black p-1 rounded-full">KR</span><span className="text-lg">D</span></div>
                <div className="max-sm:hidden">
                    <ul className="mt-2 mx-auto w-max block">
                        {NavBarLinks.map((link)=>(
                            <li className="inline mx-1">
                                <a
                                key={link.id}
                                name={link.name}
                                href={link.href}
                                className="py-3 px-4 text-md"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className="bg-white text-black p-2 mx-4 rounded-md text-md">Get started</button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
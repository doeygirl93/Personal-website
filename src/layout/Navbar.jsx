import {Button} from "@/components/Button";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#favorites", label: "Favorites" },
];

export const Navbar = () => {
    return (
        <header className=" fixed top-0 left-0 right-0 bg-transparent py-5">

        <nav className="container mx-auto px-6 flex intems-center justify-between">

            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                CU<span className="text-primary">.</span>
            </a>
        
        {/* ts is the desktop nav */}
        
        
        <div className=" flex items-center gap-1 ">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">  
                {navLinks.map((link, index) => (
                    <a href={link.href} key={index}className="px-3 py-2 text-sm text-muted-fg hover:text-fg hover:bg-surface rounded-full">
                        {link.label}
                    </a>
                ))}

            </div>
        </div >
        {/* CTA BUTTON */}
        <div><Button>Contact Me </Button></div>
        </nav>
        </header>
    )

};
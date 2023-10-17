function Header() {
  return (
    <header>
        <nav className="flex flex-row align-middle justify-around bg-yellow-100">
            <h1 className="p-3 flex align-middle text-2xl">SportShop</h1>
            <div className="flex flex-row align-middle justify-center list-none">
                <li className="p-3 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Tienda</li>
                <li className="p-3 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Galeria</li>
                <li className="p-3 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Acerca de Nosotros</li>
                <li className="p-3 bg-yellow-200 cursor-pointer hover:bg-yellow-300">Github</li>
            </div>
        </nav>
    </header>
    )
}

export default Header
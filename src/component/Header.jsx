import React from "react"

function Header() {
    const headerSection = [
        {
            image: "https://www.apple.com/v/macbook-pro/at/images/meta/macbook-pro__bmu4mp5lxjiq_og.png?202510212316",
            name: 'MacBook Pro 14"',
            sub: "Supercharged by M5.",
            desc: "Available starting 10.22",
            btn1: "Learn More",
            btn2: "Pre-Order"
        },
        {
            image: "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg",
            name: "iPad Pro",
            sub: "Advance AI performance and game-changing capabilities.",
            desc: "Available starting 10.22",
            btn1: "Learn More",
            btn2: "Pre-Order"
        },
        {
            image: "https://cdn.mos.cms.futurecdn.net/xhZ7qj7vf25Ep878LSVZpC-1200-80.jpg",
            name: "iPhone 17 Pro",
            sub: "All out Pro.",
            btn1: "Learn More",
            btn2: "Buy"
        }
    ]

    return (<header>
        {headerSection.map((data, index) => {
            return (
                <div key={index} className="w-full h-[70vh] bg-cover bg-top text-white text-center pt-5 sm:pt-10 mb-2 sm:mb-3" style={{ backgroundImage: `url(${data.image})` }}>
                    <h1 className="text-2xl sm:text-5xl font-bold">{data.name}</h1>
                    <h4 className="sm:text-2xl font-semibold">{data.sub}</h4>
                    <p className="text-sm sm:text-base">{data.desc}</p>
                    <div className="mt-1 space-x-5">
                        <button className="bg-black hover:bg-white text-white hover:text-black py-1 px-3 sm:py-2 sm:px-5 transition-all ease-in-out duration-500 rounded-2xl border border-white border-solid">{data.btn1}</button>
                        <button className="bg-black hover:bg-blue-500 text-blue-500 hover:text-white py-1 px-3 sm:py-2 sm:px-5 transition-all ease-in-out duration-500 rounded-2xl border border-blue-600 border-solid">{data.btn2}</button>
                    </div>
                </div>
            )
        })}
    </header>)
}

export default Header
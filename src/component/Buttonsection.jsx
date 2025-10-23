import React from "react"

function Buttonsection() {
    const sectionList = [
        {
            name: "iPhone Air",
            sub: "The thinnest iphone ever. with the power of pro insdie.",
            btn1: "Learn More",
            btn2: "Buy",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-air-finish-select-202509-cloudwhite_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=NUpaQVl1bitSNmJWZUdKdi9QZHhsQnMyOXpiUEVyWXc0UFVFMUg1R1Ztcm5HOXFFT3FmTXVyaThOalBnQzZ5UlZZSzFRaUtHWkpsNVFjaGNKTGxvT0ZLUVUycEJya0hsWFBUR0JtbjFSclN0TXdmWG8wSkNlbUlGSE83REJnTFYwTEhiZEhPT09ib0poZ2hNenkwU1BB&traceId=1"
        },
        {
            name: "Vision Pro",
            sub: "New powerful M5 chip and comforatble band.",
            btn1: "Learn More",
            btn2: "Pre-Order",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/vision-pro-gallery-measure-hero-202510_PF1_FMT_WHH?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=eDVwb1h3eE5DQmx2RnhFenBtbjB4eDdJeFpaUjNiUnhGaHFXYnpFSWxJcFBxeTFqS1loTGdZckx5N3NMbDdTdTFHNjlCSGljd3lKZmVzelVwRHRBMENrakpGNnhCWWJJa3RUVzhiczBkd2o3RXFyTVFEOTJ4ZFBLaENDYmZTYVZvc01laTlVR29XRTc1SnpNWnZ4OVlR"
        },
        {
            name: "AirPods Pro",
            sub: "The world best in-ear Active Noise Cancellation.",
            btn1: "Learn More",
            btn2: "Buy",
            image: "https://www.apple.com/v/airpods-pro/q/images/overview/welcome/hero__b0eal3mn03ua_large.jpg"
        },
        {
            name: "Watch Series 11",
            sub: "The ultimate way to watch your health.",
            btn1: "Learn More",
            btn2: "Buy",
            image: "https://www.apple.com/v/apple-watch-series-11/b/images/overview/product-viewer/product_landing_endframe__eaytrp6zz6c2_large.jpg"
        },
        {
            name: "Trand In",
            sub: "Get upto $200-$700 in credit when you trade in iPhone 13 or higher.",
            btn1: "Learn More",
            btn2: "Buy",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-finish-select-202509-white_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=WGdCRlQ0YVlqbTdXTEkxRnVQb0oxclZmSzgzdlhzQS95ekpRalhXU0JMWGVSZVk3Q2xPTXRrQXVBL1NYUzg0cnVqay8zY0s4VHBsVmhRS2dCdnNPUHBwYUdQQkdYL0crTjZtOXJzeHgrYU9vaWdJZldNK1c4WE1DRUwxemtXTkZseTYya0VCcDRHbkxMZW9YbEpxR1VB&traceId=1"
        },
        {
            name: "Card",
            sub: "Get up to 3% Daily Cash back with every purchase.",
            btn1: "Learn More",
            btn2: "Buy",
            image: "https://i.ytimg.com/vi/JLE228ZuGGA/maxresdefault.jpg"
        }
    ]

    return (<section className="my-1 mx-1 sm:my-5 sm:mx-3 grid sm:grid-cols-2 gap-3">
        {sectionList.map((data, index) => {
            return (
                <div className="bg-gray-100 pt-10 text-black w-full cursor-pointer text-center rounded-2xl hover:shadow-lg transition-all ease-in-out duration-500" key={index}>
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                    <h4 className="font-semibold mx-5">{data.sub}</h4>
                    <div className="mt-1 space-x-5 pb-3">
                        <button className="bg-black hover:bg-white text-white hover:text-black py-1 px-3 transition-all ease-in-out duration-500 rounded-2xl border border-white border-solid">{data.btn1}</button>
                        <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 py-1 px-3 transition-all ease-in-out duration-500 rounded-2xl border border-blue-600 border-solid">{data.btn2}</button>
                    </div>
                    <div>
                        <img src={data.image} alt="Iphoneair-Image" className="w-full h-[45vh] bg-cover bg-center rounded-b-2xl" />
                    </div>
                </div>
            )
        })}
    </section>)
}

export default Buttonsection
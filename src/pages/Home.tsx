function Home() {
    return (
        <>
            <div className="
                bg-white 
                flex 
                justify-center
                
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-black
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className='
                            text-5xl 
                            font-bold
                            '>
                            Seja bem-vinde!
                        </h2>
                        <p className='text-xl'>FarmaPonto é lugar de comprar medicamentos e cosméticos baratos!</p>

                        <div className="flex justify-around gap-4">
                            <button className='
                                    rounded
                                    bg-sky-300 
                                    text-white 
                                    py-2 
                                    px-4
                                    '>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn.discordapp.com/attachments/1213109662677737511/1245346037493661777/HheNdw7.png?ex=66586a60&is=665718e0&hm=7641a1e64f7c1ec77ad1dc6a99ab952844b7bcead4fd781e6a636fcd7299a8b4&"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Home
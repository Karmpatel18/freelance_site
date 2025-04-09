import React from 'react'

const Card = () => {
    return (
        <div className='max-w-[550px] mt-5 '>
            <img class="design-figure__image-container__image" alt="Examples of various logo designs created using logomaker" src="https://99designs-start-static.imgix.net/inspiration/logomaker.png?auto=format&amp;q=45&amp;w=360&amp;dpr=2"></img>
            <h2 className='flex justify-center py-3 text-lg font-bold '>Free Logomaker</h2>
            <h1 className='max-w-fit text-[15px] text-center px-1 py-3'>Create your logo design in minutes. It's fast, free and oh-so-easy. The perfect way to get started, or use it as inspiration for our designers to level up your branding.</h1>
            <div className="flex justify-center mt-3">
                <a className='hover:underline duration-200'>Create a logo, it's free</a>
            </div>
        </div>
    )
}

export default Card

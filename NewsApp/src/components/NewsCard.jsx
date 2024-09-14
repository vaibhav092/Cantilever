import React from 'react'

function NewsCard(props) {

    const altImage="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
    const values=props["articles"]
    let {
        urlToImage,
        author,
        title ,
        description,
        url,
        publishedAt}=values
    if (urlToImage===null){
        urlToImage=altImage
    }
    return (
        <div className='mx-3 my-4 border border-gray-300 rounded-lg overflow-hidden shadow-lg h-auto w-80 '>
            <img
            src={urlToImage}
            alt="News"
            className='object-cover'
            />
            <div className='p-4'>
            <h2 className='text-lg font-semibold mb-2'>{title}</h2>
            <p className='text-sm text-gray-500 mb-2'>{author}</p>
            <p className='text-gray-700 mb-4'>{description}</p>
            <a
                href={url}
                className='text-blue-500 hover:underline'
                target="_blank"
                rel="noopener noreferrer"
            >
                Read more
            </a>
            <p className='text-xs text-gray-400 mt-2'>{new Date(publishedAt).toLocaleDateString()}</p>
        </div>
        </div>
    );
}

export default NewsCard;
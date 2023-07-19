import React from 'react'

function AlbumCard({title,imgSrc,linkToSpotify}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={imgSrc} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <a href={linkToSpotify} target='_blank' className="btn btn-primary">Listen Now</a>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
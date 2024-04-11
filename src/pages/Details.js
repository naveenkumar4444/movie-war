import React, { Fragment, useEffect } from 'react'
import { useMovieContext } from '../components/ContextAPI'
import { useParams } from 'react-router-dom'
import { FcRating } from "react-icons/fc";

function Details() {

    const { details, fetchMovieDetails } = useMovieContext()

    const params = useParams()

    // console.log(details);

    useEffect(() => {
        fetchMovieDetails(params?.id)
    }, [params])

    return (
        <div style={{
            padding: "2rem",
        }}>
            {details &&
                <Fragment>
                    <div className='details'>
                        <div className='details-leftpart'>
                            <div className='details-part'>
                                <img className='details-poster' src={`https://image.tmdb.org/t/p/w500/${details.details.poster_path}`} />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                }}>
                                    <h2 className='details-title'>{details.details.title}</h2>
                                    <div className="details-rating"><FcRating /> &nbsp; {details.details.vote_average}</div>
                                    <div className="">
                                        <span className='details-time'>{details.details.runtime} min</span>
                                        <span className='details-genre'>{details.details.genres.map(e => e.name).join(', ')}</span>
                                    </div>
                                    <div className="details-date"><span className='rdate'>Release Date: </span>{new Date(details.details.release_date).toDateString()}</div>
                                </div>
                            </div>
                            <div className='details-overview'>
                                <h2>OverView</h2>
                                <p>{details.details.overview}</p>
                            </div>
                        </div>
                        <img className='details-backdrop' src={`https://image.tmdb.org/t/p/w500/${details.details.backdrop_path}`} />
                        {/* <div className='backdrop-div'>
                </div> */}
                    </div>
                    <div className='cast-div'>
                        <h1>Cast</h1>
                        <div className='cast-data'>
                        {details.cast.cast.map((item, key) => (
                            <div key={key} className='cast-image-div'>
                                <img className='cast-image' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <h5><span>Character: </span>{item.character}</h5>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Details
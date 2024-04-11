import React, { useEffect, useState } from 'react'
import Card from "../components/Card"
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useMovieContext } from "../components/ContextAPI"
import { useLocation } from 'react-router-dom';

function MoviesData({ data }) {

    const obj = {
        "/": "popular",
        "/toprated": "top_rated",
        "/upcoming": "upcoming",
    }

    const [pathName, setPathName] = useState("")

    const { fetchMovies } = useMovieContext()

    const location = useLocation()

    useEffect(() => {
        setPathName(location?.pathname)
    }, [])


    return (
        <div>
            <div className="items-div">
                {data && data.results.map((item, key) => (
                    <Card key={key} item={item} />
                ))}
            </div>
            <div className='pagination'>
                <button onClick={() => {
                    if (data.page > 1) {
                        fetchMovies(obj[pathName], data.page - 1)
                    }
                }}>
                    <GrFormPrevious />
                </button>
                {data.page}
                <button onClick={() => {
                    if (data.page < data.total_pages) {
                        fetchMovies(obj[pathName], data.page + 1)
                    }
                }}>
                    <MdOutlineNavigateNext />
                </button>
                {/* <span style={{
                    fontSize: "15px"
                }}>Total: {data.total_pages} pages</span> */}
            </div>
        </div>
    )
}

export default MoviesData
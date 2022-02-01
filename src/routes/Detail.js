import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [movieDetail, setDetail] = useState();
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    console.log(movieDetail);
    return (<div>
        <h2><Link to = "/">Home</Link></h2>
        <h1>Detail</h1>
        {loading ? <h1>loading</h1> : 
            <div>
            <img src={movieDetail.medium_cover_image}/>
            <h2>{movieDetail.title_long}</h2>
            <p>{movieDetail.description_full}</p>
            <ul>{movieDetail.genres.map((g) => <li key={g}>{g}</li>)}</ul>            
            </div>
        }
        </div>);
}

export default Detail;
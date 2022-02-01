import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);

    const [datas, setDatas] = useState([]);  
    const rating = "3";

    const getDatas = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`);
        const json = await response.json();
        setDatas(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
    getDatas();
    },[]);

    return (
    <div>
        {loading ? <h1>loading</h1> : 
            <div>{datas.map((data) => (
            <Movie
            key={data.id}
            id={data.id}
            coverImg={data.medium_cover_image}
            title={data.title}
            summary={data.summary}
            genres={data.genres}
            />
            ))}
            </div>
        }
    </div>
    );
}
export default Home;
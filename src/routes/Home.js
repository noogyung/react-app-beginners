import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from "./Home.module.css";

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
    <div className={styles.container}>
        {loading ? <div className={styles.loader}><span>loading...</span></div> : 
            <div className={styles.movies}>{datas.map((data) => (
            <Movie
            key={data.id}
            id={data.id}
            coverImg={data.medium_cover_image}
            title={data.title}
            year={data.year}
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
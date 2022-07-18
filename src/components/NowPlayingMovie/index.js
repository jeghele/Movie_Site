import { Movie_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function Now_Playing(props){
    return (
        <div><h1>Now Playing Movies</h1>
            <div className="flex auto">
            {props.list.map((item,page) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_now_playin_movie=`${img_url}${item.poster_path}`;
              return (
                <Pic_flex key={item.id}>
                    <Link to="#"><Image src={img_now_playin_movie}></Image></Link>
                    <Link to="#"><Movie_name>{item.title}</Movie_name></Link>
                </Pic_flex>   
                );
            })}
            </div>
        </div>
    )
}

export default Now_Playing;
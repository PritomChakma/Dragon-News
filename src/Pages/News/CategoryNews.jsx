import { useLoaderData } from "react-router-dom";
import CategoryAllNews from "../../Components/CategoryAllNews/CategoryAllNews";


const CategoryNews = () => {
const {data:newses} = useLoaderData()


    return (
        <div className=" my-10 px-5">
            {
                newses.map(news => <CategoryAllNews key={news._id} news={news}></CategoryAllNews>)
            }
        </div>
    );
};

export default CategoryNews;
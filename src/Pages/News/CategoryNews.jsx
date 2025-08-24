import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
const {data} = useLoaderData()
console.log(data);

    return (
        <div>
            <h1>{data.length} news are here</h1>
        </div>
    );
};

export default CategoryNews;
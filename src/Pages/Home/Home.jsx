import Banner from "../../component/Banner/Banner";
import Categories from "../../component/Categories/Categories";
import CraftItem from "../../component/CraftItem/CraftItem";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <CraftItem></CraftItem>
           <Categories></Categories>
        </div>
    );
};

export default Home;
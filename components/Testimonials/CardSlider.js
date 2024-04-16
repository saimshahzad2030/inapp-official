import Testimonials from "./Testimonials";
import style from "./Testimonials.module.css";
const YourPage = () => {
  const cards = [
    {clientName:'Luis', clientProjectName:'CarApp',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
    {clientName:'Mark', clientProjectName:'Beauty App',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},

    {clientName:'Elon', clientProjectName:'Driving App',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},

    {clientName:'Bill', clientProjectName:'Match App',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},

    {clientName:'cam', clientProjectName:'Wedding App',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},

    {clientName:'Shan', clientProjectName:'Map Your Project',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},

    {clientName:'Mike', clientProjectName:'Cltri',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
    {clientName:'Rambo', clientProjectName:'xyz',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
    {clientName:'Tyson', clientProjectName:'xyz',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
    {clientName:'Andrew', clientProjectName:'xyz',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
    {clientName:'Tyson', clientProjectName:'xyz',projectDescription:'Ive been blown away by the level of professionalism and expertise demonstrated by this team. They listened to my needs and delivered a product that exceeded my expectations. ill definitely be working with them again in the future.'},
   
  ];

  return (
    <div className={style.testimonials}>
        <h4>Testimonials</h4>
      <h1>Our Client Reviews</h1>
      <Testimonials cards={cards} />
    </div>
  );
};

export default YourPage;

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Page.css"
export default function DemoCarousel (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
       <div className="App">
        {/* <h1 className="marque">This is a Website which show the humanity nature for all us. which shows credentail point</h1> */}
        <Carousel responsive={responsive}>
  <div className="card">
    <img src="https://www.shutterstock.com/shutterstock/photos/1018065133/display_1500/stock-vector-illustration-of-police-department-with-officers-in-uniform-cars-and-city-landscape-1018065133.jpg" height="500px" width="100%"></img>
  </div>
  <div className="card">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/493/181/small/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg" height="500px" width="100%"></img>
  </div>
  <div className="card">
    <img src="https://www.iwmbuzz.com/wp-content/uploads/2022/09/tips-to-suggest-secretary-of-your-building-for-better-and-clean-society-5-920x518.jpg" height="500px" width="100%"></img>
  </div>
  <div className="card">
    <img src="https://1.bp.blogspot.com/-_52ySclI5CE/Xpg5pdiUuYI/AAAAAAAAnts/UgjlIAMAYMYf8mNj3UKz6Ja6Mar5vv6WgCLcBGAsYHQ/s1600/Pic%2B1%2B%25281%2529.jpg" height="500px" width="100%"></img>
  </div>
  <div className="card">
  <img src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/tuition-fees-protesters.jpg?itok=LzplDLMA" height="500px" width="100%"></img>
  </div>
</Carousel>;

       </div> 
      )

}
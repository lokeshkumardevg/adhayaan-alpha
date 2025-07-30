import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import axios from "axios";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import { hidenav } from "../store/slices/sideNavSlice";
const Testimonial = () => {
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API_URL;
  const handleTestimonial = async () => {
    try {
      const response = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_all_testi"
        `${apiKey}admin/index.php/Api/get_all_testi`
      );
      if (response.data) {
        setData(response.data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleTestimonial();
  }, []);
  return (
    <div className="testimonial" onClick={handlemenu2}>
      <div className="inner-testimonial" onClick={() => dispatch(decrement())}>
        <div
          className="in-t-d"
          data-aos="fade-up"
          data-aos-duration="100"
          data-aos-once="true"
          data-aos-delay="100"
          style={{ marginTop: "20px" }}
        >
          <p style={{ cursor: "text" }}>TESTIMONIAL</p>
          <p className="t-p" style={{ cursor: "text" }}>
            What Our Students Saying
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          data-aos="fade-up"
          data-aos-duration="100"
          data-aos-once="true"
          data-aos-delay="500"
        >
          {data.map((value) => (
            <SwiperSlide className="slide">
              <div className="slid-div-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: value.description,
                  }}
                />
              </div>
              {console.log(data)}
              <div className="slid-div-3">
                <div className="sld-1">
                  <div className="sld-circle">
                    {" "}
                    <img src={value.testi_image} alt="" />
                  </div>
                </div>
                <div className="sld-2">
                  <p>{value.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          

      
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

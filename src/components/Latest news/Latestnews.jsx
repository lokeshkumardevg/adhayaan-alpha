import { useEffect, useState } from "react";
import React from "react";
import Carousel from "react-multi-carousel";
import "./Latestnews.css";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
// import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
const   Latestnews = () => {
  const [blog, setBlog] = useState([]);
  // const history = useHistory();
  const navigate = useNavigate();
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 4,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 794 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 794, min: 0 },
  //     items: 1,
  //   },
  // };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  const apiKey = process.env.REACT_APP_API_URL;
  const handleBlog = async () => {
    try {
      const response = await axios.post(
        // "https://aadhyayan.com/admin/index.php/Api/get_all_blog/"
        `${apiKey}admin/index.php/Api/get_all_blog/`
      );
      console.log(response);
      setBlog(response.data.res);
    } catch (error) {
      console.log(error);
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength); // Truncate to maxLength characters
    } else {
      return text;
    }
  };
  // const handleBlogItemClick = (blogId) => {
  //   // Navigate to a new route with the blog details
  //   history.push(`/blog/${blogId}`);
  // };
  useEffect(() => {
    handleBlog();
  }, []);
  return (
    <div className="ln-container" onClick={handlemenu2}>
      {console.log("====>blog data", blog)}
      <div className="inner-ln-container" onClick= {() => dispatch(decrement())}>
        <h2>Latest News</h2>
        <div className="card-second">
          <Carousel  
            responsive={responsive}
            className="carousel"
            // arrows={showArrow ? false : true}
          >
            {blog.map((blogItem, index) => (
              <div className="card-box" key={index}>
                <div className="card-img">
                  <img
                    src={blogItem.blog_image}
                    alt=""
                    onClick={() => navigate(`/blog/${blogItem.id}`)}
                    
                  />
                </div>
                <div className="card-box-div">
                  <h3 onClick={() => navigate(`/blog/${blogItem.id}`)}>
                    {blogItem.blog_title}
                  </h3>
                  <p style={{ color: "#630000" }}>
                    {truncateText(blogItem.description, 100)}{" "}
                    {blogItem.description.length > 100 && "......"}
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    // onClick={() => handleBlogItemClick(blogItem.id)}
                  >
                    <Link
                      to={`/blog/${blogItem.id}`}
                      style={{ textDecoration: "none", color: "#630000" }}
                      className="card-link"
                    >
                      <i className="fa-solid fa-angles-right"></i>View more
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Latestnews;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loding from "../Loder/Loding";
import Layout from "../Layout/Layout";
// import { Helmet } from "react-helmet";

const Blogpage = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_API_URL;
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_all_blog/"
          `${apiKey}admin/index.php/Api/get_all_blog/`
        );
        console.log(response.data); // Check console for API response
        // Filter the blog array based on id
        const filteredBlog = response.data.res.filter((item) => item.id === id);
        setBlog(filteredBlog); // Set filtered blog array to state
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog([]); // Reset blog state on error
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  return (
    <Layout>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Blog's</title>
        <meta name={blog.meta_description} content="Helmet application" />
      </Helmet> */}
      <div className="blog-container">
        <div className="inner-blog-container">
          <div className="width-blog-container">
            {blog.length > 0 ? (
              blog.map((blogItem) => (
                <div key={blogItem.id}>
                  {/* <img src={blogItem.blog_image} alt="" /> */}
                  <div className="cdiv">
                    <h2>{blogItem.blog_title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: blogItem.description,
                      }}
                    />
                    <p>meta_description:{blogItem.meta_description}</p>
                    <p>blog_name:{blogItem.blog_name}</p>
                    <p>meta_keyword{blogItem.meta_keyword}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>
                <Loding />
              </p>
            )}{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogpage;

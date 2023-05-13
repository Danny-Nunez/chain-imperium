import React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsTwoColumnSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchMediumFeed();
  }, []);

  const fetchMediumFeed = async () => {
    try {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Artemisvision');
      const data = await response.json();
      setArticles(data.items);
    } catch (error) {
      console.error('Error fetching Medium feed:', error);
    }
  };

  const stripImagesFromDescription = (description) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(description, 'text/html');
    const sentences = htmlDoc.body.textContent.trim().split(/[.!?]/);
    const firstSentence = sentences[0];
    return firstSentence;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <section className="blog-curs section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <h3 className="wow" data-splitting>
            Our Blogs.
          </h3>
          <span className="tbg">Blogs</span>
        </div>
        <div className="row">
          <div className="col-12">
            {articles.length > 0 ? (
              <Slider
                className="blg-swipe wow fadeInUp"
                data-wow-delay=".5s"
                {...{
                  dots: false,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
                  slidesToScroll: 1,
                  slidesToShow: 2,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                {articles.map((article) => (
                  <div key={article.guid} className="item-box">
                    <div className="item">
                      <div className="bimg">
                        <div
                          className="img bg-img"
                          style={{ backgroundImage: `url(${article.thumbnail})` }}
                        ></div>
                      </div>
                      <div className="cont valign">
                        <div className="full-width">
                          <div className="info custom-font">
                            <a href="#0" className="author">
                              <span>by / Admin</span>
                            </a>
                            <Link href={article.link}>
                              <a target="_blank" rel="noopener noreferrer" className="date">
                                <span>{formatDate(article.pubDate)}</span>
                              </a>
                            </Link>
                          </div>
                          <h6 className="custom-font">
                            <Link href="/blog-details/blog-details-dark">
                              {article.title}
                            </Link>
                          </h6>
                          <div className="articleDes" dangerouslySetInnerHTML={{ __html: stripImagesFromDescription(article.description) }}></div>
                          <div className="btn-more custom-font">
                            <Link href={article.link}>
                              <a target="_blank" rel="noopener noreferrer" className="simple-btn">Read More</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsTwoColumnSlider;


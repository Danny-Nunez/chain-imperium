import React from "react";
import { useState, useEffect } from 'react';
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Modal"

const BlogsTwoColumnSlider = () => {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);


  useEffect(() => {
    fetchMediumFeed();
  }, []);

  const fetchMediumFeed = async () => {
    try {
      const response1 = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chainimperium');
      const response2 = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Artemisvision');
      const data1 = await response1.json();
      const data2 = await response2.json();
      setArticles([...data1.items, ...data2.items]);
    } catch (error) {
      console.error('Error fetching Medium feeds:', error);
    }
  };

  const stripImagesFromDescription = (description) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(description, 'text/html');
    const words = htmlDoc.body.textContent.trim().split(' ');
    const truncatedText = words.slice(0, 15).join(' ');
    return truncatedText + '...';
  };
  const stripImages2FromDescription = (description) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(description, 'text/html');
    
    // Remove all <img> elements from the HTML content
    const images = htmlDoc.body.querySelectorAll('img');
    images.forEach((image) => image.remove());
  
    // Get the HTML content of the body without images
    const bodyContent = htmlDoc.body.innerHTML;
  
    return bodyContent;
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };
  

  return (
    <section className="blog-curs section-padding sub-bg">
      <div className="container">

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  {selectedArticle && (
    <div>
      <div className="articleThumb">
      <span className="SelectedDate">Published {formatDate(selectedArticle.pubDate)}</span>
          <img alt="" src={selectedArticle.thumbnail} />
          
          </div>
         
      <h4 className="custom-font popupA">{selectedArticle.title}</h4>
      
      <p className="articleDes" dangerouslySetInnerHTML={{ __html: stripImages2FromDescription(selectedArticle.description) }}>
      
      </p>
    </div>
  )}
</Modal>


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
                            <Link href="#">
                              <a className="date">
                                <span>{formatDate(article.pubDate)}</span>
                              </a>
                            </Link>
                          </div>
                          <h6 className="custom-font">
                            <Link href="#">
                              {article.title}
                            </Link>
                          </h6>
                          <div className="articleDes" dangerouslySetInnerHTML={{ __html: stripImagesFromDescription(article.description) }}></div>
                          <div className="btn-more custom-font">
                              <a onClick={() => openModal(article)} className="simple-btn">Read More</a>
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


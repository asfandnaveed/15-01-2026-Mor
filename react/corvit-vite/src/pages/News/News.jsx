import { useEffect, useState } from 'react';
import './News.css'

function News() {

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getNews = async () => {

        try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9480aea0168c42e886a4cd472701c4b7");
            const data = await response.json();
            setNews(data);

        }
        catch {

        }
        finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        getNews();
    }, []);


    if (isLoading) {
        return (
            <div className='d-flex align-items-center justify-content-center vh-100'>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }


    return (
        <section className="trending-section">
            <div className="container">

                {/* Header */}
                <div className="trending-header">
                    <h2>Trending Places</h2>

                    <button className="view-btn">
                        VIEW ALL <span>↗</span>
                    </button>
                </div>

                <div className="trending-line"></div>

                {/* Cards */}
                <div className="row g-4">

                    {/* Card 1 */}


                    {
                        news.articles.map((article) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="trending-card">
                                    <img
                                        src={article.urlToImage}
                                        alt=""
                                    />

                                    <div className="card-overlay">

                                        <span className="category">CULTRE</span>

                                        <h3>
                                            {article.title}
                                        </h3>

                                        <div className="meta">
                                            <span>📅 27 AUGUST, 2024</span>
                                            <span>⏱ 20 MINS</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }





                </div>
            </div>
        </section>
    );
}

export default News;
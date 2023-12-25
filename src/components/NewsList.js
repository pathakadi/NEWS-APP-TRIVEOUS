import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'

const NewsList = ({query}) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query||"india"}&apiKey=42d11987943442128b56cdf91d2fc009`)
            setArticles(response.data.articles)
            console.log(response)
        }
        getArticles()
    }, [query])
    if(!articles) return 'Loading...'
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList

import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    // console.log(categoryNews);
    const user = useContext(AuthContext)
    // console.log(user?.displayName);
    return (
        <div>
            {id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
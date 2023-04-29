import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TearmsConditions = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h1>Terms and Conditions</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse porro molestias quos. Eum animi magni quo quisquam suscipit vitae enim ut necessitatibus placeat consectetur aspernatur voluptates perspiciatis labore alias, sed excepturi ad! Quasi, iure repellendus rem quas dolore soluta vitae culpa quae! Reprehenderit maiores, commodi deleniti exercitationem quis eaque dolorum harum blanditiis incidunt? Culpa facilis praesentium iste ipsa veritatis nihil asperiores. Neque eos dolores iste reprehenderit adipisci quod illum. Aperiam a mollitia, itaque, corporis nemo, exercitationem soluta qui est labore magni placeat! Animi voluptatem vel dolores explicabo a autem laborum, reiciendis distinctio sapiente modi adipisci sequi illo ex consequatur dolorem.</p>
            <Button onClick={() => navigate('/register')}>Accept</Button>
        </div>
    );
};

export default TearmsConditions;
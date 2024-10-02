import React,{Component} from 'react';

export default class About extends Component{
    render(){
        return(
            <div className='container' style={{marginTop:"150px"}}>
                

                <div className="card text-center">
                    <div className="card-header">
                        About US
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">NewsHead</h5>
                        <p className="card-text">

                            Welcome to <strong>NewsHead</strong>, your essential source for the latest news headlines across diverse categories, including entertainment, science, technology, health, business, and sports. We understand the importance of staying informed, and our mission is to simplify that process for you.

                            Our user-friendly web application curates top news from trusted sources, ensuring you receive timely updates that matter. Whether you’re interested in groundbreaking scientific discoveries, the latest in technology, or trending stories in sports and entertainment, we’ve got it all in one place.

                            With personalized recommendations and a sleek interface, <strong>NewsHead</strong> makes it easy to find news tailored to your interests. Stay connected with the world around you and explore the stories that inspire and inform. Join us on this journey to keep you informed—because knowledge is power!

                        </p>
                        
                    </div>
                    <div className="card-footer text-body-secondary">
                        Email : NewsHead2024@gmail.com
                    </div>
                </div>

            </div>
        )
    }
}
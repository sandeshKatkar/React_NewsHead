import React,{Component} from 'react';
import defaultNewsImg from './defaultNewsImg.jpg';
import {Link} from "react-router-dom";
export default class NewsItem extends Component{
    setDate=(date)=>{
        let date1 =new Date(date).getDate();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month=months[new Date(date).getMonth()];
        let year=new Date(date).getFullYear();

        let fullDate=date1+"-"+month+"-"+year;

        return fullDate;

    }
    render(){
        let {title,discription,imgUrl,newsUrl,date,author,source}=this.props;
      
        return(
            <div>
                <div className="card mx-2" style={{height:"516px"}}>
                    
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        position: 'absolute',
                        left: '1%',
                        marginTop:'5px'
                    }
                    }>
                     <span className="position-absolute translate-start badge rounded-pill bg-success">{source}</span>
                </div>        
                    <img src={imgUrl?imgUrl:defaultNewsImg} className="card-img-top" alt="..." style={{width:"100%",height:"250px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-body-secondary">By <i>{author}</i> At <i> {this.setDate(date)}</i></small></p>
                        <Link rel="noreferrer" to={newsUrl} target="_blank" className="align-self-end btn btn-sm bg-dark text-light">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}
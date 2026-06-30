import { Bookmark } from 'lucide-react' 

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
             <div>
               <div className="top">
                <img src={props.companyLogo} alt="" />
                <button>save<Bookmark size={10}/></button>
              </div>
             <div className="centre">
              <h3>{props.company}<span>{props.postingPeriod}</span></h3>
              <h2>{props.jobTitle}</h2>
              <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
              </div>
             </div>
             </div>
            <div className="bottom">
                <div>
                  <h3>{props.pay}</h3> 
                  <p>{props.location}</p>
                </div>
                <div>
                <button>Apply Now</button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Card;

import Card from './components/card';

const App = () => {
  const jobPostings = [
  {
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=Api&rs=1&c=1&qlt=95&w=102&h=77",
    companyName: "Google",
    jobTitle: "Senior UI/UX Designer",
    postingPeriod: "5 days ago",
    tag1: "Senior Level",
    tag2: "Full Time",
    pay: "120$/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.douAQqLQCydHXDqsPfOcpwHaEK?pid=Api&rs=1&c=1&qlt=95&w=153&h=86",
    companyName: "Amazon",
    jobTitle: "Sales Associate",
    postingPeriod: "2 days ago",
    tag1: "Junior Level",
    tag2: "Full Time",
    pay: "70$/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://s.yimg.com/fz/api/res/1.2/OngNLdOacWHvNjVJ1FUKIg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/c6/18/ed/c618edb71c600432c13ebd6ef2a0c317.jpg",
    companyName: "Microsoft",
    jobTitle: "Software Engineer",
    postingPeriod: "1 week ago",
    tag1: "Senior Level",
    tag2: "Part Time",
    pay: "95$/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.BkOyKrhbys1E9-M5vN94kAAAAA?pid=Api&rs=1&c=1&qlt=95&w=144&h=108",
    companyName: "Swiggy",
    jobTitle: "Delivery Executive",
    postingPeriod: "3 days ago",
    tag1: "Junior Level",
    tag2: "Part Time",
    pay: "45$/hr",
    location: "Pune, India"
  },
  {
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.zN_gxAjgpvmX7HA_PysLQgHaHa?pid=Api&rs=1&c=1&qlt=95&w=99&h=99",
    companyName: "Zomato",
    jobTitle: "Sales Associate",
    postingPeriod: "Today",
    tag1: "Senior Level",
    tag2: "Full Time",
    pay: "85$/hr",
    location: "Delhi, India"
  }
];
  return (
    <div className='parent'>
      {jobPostings.map(function(job){
        return <Card company={job.companyName} jobTitle={job.jobTitle} companyLogo={job.companyLogo} postingPeriod={job.postingPeriod}
         tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
      })}
      
    </div>
  )
}

export default App;

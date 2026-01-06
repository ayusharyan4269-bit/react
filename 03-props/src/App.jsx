import React from 'react'
import Card from './Components/Card'
import User from './Components/User'

const App = () => {

let arr = [10,20,30,40]
const tar = [{name:'Sarthak', age:18},
{name:'Arjun', age:28},
{name:'sakuni', age:22}  ]

/* tar.map(function(a){
  console.log(a.name , a.age)

})
 */


const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "1 month ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "6 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Noida, India"
  }
];



  return (
    <div className='parent'>
    {/*  
     <Card user = 'Sarthak' age='18' age2={19} img='https://images.unsplash.com/photo-1767523881986-f8b55d3c5880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <Card user = 'ARYAN' age='8' age2={29} img='https://plus.unsplash.com/premium_photo-1672510000383-8f46f7b157b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> */}

{jobOpenings.map(function(job){
return <div>{job.companyName}</div>
})}








{arr.map(function(astha){
/* return astha*2 */

//for spaces we do return in h1 or h2 like tags eg

//or
 return <User name={astha} />

/* return <h1>{astha}</h1> */

})}

    </div>
  )
}

export default App


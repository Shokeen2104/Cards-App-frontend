import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  // Array of Objects containing mock data for our UI
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hr"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$90/hr"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "3 days ago",
      post: "Front End Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr"
    }
  ];

  return (
    <div className="parent">
      {/* Mapping through the array and passing data to the Card component via Props */}
      {jobOpenings.map((elem, idx) => (
        <Card 
          key={idx} 
          company={elem.companyName} 
          post={elem.post} 
          tag1={elem.tag1} 
          tag2={elem.tag2} 
          pay={elem.pay} 
          brandLogo={elem.brandLogo} 
          datePosted={elem.datePosted} 
        />
      ))}
    </div>
  );
};

export default App;
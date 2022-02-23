import React from 'react'

export default  function Card(){
const card = {
    background: "blue",

};

const cardImage = {
    width: "100px",
    transform: "translate(10px, 25px)"
}

 const section1 = {
    width: "100px",
    float: "left", 
    height:"250px", 
    background: "blue", 
    position: "absolute"
 };

 const section2 = {
    width: "400px",
    float:  "left",
    height:  "250px",
    background: "#FFFFFF",
    position: "absolute"
 };

 const section3 = {
    width: "100px",
    float:"left",
    height:"250px", 
    background: "#FFFFFF",
    position: "absolute"
 };


const  section4 = {
    width: "100px", 
    float:"left", 
    height:"50px", 
    width: "50px", 
     background: "#FFFFFF"

 };

 const  section5 = {
    width: "100px",
     float:"left", 
     height:"50px",
     width: "50px", 
     background:"#FFFFFF" 

};

const  section6 = {
    width: "100px",
    float: "left",
    height: "50px",
    width: "100px",
    background: "#FFFFFF",
    position: "relative",
    right:" -220px"

};

const textarea1 = {
    height: "20px",
    outline: "none",
    border: "0", 
    paddingTop: "10%"
}

const textarea2 = {
    height: "70px",  
    outline: "none", 
    border: "0"
}

const line={
    width: "100%"
}


  return (
<>
    
        <div className="card" style={card}>
            <div style={section1}>
              <img style={cardImage} className="logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png%22%3E"/>
            </div>

            <div style={section2}>
                <textarea style={textarea1} placeholder="write an awsome title here" id="w3review" name="w3review" rows="4" cols="50"></textarea>
                <hr style={line}/>
                <textarea style={textarea2} placeholder="Give a description here ... " id="w3review" name="w3review" rows="4" cols="50"></textarea>
                <hr style={line}/><br/>

                <div style={section4}></div>
                <div style={section5}></div>
                <div style={section6}><button className="button">Post</button></div>

            </div>

            <div style={section3}>
            </div>
        </div>
        
</>
    
  )
}

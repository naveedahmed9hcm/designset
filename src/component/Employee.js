import React,  { useState, useEffect } from 'react';
import axios from "axios";
import "../css/style.css";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link, useNavigate } from "react-router-dom";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
    );

    return (
        <button
        type="submit"
        style={{  background: 'rgb(67, 67, 222)', color: '#fff',  width: '133.58px', height: '37.11',}}
        onClick={decoratedOnClick}  
        radius= '5px'
        >
            {children}
        </button>
    );
}

function Employee() {

const Url = "http://localhost:5247/api/EmployeeInformation/CreateEmployeeInformation";
const [data, setData]  = useState( {
"firstname": '',
"lastname": '', 
"dateofbirth":"", 
"gender":"",
"nationality":"", 
"martialstatus":"", 
"languagespoken":"", 
"employeephoto":"",
})

function handle(e) {
  const newData = {... data}
  newData[e.target.id] = e.target.value
  setData(newData)
  console.log(newData)
}

function saveUser(e) { 
  e.preventDefault();
  axios.post(Url,
     {
    firstname: data.firstname,
    lastname: data.lastname,
    dateofbirth: data.dateofbirth,
    gender: data.gender,
    nationality: data.nationality,
    martialstatus: data.martialstatus,
    languagespoken: data.languagespoken,
    employeephoto: data.employeephoto,
  }
  )
  .then(res => {
    console.log(res.data)
  })
}

  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [theme, setTheme] = useState("theme");

    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }

        else {
            setTheme ("dark-theme")
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const navigate = useNavigate();

    return (
        
        <>

   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>

<div >

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>

<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<ul>
<li>
  <Link to="/Board" > <i className="fa fa-camera-retro" aria-hidden="true"></i> Dashboard </Link> 
</li>
<li>
 <Link to="/" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> 
</li>
<li>
<Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> 
</li>
<li>
<Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> 
</li>
<li>
<Link to="Consent/" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> 

</li>
</ul>
</div>
</div>
</div> 
</div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div>
                        <ul>

                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                     
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox"  onClick={() => toggleTheme()} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>

                        </ul>
                       
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>
                       
                    <Accordion defaultActiveKey="0">
                        <div className='first-accordian'>
                            <Accordion.Item eventKey="0">
                            <div className='Accitem'>
                                <Accordion.Header>Employee Information</Accordion.Header>
                               
                                <Accordion.Body>
                                <div className='form-head'>
                                        <h2> Employee Information: </h2>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                             <span className="btn-2"> Customize </span>
                                      </button>
                          
                                    </div>

    <div id="carouselExampleControls"  className="carousel slide" data-bs-ride="carousel" 
    data-bs-interval="false">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
    <form onSubmit={saveUser}>
    <div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="Skill Name">First Name</label>
                <input type="text" className="form-control" onChange={(e) => handle(e) }value={data.firstname} placeholder='First Name' id='firstname'  required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Last Name</label>
                <input type="text" className="form-control"  onChange={(e) => handle(e) }value={data.lastname} placeholder='Last Name' id='lastname' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Date of Birth</label>
                <input type="date" className="form-control" onChange={(e) => handle(e) }value={data.dateofbirth} placeholder='Date of Birth' id='dateofbirth' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Gender</label>

                <select class="form-select" aria-label="Default select example" onChange={(e) => handle(e) }value={data.gender} id='gender' required>
                  <option ></option>
                  <option >Male</option>
                  <option >Female</option>
                  <option >Other</option>
                </select>

            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Nationality</label>
                <input type="text" className="form-control"  onChange={(e) => handle(e) }value={data.nationality} placeholder='Nationality' id='nationality' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Marital Status</label>

                <select class="form-select" aria-label="Default select example" onChange={(e) => handle(e) }value={data.martialstatus} id='martialstatus' placeholder='Marital Status' required>
                  <option ></option>
                  <option >Single</option>
                  <option >Mingle</option>
                   <option >Other</option>
                </select>
               
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Languages Spoken</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => handle(e) }value={data.languagespoken} id='languagespoken' placeholder='Languages Spoken' required>
                  <option ></option>
                  <option >English</option>
                  <option >Urdu</option>
                   <option >Other</option>
                </select>
               
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Employee Photo</label>
                <input type="file" className="form-control"  onChange={(e) => handle(e) }value={data.employeephoto}  id='employeephoto' required />
            </div>
        </div>

    </div>
</div>

<div className='button-f'>  
{/* <button type='submit'> submit </button> */}
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1' type='reset'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>
</form>
</div>

    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col" >Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">First Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Last Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Date of Birth</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Gender</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Nationality</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Marital Status</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Language Spoken</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span> 
  </label></td>
    </tr>

    <tr>
      <th scope="row">Employee Photo</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span> 
  </label></td>
    </tr>
    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
                                </Accordion.Body>
                                </div>
                            </Accordion.Item>
                        </div>


                        <div className='middle-accordian' id='middle'>
                            <Accordion.Item eventKey="1">
                             <div className='Accitem'>
                                <Accordion.Header>Contact Information Table: </Accordion.Header>
                                <Accordion.Body>
                <div className='form-heads'>
                <h2> Contact Information Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
                <span className="btn-0">Customize</span>
                       </button>
             
             </div>

     <div id="carouselExampleControlss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>
<form onSubmit={saveUser}>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Address</label>
                <input type="text" className="form-control" onChange={(e) => handle(e) }value={data.Address} placeholder='Address' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Alternative Address</label>
                <input type="text" className="form-control"  onChange={(e) => handle(e) }value={data.AlternativeAddress} placeholder='Alternative Address' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Phone Number </label>
                <input type="number" className="form-control"  onChange={(e) => handle(e) }value={data.pnumber} placeholder='Phone Number' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Email Address</label>
                <input type="text" className="form-control"  onChange={(e) => handle(e) }value={data.Email} placeholder='Email Address' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">LinkedIn Profile URL </label>
                <input type="text" className="form-control" onChange={(e) => handle(e) }value={data.LinkedIn} placeholder='LinkedIn Profile URL' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">WhatsApp Number</label>
                <input type="number" className="form-control" onChange={(e) => handle(e) }value={data.Whatsapp} placeholder='WhatsApp Number' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Preferred Contact Method</label>
                <input type="text" className="form-control" onChange={(e) => handle(e) }value={data.pcmethod} placeholder='Preferred Contact Method' required />
            </div>
        </div>

    </div>
</div>

<div className='button-f'> 
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>
</form>
</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Address</th>
      <td>String</td>
      <td>NAME</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Alternative Address</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Phone Number</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Email Address </th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">LinkedIn Profile URL</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">WhatsApp Number</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>


    <tr>
      <th scope="row">Preferred Contact Method</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
        </Accordion.Body>

                                </div>
                            </Accordion.Item>
                        </div>

                        <div className='last-accordian'>
                            <Accordion.Item eventKey="2">
                            <div className='Accitem'>
                                <Accordion.Header> Emergency Contact Information Table:</Accordion.Header>

                                <Accordion.Body>
                <div className='forms-head'>
                <h2> Emergency Contact Information Table:</h2>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
                 <span className="btn-1">Customize</span>
                </button>
             </div>

     <div id="carouselExampleControlsss"  className="carousel slide"  data-bs-ride="carousel" 
     data-bs-interval="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div  className='Accbody'>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Contact Name</label>
                <input type="text" className="form-control" id="input1" name="input1" required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Relationship </label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Phone Number </label>
                <input type="number" className="form-control" id="input1" name="input1" required />
            </div>
        </div>


        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Email Address</label>
                <input type="text" className="form-control" id="input2" name="input2" required />
            </div>
        </div>
    </div>
</div>


<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1'> Discard </button>
 
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next" >
    <span className="btn-3">Next</span>
  </button>
</div>

</div>
    </div>
    <div className="carousel-item">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name </th>
      <th scope="col">Type </th>
      <th scope="col">Visible To </th>
      <th scope="col"> Disable </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Contact Name</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
    <tr>
      <th scope="row">Relationship</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Phone Number</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>

    <tr>
      <th scope="row">Email Address</th>
      <td>String</td>
      <td>Name</td>
      <td><label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label></td>
    </tr>
  
  </tbody>
</table>

<div className='button-f'>  
    <CustomToggle eventKey="0"> Save </CustomToggle>
    <button className='btn-1' onClick={() => navigate("/Formtwo")}> Next </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="prev">
    <span className="btn-3">Previous</span>
  </button>
</div>

    </div> 
 
  </div>
 
</div>
                             
                                </Accordion.Body>                         
                         
                                </div>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                   
                </div>

            </div>

        </>
    )
}

export default Employee;







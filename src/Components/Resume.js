import React, { Component } from 'react';
import Resumepdf from "../Assets/Santosh_Resume.pdf";

class Resume extends Component {
    render() {
        return (
            <div
                style={{padding:30,paddingTop:0,paddingBottom:50}}
            >
                <h1 style={{fontWeight:'bold',color:'#fff',paddingBottom:50}}>Resume</h1>
                <div>
                    <a href={Resumepdf} download="Santosh_Resume" style={{textDecoration:'none'}}>
                        <h2 style={{display:'flex',color:'#040a1e',width:"50%",backgroundColor:'#35d1e6',padding:10,fontWeight:'bolder',justifyContent:'center',alignItems:'center'}}>[Click Here To Download...]</h2>
                    </a>
                </div>                
            </div>
        );
    }
}

export default Resume;
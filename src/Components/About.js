import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div
                style={{padding:30,paddingTop:200}}
            >
                <h1 style={{fontWeight:'bold',color:'#fff',paddingBottom:10}}>About</h1>
                <div style={{width:'100%',backgroundColor:'#040a1e',alignSelf:'center'}}>
                    <h4 style={{color:'#35d1e6',}}>Full Name        &emsp;&emsp;&emsp;        : Mr. Santosh Penugurthi</h4>
                    <h4 style={{color:'#35d1e6',}}>Email ID         &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;        : n170425@rguktn.ac.in</h4>
                    <h4 style={{color:'#35d1e6',}}>Mobile Number    &nbsp;        : 8247536054, 9100292646</h4>
                    <h4 style={{color:'#35d1e6',}}>Location         &emsp;&emsp;&emsp;&nbsp;&nbsp;        : RGUKT-Nuzvid, Vijayawada, India</h4>
                    <h4 style={{color:'#35d1e6',}}>Github           &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            : https://www.github.com/SantoshPenugurthi</h4>
                    <h4 style={{color:'#35d1e6',}}>Linkedin         &emsp;&emsp;&emsp;&ensp;&nbsp;           : https://www.linkedin.com/in/santosh-penugurthi-1a31971b4</h4>
                    <h4 style={{color:'#35d1e6',}}>Website          &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;          : https://www.santoshweb.com/</h4>
                </div>
            </div>
          
        );
    }
}

export default About;
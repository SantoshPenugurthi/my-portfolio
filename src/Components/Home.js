import React, { Component } from 'react';
import homeLogo from "../Assets/Home.jpeg";
import ProgressiveImage from 'react-progressive-image';
import Typewriter from 'typewriter-effect';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Web3 from 'web3';


class Home extends Component {
      constructor(props) {
        super(props);
        this.state = {
          account: null,
          balance: null,
          web3: null,
        };
      }

      componentDidMount() {
        // Check if Brave Crypto Wallet is available
        if (typeof window.ethereum !== 'undefined') {
          const web3 = new Web3(window.ethereum);
          this.setState({ web3 });

          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(accounts => {
              this.setState({ account: accounts[0] });
              return web3.eth.getBalance(accounts[0]);
            })
            .then(balance => {
              this.setState({ balance });
            })
            .catch(error => {
              console.error('Error connecting to Brave Crypto Wallet:', error);
            });
        } else {
          console.warn('Brave Crypto Wallet not detected. Please install Brave browser and connect your wallet.');
        }
      }

      render() { 
        const { account, balance, web3 } = this.state;
        const particlesInit = async (main) => {
            console.log(main);
        
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(main);
          };
        
          const particlesLoaded = (container) => {
            console.log(container);
          };     
        return (
            <section>
                <Container>
                <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  background: {
                    color: {
                      value: "",
                    },
                  },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 150,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#61dafb",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 1,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 1.0,
                    },
                    shape: {
                      type: "square",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
              />
                </Container>
                <Container fluid className="home-section" id="home" style={{paddingTop:15}}>
                {/*<Container>
                        <Row>
                            <Col md={4}></Col>
                            <Col >
                                <Row>
                                    <Col><h1 style={{ color:'white',fontSize:20,}}>Home</h1></Col>
                                    <Col><h1 style={{ color:'white',fontSize:20}}>About</h1></Col>
                                    <Col><h1 style={{ color:'white',fontSize:20}}>Projects</h1></Col>
                                    <Col><h1 style={{ color:'white',fontSize:20}}>Skills</h1></Col>
                                    <Col><h1 style={{ color:'white',fontSize:20}}>Contact</h1></Col>
                                    <Col><h1 style={{ color:'white',fontSize:20}}>Resume</h1></Col>
                                </Row>
                            </Col>
                        </Row>
              </Container>*/}
                    <div style={{height:45,width:'100%',backgroundColor:'#35d1e6'}}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                      <h1 style={{ color: '#fff', margin: '0 auto', fontFamily: 'Roboto', padding: 10 }}>Welcome to My Portfolio</h1>
                      {account && (
                        <div style={{ textAlign: 'center' }}>
                          <p>Connected Ethereum Account: {account}</p>
                          {balance && (
                            <p>Account Balance: {web3.utils.fromWei(balance)} ETH</p>
                          )}
                          {/* You can now allow interactions or transactions */}
                          {/* Add buttons or forms for various interactions */}
                        </div>
                      )}
                      {!account && <p style={{ color: '#35d1e6', fontSize: '20px' }}>Connect your Brave Crypto Wallet to interact with this site.</p>}
                    </div>
                    <Container className="home-content">
                        <Row>
                            <Col  md={7} className="home-header">
                                <h1 className="heading">
                                    Hi There . . !{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                                </h1>
                
                                <h1 className="heading-name">
                                    I{"'"}m
                                    <strong style={{color:'#35d1e6',letterSpacing:3}}> SANTOSH</strong>
                                </h1>
                
                                <div style={{paddingTop:30,paddingBottom:70}}>
                                    <Typewriter
                                        options={{
                                        strings: [
                                            "Blockchain Developer . .",
                                            "IoT Developer . .",
                                            "AI Engineer . .",
                                            "Software Developer . .",
                                            "React Developer . .",
                                            "React Native Developer . .",
                                            "Photo & Video Graphic Designer . .",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        }}
                                    />
                                </div>
                            </Col>
                
                            <Col md={4} style={{paddingTop:0}}>
                                <div className='home-img-section'>
                                  <div className='App-logo1'></div>
                                    <div style={{position:'absolute'}}>
                                      <ProgressiveImage src={homeLogo} >
                                        {(src, loading) => (
                                          <img style={{ opacity: loading ? 0.1 : 1,maxHeight: '360px',maxWidth: "360px",borderRadius:200,position:'relative' }} 
                                          src={src} 
                                          alt="SantoshImage" 
                                          className='home-img'
                                          />
                                        )}
                                      </ProgressiveImage>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        );
    }
}

export default Home;
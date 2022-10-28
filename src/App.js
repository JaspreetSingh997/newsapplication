import logo from './logo.svg';
import poster from './poster1.jpg';
import postertwo from './R.jpeg';
import angrybirds from './angrybirds.jpg';
import posterthree from './poster2.jpg';
import julia from './juliaG.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="homepage">
        <nav id="navbar">
          <div className="navbarContainer">
            <div className="logo">
              {/* <img src="" alt="Logo Image" /> */}
              <h1>Daily Research Plot</h1>
            </div>
            <ul className="nav">
              <li><a href="#">Celebrity</a></li>
              <li><a href="#">Entertainment</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Anime</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Tv Show</a></li>
            </ul>
            <div className="rightPanel">

            </div>
          </div>
        </nav>
        <div className="newsContainer">
          <div className="grid-container">
            <div className="item1">
              <div className="image">
                <img src={poster} alt="Poster" />
              </div>
              <div className="content">
                <div className="title"><h1>Oblivion: Tom Cruise</h1></div>
                <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
              </div>
            </div>
            <div className="item2">
              <div className="image">
                <img src={postertwo} alt="Poster" />
              </div>
              <div className="content">
                <div className="title"><h1>Star Wars</h1></div>
                <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
              </div>
            </div>
            <div className="item3">
              <div className="image">
                <img src={postertwo} alt="Poster" />
              </div>
              <div className="content">
                <div className="title"><h1>Star Wars</h1></div>
                <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
              </div>
            </div>
            <div className="item4">
              <div className="image">
                <img src={postertwo} alt="Poster" />
              </div>
              <div className="content">
                <div className="title"><h1>Star Wars</h1></div>
                <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
              </div>
            </div>
            <div className="item5">
              <div className="image">
                <img src={postertwo} alt="Poster" />
              </div>
              <div className="content">
                <div className="title"><h1>Star Wars</h1></div>
                <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
              </div>
            </div>
          </div>
          <div class="hotspot">
            <div className="htTitle">
              <h1>Hot Spot</h1>
            </div>
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="mainBody">
        <div class="bodyContainer">
          <div class="mainPanel">
            <div class="mainTitle">
              <h1>Entertainment</h1>
              <a href="">Read All</a>
            </div>
            <div className="mainPanelContent">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc2">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc3">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc4">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc5">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sidePanel">
            <div class="mainTitle">
              <h1>Celebrity Gossips</h1>
            </div>
            <div className='gridBox'>
              <div className="sidegbc">
                <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyContainer">
          {/* second */}
          <div className="mainPanel visuals">
            <div class="mainTitle">
              <h1>Visual Stories</h1>
              <a href="">View All</a>
            </div>
            <div className="visualsContainer">
              <div class="flexContainer">
                <div class="flexContent">
                    <div class="fContent">
                        <div className="image julia">
                           
                        </div>
                        <div className="contentContainer">
                          <div class="title">
                              <h1>Julia Garnet looks Stunning in the dress by Prada</h1>
                          </div>
                          <div class="date">
                              <p>August 5, 2022</p>
                              <p><span>Celebrity</span></p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="flexContent">
                    <div class="fContent">
                        <div className="image rashmika">
                           
                        </div>
                        <div className="contentContainer">
                          <div class="title">
                              <h1>Rashmika Mandanna wins Audience Hearts</h1>
                          </div>
                          <div class="date">
                              <p>August 5, 2022</p>
                              <p><span>Celebrity</span></p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="flexContent">
                    <div class="fContent">
                        <div className="image heidi">
                           
                        </div>
                        <div className="contentContainer">
                          <div class="title">
                              <h1>Heidi Klum shared some Bikini photos</h1>
                          </div>
                          <div class="date">
                              <p>August 5, 2022</p>
                              <p><span>Celebrity</span></p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div class="flexContent">
                    <div class="fContent">
                          <div className="image walker">
                            
                          </div>
                          <div className="contentContainer">
                            <div class="title">
                                <h1>Walker Season 3 Release Date, and streaming details</h1>
                            </div>
                            <div class="date">
                                <p>August 5, 2022</p>
                                <p><span>Celebrity</span></p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="sidePanel visuals">
            <p className="Ad">ADVERTISEMENT</p>
          </div>
        </div>
        <div className="bodyContainer">
          {/* third */}
          <div className="mainPanel">
            <div class="mainTitle">
              <h1>TV Series News</h1>
              <a href="">Read All</a>
            </div>
            <div className="mainPanelContent">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc2">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc3">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc4">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc5">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sidePanel">
            <div class="mainTitle">
              <h1>Celebrity Gossips</h1>
            </div>
            <div className='gridBox'>
              <div className="sidegbc">
                <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyContainer">
          {/* third */}
          <div className="mainPanel">
            <div class="mainTitle">
              <h1>Technology</h1>
              <a href="">Read All</a>
            </div>
            <div className="mainPanelContent">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc2">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc3">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc4">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent gbc5">
                <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sidePanel">
            <div class="mainTitle">
              <h1>Celebrity Gossips</h1>
            </div>
            <div className='gridBox'>
              <div className="sidegbc">
                <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
              <div className="sidegbc">
              <div class="imageContainer">
                  <img src={posterthree} alt="couple poster" />
                </div>
                <div class="gbc2Content">
                  <div class="gbc2Cat">
                    <p>TV Series</p>
                  </div>
                  <div class="gbc2Title">
                    <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyContainer">
          {/* fourth */}
          <div className="mainPanel">
            <div class="mainTitle">
              <h1>Anime News</h1>
              <a href="">Read All</a>
            </div>
            <div className="mainPanelContent">
              <div className='gridBox'>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="gridBoxContent animegbc">
                  <div class="imageContainer">
                    <img src={posterthree} alt="couple poster" />
                  </div>
                  <div class="gbc2Content">
                    <div class="gbc2Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc2Title">
                      <h1>Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far!</h1>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidePanel">
            <p className="Ad">ADVERTISEMENT</p>
          </div>
        </div>
        <div className="bodyContainer">

          <div className="morestories">

            <div className="btn">MORE STORIES</div>
            <div className="moreSBox">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moreSBox">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moreSBox">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moreSBox">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moreSBox">
              <div className='gridBox'>
                <div className="gridBoxContent gbc1">
                  <div class="imageContainer">
                    <img src={angrybirds} alt="couple poster" />
                  </div>
                  <div class="gbc1Content">
                    <div class="gbc1Cat">
                      <p>TV Series</p>
                    </div>
                    <div class="gbc1Title">
                      <h1>Angry Birds: Summer Madness Season 3 Release Date, Cast, and Everything you need to know</h1>
                    </div>
                    <div class="gbc1sub">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis temporibus labore error harum ipsam corporis culpa eum.</p>
                    </div>
                    <div class="date">
                      <p>August 5, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="footerContainer">
            <div class="leftSide">
                <div class="leftContent">
                    <div class="newsSection">
                        <div class="newsTitle"><h1>News Section</h1></div>
                        <p className="tags">Entertainment | Celebrity News | TV News | Technlogy News | Movies | Politics | Sports | General News | Trending | Bollywood | Web Stories | Business | Videos | Photos</p>
                    </div>
                    <hr />
                    <div class="aboutDRP">
                        <div class="logo"><h1>Daily Research Plot</h1></div>
                        <p>Daily Research Plot is a new-age media company that keeps its readers updated with the latest news headlines from the United States and all over the world. Entertainment, TV News, Shows Premiere Date, Release Date, Celebrity Gossips, and Travel - We help our readers to know about everything running around the world in every field.</p>
                    </div>
                    <div class="social">
                        <span>FOLLOW US</span>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-youtube"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-rss"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="rightSide">
                <div class="rightContent">
                    <div class="rightTitle"><h1>Quick Links</h1></div>
                    <ul class="quickLinksNav">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">DMCA Policy</a></li>
                        <li><a href="#">Editorial Policy</a></li>
                        <li><a href="#">Fact-Checking Policy</a></li>
                        <li><a href="#">Ownership, Funding, and Advertisement Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">RSS Feeds</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Write for Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
          <p>&copy; 2019 - 2022 Daily Research Plot All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

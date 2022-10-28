import logo from './logo.svg';
import poster from './poster1.jpg';
import postertwo from './R.jpeg';
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
                    <img src={poster} alt="Poster"/>
                </div>
                <div className="content">
                    <div className="title"><h1>Oblivion: Tom Cruise</h1></div>
                    <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>   
                </div>
            </div>
            <div className="item2">
              <div className="image">
                    <img src={postertwo} alt="Poster"/>
              </div>
              <div className="content">
                  <div className="title"><h1>Star Wars</h1></div>
                  <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>   
              </div>
            </div>
            <div className="item3">
              <div className="image">
                    <img src={postertwo} alt="Poster"/>
              </div>
              <div className="content">
                  <div className="title"><h1>Star Wars</h1></div>
                  <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>   
              </div>
            </div>  
            <div className="item4">
              <div className="image">
                    <img src={postertwo} alt="Poster"/>
              </div>
              <div className="content">
                  <div className="title"><h1>Star Wars</h1></div>
                  <div className="titleCaption"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>   
              </div>
            </div>
            <div className="item5">
              <div className="image">
                  <img src={postertwo} alt="Poster"/>
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
                          s
                        </div>
                        <div className="gridBoxContent gbc2">
                          s
                        </div>
                        <div className="gridBoxContent gbc3">
                         s 
                        </div>
                        <div className="gridBoxContent gbc4">
                          s
                        </div>
                        <div className="gridBoxContent gbc5">
                        s
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
                  s
                </div>
                <div className="sidegbc">
                  s
                </div>
                <div className="sidegbc">
                  s 
                </div>
                <div className="sidegbc">
                  s
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

              </div>
            </div>
            <div className="sidePanel visuals">
              <p>ADVERTISEMENT</p>
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
                        s
                      </div>
                      <div className="gridBoxContent gbc2">
                        s
                      </div>
                      <div className="gridBoxContent gbc3">
                        s 
                      </div>
                      <div className="gridBoxContent gbc4">
                        s
                      </div>
                      <div className="gridBoxContent gbc5">
                      s
                      </div> 
                  </div>
              </div>
            </div>
            <div className="sidePanel">
            <div class="mainTitle">
                <h1>Movies News</h1>
              </div>
              <div className='gridBox'>
                <div className="sidegbc">
                  s
                </div>
                <div className="sidegbc">
                  s
                </div>
                <div className="sidegbc">
                  s 
                </div>
                <div className="sidegbc">
                  s
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
                        s
                      </div>
                      <div className="gridBoxContent gbc2">
                        s
                      </div>
                      <div className="gridBoxContent gbc3">
                        s 
                      </div>
                      <div className="gridBoxContent gbc4">
                        s
                      </div>
                      <div className="gridBoxContent gbc5">
                      s
                      </div> 
                  </div>
              </div>
            </div>
            <div className="sidePanel">
            <div class="mainTitle">
                <h1>Games & Sports</h1>
              </div>
              <div className='gridBox'>
                <div className="sidegbc">
                  s
                </div>
                <div className="sidegbc">
                  s
                </div>
                <div className="sidegbc">
                  s 
                </div>
                <div className="sidegbc">
                  s
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
                        s
                      </div>
                      <div className="gridBoxContent animegbc">
                        s
                      </div>
                      <div className="gridBoxContent animegbc">
                        s 
                      </div>
                      <div className="gridBoxContent animegbc">
                        s
                      </div>
                      <div className="gridBoxContent animegbc">
                      s
                      </div> 
                      <div className="gridBoxContent animegbc">
                      s
                      </div> 
                  </div>
              </div>
            </div>
            <div className="sidePanel">
              <p>ADVERTISEMENT</p>
            </div>
        </div>
        <div className="bodyContainer">
          
          <div className="morestories">
            
              <div className="btn">MORE STORIES</div> 
              <div className="moreSBox">
                s
              </div>
              <div className="moreSBox">
                s
              </div>
              <div className="moreSBox">
                s 
              </div>
              <div className="moreSBox">
                s
              </div>
              <div className="moreSBox">
              s
              </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;

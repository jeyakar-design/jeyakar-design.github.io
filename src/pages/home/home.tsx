import { useState } from 'react';

import Header from '../../components/header';
import VerticalCenterContainer from '../../components/vertical-center-container';
import HatStarContent from '../../components/hat-star-content';

import '../../assets/styles/common.style.css';
import './home.style.css';

const menuList = ['About', 'My hats', 'Portfolio', 'Contact'];
const Home = () => {
  const [activeTabId, setActiveTabId] = useState<string>('tab1');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [canShowErrorMsg, setShowErrorMsg] = useState<boolean>(false);

  const setTabActive = (tabId: string) => {
    setActiveTabId(tabId);
  }

  const setEmailAddressValue = (value: string) => {
    setEmailAddress(value);
    setShowErrorMsg(false);
  }

  const triggerEmail = () => {
    setShowErrorMsg(!!!emailAddress);
    if (!emailAddress) {
      return;
    }

    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isValid = emailPattern.test(emailAddress);

    setShowErrorMsg(!isValid);
    if (!isValid) {
      return true;
    }

    const windowRef: any = window.open('mailto:jeyakarvaiz.cua@gmail.com', '_blank');
    windowRef.focus();

    // close the new tab which was opened for triggering email window
    setTimeout(function(){
      if(!windowRef.document.hasFocus()) {
          windowRef.close();
      }
    }, 500);
  }

  return (
    <>
      <Header menus={menuList} logoStyle='style1' />
      <main>
        <section className="banner light-orange-bg" id="carousal">
          <div className="container banner-container">
            <article className="banner-img">
              <img src="src/assets/images/Jeyakar-transparent.svg" alt="jeyakar" title="Jeyakar" />
            </article>
            <article className="banner-content">
              <VerticalCenterContainer>
                <h1>Product Designer, UX Designer — titles vary,<br />
                  but I’m simply a <span className="highlighten-text">Designer</span> focused on<br />
                  solving problems using design. </h1>
              </VerticalCenterContainer>
            </article>
          </div>
        </section>
        <section id="about" className="container about-section">
          <p>
            I am Jeyakar Vaiz with over 18 years of experience as a Product and UX Designer,
            I have dedicated my career to transforming complex challenges into intuitive,
            impactful user experiences. At the heart of my work is a profound dedication to
            user-centric design, strategic thinking, and innovative problem-solving.
          </p>
          <p> 
            I’m not just creating designs; I’m crafting experiences that resonate deeply,
            engage thoroughly, and solve real-world problems—all while seamlessly aligning
            with business objectives. Here, I share insights into the diverse roles a
            lead designer undertakes throughout the product development process. You'll
            also get a detailed look at my design methodology—how I approach, refine,
            and deliver designs that not only meet but exceed user and business expectations.
          </p>
          <p>
            Join me on this journey and discover how strategic design can create compelling
            user experiences that are not only functional but also delightful and engaging.
          </p>
        </section>
        <section id="myhats" className="light-orange-bg-section">
          <div className="light-orange-bg-title-section light-orange-bg">
            <div className="container light-orange">
              <h2>My Hats</h2>
              <p>
                Throughout the product lifecycle, from defining the product vision to delivering the
                final product, I strategically wear different hats to address the entire spectrum of
                design needs effectively. As a design lead, embracing these diverse responsibilities
                is crucial for driving successful outcomes.
              </p>
            </div>
          </div>
          <div className="light-orange-bg-tab-container">
            <div className="container">
              <div className="tab-container">
                <div className={`tab  ${activeTabId === 'tab1' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab1')}>
                  <VerticalCenterContainer>
                    <div className="tab-title-content">
                      <HatStarContent hatType={1} content='Product Strategy' stars={['yellow', 'yellow', 'yellow', 'yellow', 'white']} />
                    </div>
                  </VerticalCenterContainer>
                </div>
                <div className={`tab  ${activeTabId === 'tab2' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab2')}>
                  <VerticalCenterContainer>
                    <div className="tab-title-content">
                      <HatStarContent hatType={2} content='User Research' stars={['yellow', 'yellow', 'yellow', 'yellow', 'white']} />
                    </div>
                  </VerticalCenterContainer>
                </div>
                <div className={`tab  ${activeTabId === 'tab3' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab3')}>
                  <VerticalCenterContainer>
                    <div className="tab-title-content">
                      <HatStarContent hatType={4} content='Interaction Design' stars={['yellow', 'yellow', 'yellow', 'yellow', 'yellow']} />
                    </div>
                  </VerticalCenterContainer>
                </div>
                <div className={`tab  ${activeTabId === 'tab4' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab4')}>
                  <VerticalCenterContainer>
                    <div className="tab-title-content">
                      <HatStarContent hatType={3} content='Visual Design' stars={['yellow', 'yellow', 'yellow', 'white', 'white']} />
                    </div>
                  </VerticalCenterContainer>
                </div>
                <div className={`tab  ${activeTabId === 'tab5' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab5')}>
                  <VerticalCenterContainer>
                    <div className="tab-title-content">
                      <HatStarContent hatType={5} content='Design Lead' stars={['yellow', 'yellow', 'yellow', 'yellow', 'yellow']} />
                    </div>
                  </VerticalCenterContainer>
                </div>
              </div>
              <div className="tab-content-wrapper">
                <div className="container">
                  <div id="tab1" className={`tab-content ${activeTabId === 'tab1' ? ' active-content' : ''}`}>
                    <div className="tab-inner-content">
                      <article>
                        <h5>My Contributions as a Product Strategist</h5>
                        <ul className="tab-content-list">
                          <li>Developed a clear and compelling product strategy aligning with the company's goals and vision.</li>
                          <li>Defined the product vision and long-term objectives.</li>
                          <li>Defined the business capabilities/features of the product & prioritised features based on strategic importance and customer impact.</li>
                          <li>Developed a product roadmap that outlines the high-level features, initiatives, and milestones needed to achieve the product's objectives.</li>
                          <li>Defined and tracked key performance indicators (KPIs) to measure the product's success.</li>
                        </ul>
                      </article>
                      <article>
                        <div className="tags-wrapper light-orange-bg">
                          <h5>Skills & tools used </h5>
                          <ul className="list-no-style tags-list">
                            <li className="tags">Strategic Thinking</li>
                            <li className="tags">Stakeholder Engagement</li>
                            <li className="tags">Business Acemen</li>
                            <li className="tags">Workshop Planning & Execution</li>
                            <li className="tags">Facilitation</li>
                            <li className="tags">Problem Solving</li>
                            <li className="tags">Creative</li>
                            <li className="tags">Product in a box</li>
                            <li className="tags">Elevator Pitch</li>
                            <li className="tags">As-is Process</li>
                            <li className="tags">Market Research</li>
                            <li className="tags">KPIs</li>
                            <li className="tags">Mural</li>
                            <li className="tags">Google Suite</li>
                            <li className="tags">Microsoft office</li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div id="tab2" className={`tab-content ${activeTabId === 'tab2' ? ' active-content' : ''}`}>
                      <h2>Content for Tab 2</h2>
                      <p>This is the content for Tab 2.</p>
                  </div>
                  <div id="tab3" className={`tab-content ${activeTabId === 'tab3' ? ' active-content' : ''}`}>
                      <h2>Content for Tab 3</h2>
                      <p>This is the content for Tab 3.</p>
                  </div>
                  <div id="tab4" className={`tab-content ${activeTabId === 'tab4' ? ' active-content' : ''}`}>
                    <h2>Content for Tab 4</h2>
                    <p>This is the content for Tab 4.</p>
                  </div>
                  <div id="tab5" className={`tab-content ${activeTabId === 'tab5' ? ' active-content' : ''}`}>
                    <h2>Content for Tab 5</h2>
                    <p>This is the content for Tab 5.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio-section light-orange-bg">
          <div className="container">
            <h2>Portfolio</h2>
            <p>
              I firmly believe that design involves much more than just beautifying a product. Therefore, 
              my portfolio presents a comprehensive view of my design process, from identifying product objectives to the final delivery.
            </p>
            <div className="porfolio-content">
              <h4>Phases in my design process</h4>
              <div className="porfolio-inner-content">
                <article>
                  <ul className="list-no-style">
                    <li className="tags">
                      <span>1</span>
                      Understand & define
                    </li>
                    <li className="tags">
                      <span>2</span>
                      Research, analyse & synthesis
                    </li>
                    <li className="tags">
                      <span>3</span>
                      Ideate, design & validate
                    </li>
                    <li className="tags">
                      <span>4</span>
                      Implement & collaborate
                    </li>
                    <li className="tags">
                      <span>5</span>
                      Evaluate & iterate
                    </li>
                  </ul>
                </article>
                <article>
                  <p>For each phase, I've provided examples detailing my hands-on design approach, illustrating my activities and the impactful solutions I developed.</p>
                  <div className="porfolio-form-row">
                    <div className="portfolio-password">
                      <h4>Have the password?</h4>
                      <a href="#" target="_blank" className="button">Enter Portfolio</a>
                    </div>
                    <div className="porfolio-form">
                      <h4>Don’t have the password?</h4>
                      <form>
                        <div className="form-field">
                          <input type="email" className={`${canShowErrorMsg ? 'error-input' : ''}`} placeholder="Your email" id="email-input" onChange={({ target : { value }}) => setEmailAddressValue(value)} />
                        </div>
                        <button className="button" type="button" id="send-email" onClick={() => triggerEmail()}>Submit</button>
                      </form>
                      {
                        canShowErrorMsg ?
                          <span className="error-message" id="error-message">Enter valid email address!</span>
                        : <></>
                      }    
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="connect-section">
          <div className="container">
            <h2>Let’s connect</h2>
            <div className="connect-inner-wrapper">
              <div className="title-with-content">
                <p className="connect-title">Think we’d make a great team?</p>
                <p className="connect-link">Drop me an email at <a href="mailto:jeyakarvaiz.cua@gmail.com" target="_blank">jeyakarvaiz.cua@gmail.com</a></p>
                <p className="connect-link">Connect with me on LinkedIn at <a href="https://www.linkedin.com/in/jeyakar-vaiz-39669319/"  target="_blank">jeyakar-vaiz.</a></p>
              </div>
              <div className="title-with-content">
                <p className="connect-title">Want to sneak peek what I am upto?</p>
                <p className="connect-link">Follow me on Instagram <a href="https://www.instagram.com/jeyakarvaiz/" target="_blank">https://www.instagram.com/jeyakarvaiz/</a></p>
              </div>
              <div className="title-with-content">
                <p className="connect-title">Want to explore my culinary adventure?</p>
                <p className="connect-link">Follow me on Instagram <a href="https://www.instagram.com/love.on.plate_en/" target="_blank">https://www.instagram.com/love.on.plate_en/ </a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
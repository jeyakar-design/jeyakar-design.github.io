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
                  <div className="tab-inner-content">
                    <article>
                      <h5>My Contributions as an User Researcher</h5>
                      <ul className="tab-content-list">
                        <li>Facilitated various research methods, such as interviews, surveys, ethnographic study, usability testing and card sorting.</li>
                        <li>Analysed the research information & presented concise research reports that communicate findings and recommendations.</li>
                        <li>Created user personas, journeys, and empathy maps to guide design decisions.</li>
                        <li>Planned & conducted usability testing to evaluate the effectiveness of the interaction design and gather user feedback for improvements.</li>
                        <li>Contributed to feature prioritization based on insights derived from user research findings.</li>
                      </ul>
                    </article>
                    <article>
                      <div className="tags-wrapper light-orange-bg">
                        <h5>Skills & tools used </h5>
                        <ul className="list-no-style tags-list">
                          <li className="tags">Empathy</li>
                          <li className="tags">Observation</li>
                          <li className="tags">Planning</li>
                          <li className="tags">Interviewing Techniques</li>
                          <li className="tags">Communication</li>
                          <li className="tags">Facilitation</li>
                          <li className="tags">Consolidation</li>
                          <li className="tags">User Interviews</li>
                          <li className="tags">Ethnographic Study</li>
                          <li className="tags">Card Sorting</li>
                          <li className="tags">Usability Testing</li>
                          <li className="tags">Surveys</li>
                          <li className="tags">User journey</li>
                          <li className="tags">Accessibility Tools</li>
                          <li className="tags">Mural</li>
                          <li className="tags">Zoom</li>
                          <li className="tags">Google Suite</li>
                          <li className="tags">Microsoft office</li>
                          <li className="tags">Google Analytics</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  </div>
                  <div id="tab3" className={`tab-content ${activeTabId === 'tab3' ? ' active-content' : ''}`}>
                  <div className="tab-inner-content">
                    <article>
                      <h5>My Contributions as an Interaction Designer</h5>
                      <ul className="tab-content-list">
                        <li>Organised & structured the content in a logical & user-friendly manner to create a precise information architecture with easy navigation & findability.</li>
                        <li>Sketched prototypes rapidly for ideation, testing & validation.</li>
                        <li>Created intuitive wireframes and interactive prototypes to illustrate the product's layout, flow, and functionality.</li>
                        <li>Designed for various screen sizes and devices to ensure the product's functionality and usability across different platforms (e.g., desktop, mobile, tablet).</li>
                        <li>Incorporated user feedback and data analysis into the design process, ensuring that the product continues to evolve based on user needs and preferences.</li>
                      </ul>
                    </article>
                    <article>
                      <div className="tags-wrapper light-orange-bg">
                        <h5>Skills & tools used </h5>
                        <ul className="list-no-style tags-list">
                          <li className="tags">Empathy</li>
                          <li className="tags">User Centered Design</li>
                          <li className="tags">Rapid Prototyping</li>
                          <li className="tags">Problem Solving</li>
                          <li className="tags">User Testing</li>
                          <li className="tags">Wireframing</li>
                          <li className="tags">Responsive Design</li>
                          <li className="tags">Information Architecture</li>
                          <li className="tags">Card Sorting</li>
                          <li className="tags">Facilitation</li>
                          <li className="tags">Collaborative Sketching</li>
                          <li className="tags">Consolidation</li>
                          <li className="tags">Mural</li>
                          <li className="tags">Balsamiq</li>
                          <li className="tags">Sketch</li>
                          <li className="tags">Figma</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  </div>
                  <div id="tab4" className={`tab-content ${activeTabId === 'tab4' ? ' active-content' : ''}`}>
                  <div className="tab-inner-content">
                    <article>
                      <h5>My Contributions as a Visual Designer</h5>
                      <ul className="tab-content-list">
                        <li>Ensured the design aligned with the company's brand guidelines, including logos, color schemes, and other brand elements.</li>
                        <li>Created visually appealing and engaging designs that enhance the overall user experience and capture the user's attention.</li>
                        <li>Selected and applied suitable typefaces, font sizes, and text styling for readability and brand consistency.</li>
                        <li>Designed interactive elements, such as buttons, menus, forms, and navigation, to be intuitive and user-friendly.</li>
                        <li>Designed & collaborated with UI developers for subtle animations and micro-interactions that enhance the user experience and provide feedback for user actions (e.g., button presses, hover effects).</li>
                        <li>Stayed updated on emerging design trends and technologies to bring innovative and engaging interactions to the product.</li>
                        </ul>
                    </article>
                    <article>
                      <div className="tags-wrapper light-orange-bg">
                        <h5>Skills & tools used </h5>
                        <ul className="list-no-style tags-list">
                          <li className="tags">Visual Communication</li>
                          <li className="tags">User Centered Design</li>
                          <li className="tags">Color Theory</li>
                          <li className="tags">Typography</li>
                          <li className="tags">Layout & Composition</li>
                          <li className="tags">Branding</li>
                          <li className="tags">Graphic Design</li>
                          <li className="tags">Attention to details</li>
                          <li className="tags">Creative Thinking</li>
                          <li className="tags">Transitions</li>
                          <li className="tags">Animations</li>
                          <li className="tags">Design System</li>
                          <li className="tags">User Testing</li>
                          <li className="tags">Adobe Illustrator</li>
                          <li className="tags">Adobe Photoshop</li>
                          <li className="tags">Sketch</li>
                          <li className="tags">Figma</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                  </div>
                  <div id="tab5" className={`tab-content ${activeTabId === 'tab5' ? ' active-content' : ''}`}>
                  <div className="tab-inner-content">
                    <article>
                      <h5>My Contributions as a Design Lead</h5>
                      <ul className="tab-content-list">
                          <li>Advocated for user-centred design principles within the organisation.</li>
                          <li>Presented the design concepts and solutions to stakeholders and agreed on the design direction.</li>
                          <li>Provided design direction and leadership to a team of product designers and UI developers.</li>
                          <li>Collaborated with cross-functional teams to align product goals and requirements, including product managers, developers, etc.</li>
                          <li>Established and maintained design systems and guidelines to ensure consistency across the product or platforms.</li>
                      </ul>
                    </article>
                    <article>
                      <div className="tags-wrapper light-orange-bg">
                        <h5>Skills & tools used </h5>
                        <ul className="list-no-style tags-list">
                          <li className="tags">Leadership</li>
                          <li className="tags">Strategic Thinking</li>
                          <li className="tags">UCD Advocate</li>
                          <li className="tags">Project Management</li>
                          <li className="tags">Prioritization</li>
                          <li className="tags">Team Management</li>
                          <li className="tags">Team Collaboration</li>
                          <li className="tags">Creative Thinking</li>
                          <li className="tags">Design Delivery</li>
                          <li className="tags">Product Ownership</li>
                          <li className="tags">Design System</li>
                          <li className="tags">Jira</li>
                          <li className="tags">Trello</li>
                          <li className="tags">Mural</li>
                          <li className="tags">Sketch</li>
                          <li className="tags">Figma</li>
                        </ul>
                      </div>
                    </article>
                  </div>
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
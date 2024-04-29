import { useState } from "react";
import VerticalCenterContainer from "../../components/vertical-center-container";

import Header from "../../components/header";

import './portfolio.style.css';

const menuList = ['About', 'My hats', 'Portfolio', 'Contact'];
const Portfolio = () => {
  const [activeTabId, setActiveTabId] = useState<string>('tab1');

  const setTabActive = (tabId: string) => {
    setActiveTabId(tabId);
  }

  return (
    <>
      <Header menus={menuList} logoStyle='style1' />
      <section className="porfolio light-orange-bg-section">
        <div className="light-orange-bg-title-section light-orange-bg">
          <div className="container light-orange">
            <p>
            My design process is a collaborative and iterative journey that begins with 
            understanding and defining the problem, followed by in-depth research and 
            analysis. This foundation informs creative ideation, design, and rigorous 
            validation. Implementation is a team effort, ensuring every detail enriches 
            the user experience. The cycle completes with evaluation and iteration, 
            embodying a commitment to excellence and continuous improvement in every 
            project.
            </p>
            <p>For each phase, I've provided examples detailing how I conducted activities, showcasing my hands-on approach to design.</p>
          </div>
        </div>
        <div className="light-orange-bg-tab-container">
          <div className="container">
            <div className="tab-container">
              <div className={`tab  ${activeTabId === 'tab1' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab1')}>
                <VerticalCenterContainer>
                  <div className="tab-title-content">
                    <span className="tab-title-number">1</span>
                    <h4>Understand<br />& define</h4>
                  </div>
                </VerticalCenterContainer>
              </div>
              <div className={`tab  ${activeTabId === 'tab2' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab2')}>
                <VerticalCenterContainer>
                  <div className="tab-title-content">
                    <span className="tab-title-number">2</span>
                    <h4>Research, analyse<br />& synthesis</h4>
                  </div>
                </VerticalCenterContainer>
              </div>
              <div className={`tab  ${activeTabId === 'tab3' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab3')}>
                <VerticalCenterContainer>
                  <div className="tab-title-content">
                    <span className="tab-title-number">3</span>
                    <h4>Ideate, design<br />& validate</h4>
                  </div>
                </VerticalCenterContainer>
              </div>
              <div className={`tab  ${activeTabId === 'tab4' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab4')}>
                <VerticalCenterContainer>
                  <div className="tab-title-content">
                    <span className="tab-title-number">4</span>
                    <h4>Implement<br />& collaborate</h4>
                  </div>
                </VerticalCenterContainer>
              </div>
              <div className={`tab  ${activeTabId === 'tab5' ? ' active-tab' : ''}`} onClick={() => setTabActive('tab5')}>
                <VerticalCenterContainer>
                  <div className="tab-title-content">
                    <span className="tab-title-number">5</span>
                    <h4>Evaluate<br />& iterate</h4>
                  </div>
                </VerticalCenterContainer>
              </div>
            </div>
            <div className="tab-content-wrapper">
              <div className="container">
                <div id="tab1" className={`tab-content ${activeTabId === 'tab1' ? ' active-content' : ''}`}>
                  <div className="tab-inner-content">
                    <p>In the "Understand & Define" phase, the core objective is to comprehensively understand the project's 
                      context, including a high-level overview of the current processes and tools in use. This phase is pivotal 
                      in clearly defining the goals and objectives of the future product and establishing a focused direction for subsequent phases.</p>
                    <h4>Product in a box</h4>
                    <p>A noteworthy example was when I worked with one of the leading insurance companies in Italy, where I facilitated a "Product in a Box" session to derive the product vision statement.</p>
                    <div className="sub-section">
                      <p className="sub-section-title">Preparation</p>
                      <div className="porfolio-image-wrapper">
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                      </div>
                      <ol>
                        <li>Based on the number of participants, we decided to go with four teams. We collected four boxes and wrapped them with white sheets so that each team received a similar box, ensuring that the materials were ready to facilitate the creative process that was to follow.</li>
                        <li>I also created a deck for introducing the concept & how we will collaboratively spend the two hours.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <p className="sub-section-title">During the session</p>
                      <ol>
                        <li>I introduced the "Product in a Box" concept, explaining the objectives and how we would spend the next two hours collaboratively. I ensured everyone understood the exercise's purpose and expected outcomes.</li>
                        <li>We divided participants into four teams, each comprising a mix of personas to mirror a range of stakeholders and potential users.</li>
                        <li>I gave clear activity instructions and asked each team to engage creatively with their box, such as capturing a catchy name, tagline, and key highlights on the front side and critical features, benefits, and users involved on each side of the box.</li>
                        <li>The teams were actively and enthusiastically involved in the activity, collaborating, hearing the user challenges, brainstorming about the current limitations and needs, and being very creative in naming the product and tagline. A few teams even created a logo and competed with other teams in a fun way.</li>
                        <li>Teams then presented their boxes, adopting the role of marketers selling their products. The role-play added a dynamic and fun element to the exercise and allowed for a rich exchange of ideas and perspectives.</li>
                        <li>Following the presentations, we consolidated the input from all the teams & used the elevator pitch template to derive a unified product vision.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <p className="sub-section-title">Benefits</p>
                      <ol>
                        <li>By adopting a gamified format, we broke traditional silos and united a wide array of stakeholders and users. This strategy fostered an environment of inclusivity, blending various viewpoints, expertise, user requirements, and business goals to craft a cohesive and effective product vision.</li>
                      </ol>
                    </div>
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
    </>
  )
}

export default Portfolio;

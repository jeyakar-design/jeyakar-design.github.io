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
                    <p>In this phase, there are two primary objectives. First, we aim to clearly define the goals and objectives of the future product, establishing a focused direction for subsequent phases. Second, we seek to comprehensively understand the project's context by obtaining a high-level overview of the current processes and tools in use. Although there are numerous methods and techniques available to achieve the objectives of this phase, I will highlight two specific methods that I have personally planned and facilitated for a leading insurance company in Italy. These examples illustrate my strategic approach to navigating this crucial stage of the process.</p>
                    <h3>Product in a box</h3>
                    <p>Product in a Box is a gamified collaboration technique that effectively facilitates the derivation of the product vision.</p>
                    <div className="porfolio-image-wrapper">
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                      </div>
                    <div className="sub-section">
                      <h4>Preparation</h4>
                      
                      <ol>
                        <li>Based on the number of participants, we decided to go with four teams. We collected four boxes and wrapped them with white sheets so that each team received a similar box, ensuring that the materials were ready to facilitate the creative process that was to follow.</li>
                        <li>I also created a deck for introducing the concept & how we will collaboratively spend the two hours.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Facilitation</h4>
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
                      <h4>Benefits</h4>
                      <ol>
                        <li>By adopting a gamified format, we broke traditional silos and united a wide array of stakeholders and users. This strategy fostered an environment of inclusivity, blending various viewpoints, expertise, user requirements, and business goals to craft a cohesive and effective product vision.</li>
                      </ol>
                    </div>
                    <h3>As-is process</h3>
                    <p>In the dynamic workshop setting, we brought the stakeholders and users from various departments in a single room, united by the common goal of mapping out the as-is process of a specific scenario.</p> 
                    <p>I want to take the example of the same leading insurance company in Italy, where I facilitated the "As-is process" session to understand the current process.</p>
                    <div className="sub-section">
                      <h4>Preparation</h4>
                      <ol>
                        <li>We reviewed the provided documents for context and researched online to grasp the general insurance claim process for domain knowledge.</li>
                        <li>We collaborated with our client's product owner to define and agree on the scenario, participants, session format, and expected outcomes.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Facilitation</h4>
                      <ol>
                        <li>I introduced the session's objective: collectively understanding and documenting the as-is process using a user-centric approach. I used the large, blank wall as the canvas for this exercise.</li>
                        <li>I explained the scenario: "One of our customers had an accident while parking the car in the garage, and he decided to call the contact centre for help".</li>
                        <li>I began by asking what occurs immediately after a customer contacts the call centre agent. Specifically, what is the first question the agent poses?</li>
                        <li>As responses began to flow, I meticulously listened and distilled their answers into a single, concise point on a sticky note—a critical step in effective facilitation. I summarised with "Collect details such as the number plate and date of the accident."</li>
                        <li>Facilitating this session is essential due to the variety of responses from multiple participants. Instead of presenting a clear next step, individuals may suggest various steps, leading to potential confusion in sequencing. I employ a crucial strategy to address this: the magic phrase "What next?". This approach effectively narrows the focus, guiding everyone toward consensus on the specific step and its sequence under discussion.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Benefits</h4>
                      <p>It provided us with a clear comprehension of the process and guaranteed a consistent understanding of the current operational workflows among all stakeholders. The as-is process also revealed insights into present user challenges, highlighting critical areas for us to explore in-depth during our user research.</p>
                    </div>
                  </div>
                </div>
                <div id="tab2" className={`tab-content ${activeTabId === 'tab2' ? ' active-content' : ''}`}>
                <div className="tab-inner-content">
                  <p>In the "Research" phase of the design process, the focus is on comprehensively understanding user personas by investigating their behaviours, needs, preferences, and challenges through methods like interviews, ethnographic studies, surveys, and market analysis. This phase is critical for collecting insights that direct the design process. Following this, in the "Analyse & Synthesise" stage, the collected data is meticulously analysed to identify meaningful patterns and insights. Techniques such as affinity mapping and user journey mapping are employed to organise and interpret the data, resulting in a solid foundation of understanding that guides the ideation and development of user-centred design solutions. These phases are integral to crafting designs that genuinely resonate with users.</p>
                  <h3>Ethnographic Study</h3>
                    <p>A notable example of this approach occurred during my collaboration with a leading retail company in Italy. We undertook an ethnographic study to closely observe the behaviour of store Heads of Department (HODs) as they placed orders with Distribution Centers (DCs) and suppliers. This immersive study gave us a clear, on-the-ground understanding of their processes and challenges. The insights gained from these observations were instrumental in addressing specific user experience questions, allowing us to tailor our design solutions more effectively to meet the actual needs of the users.</p>
                    <div className="porfolio-image-wrapper">
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                      </div>
                    <div className="sub-section">
                      <h4>Preparation</h4>
                      <ol>
                        <li>We initiated our study with a concise meeting with the manager of the chosen store to determine the most suitable days for our observation. Additionally, we engaged with selected Heads of Department (HODs), providing an overview of our observation technique and inquiring about their scheduling for order placement. This preliminary interaction ensured that our study was well-informed and considerate of the participants' time and workflows.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Observation</h4>
                      <ol>
                        <li>We began shadowing and observing him when he picked up the legacy device. We engaged with him discreetly, ensuring we did not overly disrupt his work, especially considering the tight deadline for placing orders.</li>
                        <li>He approached a designated shelf displaying products and identified products with depleted or low stock levels.</li>
                        <li>Upon identifying a product requiring restocking, the HOD scanned its electronic label to add to the order list.</li>
                        <li>When uncertain about stock availability in the back room, the Head of Department (HOD) meticulously conducted an exhaustive stock verification before adding the product to the order list.</li>
                        <li>He returned to the shelf and continued scanning, ensuring all necessary products were accounted for.</li>
                        <li>Once he completed the scanning, he transferred his order list to the back office system and coordinated with other HODs to collectively place the orders from the back office system.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Few Meaningful insights & critical decisions</h4>
                      <ol>
                        <li>We must select a device that can be operated with one hand, as he uses his other hand to organise shelves during order placement. This requirement made us exclude large-screen tablets from our choices for future product devices.</li>
                        <li>Observing that the legacy system boasted a rapid response time, we recognised the necessity of developing a product that could maintain that speed. This insight steered us towards making critical technical decisions, such as choosing between HTML and native app development and including an offline mode.</li>
                        <li>He heavily depended on his memory for stock levels or frequently walked between the back office and the shelves to verify available stock or past orders. This behaviour prompted us to enhance the new product with comprehensive information, including stock status, order history, and other relevant details, accessible immediately upon scanning the product's barcode.</li>
                        <li>Despite completing his order list, we noted that the Head of Department (HOD) had to wait to place the order because he had to coordinate with other HODs since the store policy daily sends only one consolidated order to each Distribution Center (DC) and suppliers. This process of merging lists, verification, and approval consumed significant time in the back office. This insight led us to implement a system where orders can be placed directly from the new device, complete with validation and synchronisation features, thereby removing the complexities and delays associated with back-office procedures.</li>
                      </ol>
                    </div>
                </div>
                </div>
                <div id="tab3" className={`tab-content ${activeTabId === 'tab3' ? ' active-content' : ''}`}>
                <div className="tab-inner-content">
                  <p>With a clear understanding of the business objectives, user needs, challenges, and problem space, I move to ideation and design, employing techniques like brainstorming, sketching, and wireframing. I prioritise collaborative sketching and rapid prototyping to explore ideas and solutions quickly.</p>
                  <h3>Collaborative Sketching</h3>
                  <p>I'm illustrating how I led a collaborative sketching session to gather ideas that informed the creation of wireframes for a prominent Italian insurance provider.</p>
                    <div className="porfolio-image-wrapper">
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                        <div>
                          <img src="src/assets/images//portfolio.jpeg" alt="portfolio-1" title="JD" />
                        </div>
                      </div>
                    <div className="sub-section">
                      <h4>Preparation</h4>
                      <ol>
                        <li>I ensured that the scenario & the pages/screens selected for the collaborative sketching exercise were valid by the product owner or key stakeholder, confirming that the design direction aligned with their vision. To ensure alignment and transparency, I ran through the overview of the attendees, team organisation, and the session's format.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Facilitation</h4>
                      <ol>
                        <li>I introduced the "Collaborative sketching" exercise, explaining the objectives and how we would spend the next two hours collaboratively.</li>
                        <li>We divided participants into four teams, each comprising a mix of personas to mirror a range of stakeholders and potential users.</li>
                        <li>We provided the participants with paper, pencils, sketches, and highlighters, encouraging them to unleash their creativity. We also set the expectation that while the wireframes might not be perfect, they would serve as valuable tools for understanding their perspectives. This input would guide me in making informed decisions when designing the product.</li>
                        <li>The teams were energetically involved in the activity, collaborating & brainstorming about the different sections in the user interface.</li>
                        <li>Teams proceeded to showcase their wireframes and design concepts, sparking extensive discussions that greatly assisted me in visualising the product's information architecture.</li>
                      </ol>
                    </div>
                    <div className="sub-section">
                      <h4>Benefits</h4>
                      <ol>
                        <li>I gained a wealth of diverse perspectives because each team freely shared their ideas within a brief period without constraints. This approach minimised the risk of surprises when presenting my design concepts, as the final design emerged through a collaborative synthesis of their ideas.</li>
                        <li>Additionally, it fostered a positive sense among all stakeholders and users, giving them a sense of involvement in the product design process. This inclusivity significantly enhanced my credibility and trust with the stakeholders.</li>
                      </ol>
                    </div>
                </div>
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

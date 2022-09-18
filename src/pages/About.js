import React from 'react';
import elena from '../assets/cover/elena.jpeg'

function About() {
    return (
        <section className='sectionBox'>
            <h1 id='about'>About Me</h1>
            <div className='aboutMe'>
            <div><img src={elena} alt="Elena in a plaid dress"></img></div>
            <div className="textBox">
                    <p>Elena LaRee is an aspiring software developer with a commitment to detail. Her background in motherhood has helped her excel in time management, team mediation, and monitoring multiple tasks at once.
                        <br/><br/>
                    Fueled by a desire to learn, Elena understands the need for continued education. Furthering her knowledge in full stack, she strives for excellence in any project she finds.
                        <br/><br/>
                    Elena is currently furthering her education through a boot camp intended to prepare her for the work force. With an October end date, she has set a goal to join a company before Thanksgiving.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
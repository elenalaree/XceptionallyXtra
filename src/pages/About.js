import React from 'react';
import elena from '../assets/cover/Elena.webp'

function About() {
    return (
        <section className='sectionBox'>
            <h1 id='about'>About Me</h1>
            <div className='aboutMe'>
            <div className='elena'><img src={elena} alt="Elena in a plaid dress"></img></div>
            <div className="textBox">
                    <p>Elena Rogers is an software developer with a commitment to detail. Her background in motherhood has helped her excel in time management, team mediation, and monitoring multiple tasks at once.
                        <br/><br/>
                    Fueled by a desire to learn, Elena understands the need for continued education. Furthering her knowledge in full stack, she strives for excellence in any project she finds. She finds particular joy in solving problems and writing clean code.
                        <br/><br/>
                    Elena completed a Full Stack Web Development boot camp in October of 2022 and received certification. She went on furthering her education and deepening her knowledge of code by earning a Bachelor of Web Design and Development in July of 2024. She is actively job searching.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
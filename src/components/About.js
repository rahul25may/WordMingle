import React from 'react';
import './About.css';
import Back from './img/back.jpg';
import Back2 from "./img/back2.jpg";

export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="heading">
                    <h1>About WordMingle</h1>
                    <p>Welcome to WordMingle, your dedicated platform for effortless text enhancement. Developed using the power
                        of
                        React.js, our online text utility simplifies your writing tasks and enriches your textual content
                        seamlessly. Whether you're a student, professional, or anyone seeking streamlined text manipulation,
                        WordMingle stands ready to elevate your experience.
                    </p>
                </div>
                <div className="container-A">
                    <section className="about-A">
                        <div className="about-image-A">
                            <img src={Back} alt="" />
                        </div>
                        <div className="about-content-A">
                            <h2>Simplified Features:</h2>
                            <p>
                                <ul>
                                    <li>
                                        <h4>Text Transformation:</h4>
                                        <p className="inner-text">Seamlessly transition between uppercase and lowercase, ensuring
                                            your
                                            text maintains precision and consistency effortlessly.</p>
                                    </li>
                                    <li>
                                        <h4>Space Optimization:</h4> Bid farewell to cluttered formatting! WordMingle swiftly
                                        removes
                                        excess
                                        spaces, giving your text a refined and professional appearance.
                                    </li>
                                    <li>
                                        <h4>Character and Word Enumeration: </h4>Keep precise tabs on your writing progress with
                                        integrated
                                        character and word counters. No more guesswork or manual enumeration needed!
                                    </li>
                                    <li>
                                        <h4>Effortless Copy-Paste:</h4>With a single click, copy your polished text effortlessly,
                                        freeing
                                        you from the chore of manual copying and pasting.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </section>
                </div>
                <div className="middle">
                    <h2 className="middle-h">Why Choose WordMingle:</h2>
                    <p className="middle-p">At WordMingle, we firmly believe that uncomplicated text manipulation should be accessible
                        to
                        all.
                        Here's
                        why WordMingle shines:</p>
                </div>

                <div className="container-A mr-g">
                    <section className="about-A">
                        <div className="about-image-A">
                            <img src={Back2} alt="" />
                        </div>
                        <div className="about-content-A">

                            <p className="gap-up">
                                <ul>
                                    <li>
                                        <h4 className='pad-A'>User-Friendly Interface:</h4>Our elegantly simple interface ensures a seamless
                                        experience,
                                        even
                                        for those new to online utilities.
                                    </li>
                                    <li>
                                        <h4>Instantaneous Results: </h4>Save time and energy with real-time text transformations.
                                        Visualize
                                        changes as they occur, enabling you to fine-tune your content promptly.
                                    </li>
                                    <li>
                                        <h4>Versatility at Its Core:</h4>Whether composing an essay, crafting a social media post,
                                        or
                                        working on a professional document, WordMingle adapts harmoniously to your needs.
                                    </li>
                                    <li>
                                        <h4>No Installation Hassles:</h4>Say goodbye to downloads and installations. WordMingle is
                                        entirely
                                        web-based, accessible from any device with an internet connection.
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

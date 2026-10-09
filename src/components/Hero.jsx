import { motion } from "framer-motion";
import BrainScene from "./BrainScene";
import { topics, videos } from "../content";
import "../simple.css";

export default function Hero() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero-background"><BrainScene /></div>
        <div className="hero-title-wrap">
          <p className="hero-kicker">AI LEARNING &amp; DISCOVERY</p>
          <h1 className="hero-title">Welcome to <span>Desh Deepak Pal</span> Research Lab</h1>
          <p className="hero-intro">A collection of articles and videos on artificial intelligence, machine learning, and research.</p>
          <div className="hero-links"><a href="#topics">Explore topics</a><a href="#videos">Watch videos</a></div>
        </div>
      </section>

      <motion.section id="topics" className="content-section" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
        <div className="content-heading"><p className="section-label">WRITING</p><h2>Topics &amp; articles</h2><p>Choose a topic to read the latest published article on Medium.</p></div>
        <div className="topic-grid">
          {topics.map((topic, index) => (
            <a className="topic-card" key={topic.title} href={topic.url} target="_blank" rel="noreferrer" aria-label={`Read ${topic.title} on Medium`}>
              <span>0{index + 1}</span><h3>{topic.title}</h3><p>{topic.description}</p><strong>Read on Medium <b>↗</b></strong>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section id="videos" className="content-section videos-section" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
        <div className="content-heading"><p className="section-label">WATCH</p><h2>Videos</h2><p>Visit the YouTube channel for visual explainers and learning sessions.</p></div>
        <div className="video-grid">
          {videos.map((video) => (
            <a className="video-card" key={video.title} href={video.url} target="_blank" rel="noreferrer"><span className="play-icon">▶</span><div><h3>{video.title}</h3><p>{video.description}</p></div><b>↗</b></a>
          ))}
        </div>
      </motion.section>
    </>
  );
}

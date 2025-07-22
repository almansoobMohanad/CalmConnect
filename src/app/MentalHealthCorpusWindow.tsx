import React from "react";
import "./chatbot.css";

export default function MentalHealthCorpusWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="corpus-window">
      <div className="corpus-content">
        <button className="corpus-close-button" onClick={onClose}>
          Close
        </button>

        <h2 className="corpus-title">📚 Mental Health Corpus</h2>
        <p className="corpus-intro">
          Learn more about mental health topics, coping strategies, and support options through trusted resources.
        </p>

        <ul className="corpus-list">
          {/* Monash */}
          <li className="corpus-item">
            <img src="https://www.monash.edu/__data/assets/git_bridge/0006/509343/deploy/mysource_files/monash-logo-mono.svg" alt="Monash" className="corpus-img" />
            <div>
              <a href="https://www.monash.edu/health/mh" target="_blank" rel="noopener noreferrer" className="corpus-link">
                Monash Mental Health Support
              </a>
              <p className="corpus-desc">
                Official mental health support and counselling services offered by Monash University.
              </p>
            </div>
          </li>

          {/* WHO */}
          <li className="corpus-item">
            <img src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg" alt="WHO" className="corpus-img" />
            <div>
              <a href="https://www.who.int/health-topics/mental-health#tab=tab_1" target="_blank" rel="noopener noreferrer" className="corpus-link">
                WHO: Mental Health Overview
              </a>
              <p className="corpus-desc">
                Learn about mental health, common disorders, and global strategies for improving well-being.
              </p>
            </div>
          </li>

          {/* Naluri */}
          <li className="corpus-item">
            <img src="https://www.naluri.life/hs-fs/hubfs/Group%20758530920-1.png?width=150&height=42&name=Group%20758530920-1.png" alt="Headspace" className="corpus-img" />
            <div>
              <a href="https://www.naluri.life/community/articles" target="_blank" rel="noopener noreferrer" className="corpus-link">
                Headspace Australia
              </a>
              <p className="corpus-desc">
                Youth-focused mental health resources, including videos, activities, and articles on stress, anxiety, and relationships.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

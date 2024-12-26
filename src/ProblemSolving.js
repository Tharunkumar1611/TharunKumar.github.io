import React from 'react';
import './ProblemSolving.css';

const ProblemSolving = () => {
  return (
    <section className="problem-solving-section">
      <h2 className="section-title">Problem Solving Achievements</h2>
      <p className="description">
        I have a strong passion for solving Data Structures and Algorithms (DSA) problems using Python. Below is a summary of my accomplishments on various competitive programming platforms.
      </p>
      <div className="platforms">
        <div className="platform">
          <h3>CodeChef</h3>
          <ul>
            <li>Total Problems Solved: 251</li>
            <li>Easy: 160</li>
            <li>Medium: 70</li>
            <li>Hard: 20</li>
          </ul>
          <a href="https://www.codechef.com/users/tharun_1626" target="_blank" rel="noopener noreferrer" className="profile-link">
            View CodeChef Profile
          </a>
        </div>
        <div className="platform">
          <h3>LeetCode</h3>
          <ul>
            <li>Total Problems Solved: 80</li>
            <li>Easy: 44</li>
            <li>Medium: 33</li>
            <li>Hard: 3</li>
          </ul>
          <a href="https://leetcode.com/u/Tharun__Kumar18/" target="_blank" rel="noopener noreferrer" className="profile-link">
            View LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;

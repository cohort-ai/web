import React from 'react';
import './SolutionsPreview.css';
import { FaBullhorn, FaPenSquare, FaChartLine, FaCalculator } from 'react-icons/fa';

const solutions = [
  { icon: <FaBullhorn />, title: 'Smart Sales Assistant' },
  { icon: <FaPenSquare />, title: 'AI Content Creator' },
  { icon: <FaChartLine />, title: 'Supply Chain Optimizer' },
  { icon: <FaCalculator />, title: 'AI-Powered Accounting' },
];

const SolutionsPreview: React.FC = () => {
  return (
    <section className="solutions-preview">
      <div className="solutions-list">
        {solutions.map((solution, index) => (
          <div className="solution-item" key={index}>
            <div className="solution-icon">{solution.icon}</div>
            <p>{solution.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsPreview; 
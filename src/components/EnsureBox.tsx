import React from "react";

interface EnsureBoxProps {
  title: string;
  review: string;
  logo: string;
}

debugger;
export const EnsureBox: React.FC<EnsureBoxProps> = ({ title, review, logo }) => {
  return (
    <div className="app-ensure-process__box">
      <div className="app-ensure-process__box-logo">
        <img src={logo} alt="Icons Commit" />
        <div className="dec"></div>
      </div>
      <div className="app-ensure-process__box-review">
        <h4>{title}</h4>
        <p>{review}</p>
      </div>
    </div>
  );
};

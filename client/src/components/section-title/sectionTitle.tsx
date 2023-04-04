import React from "react";
import "../../styles/components/sectionTitle.scss";
type TProp = {
  data: {
    subtitle: String;
    title: String;
    description: String;
  };
};

const SectionTitle = (prop: TProp) => {
  return (
    <div className="section-title">
      <div className="section-title__subtitle">{prop.data.subtitle}</div>
      <div className="section-title__title">{prop.data.title}</div>
      <div className="section-title__description">{prop.data.description}</div>
    </div>
  );
};

export default SectionTitle;

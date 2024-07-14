import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiAngularSimple,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiSpringboot,
  SiElasticsearch,
  SiAmazonaws,
  SiKubernetes,
  SiTerraform,
  SiPostman,
  SiJest,
  SiCypress,
  SiSelenium,
  SiJunit5,
  SiGraphql,
  SiAuth0,
  SiJira,
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";

const TechIcon = ({ icon: Icon }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon />
  </Col>
);

const TechSection = ({ title, icons }) => (
  <Row className="tech-section">
    <Col xs={12}>
      <h2 className="section-heading">{title}</h2>
    </Col>
    {icons.map((Icon, index) => (
      <TechIcon key={index} icon={Icon} />
    ))}
  </Row>
);

function Techstack() {
  const categories = [
    {
      title: "Languages",
      icons: [DiJavascript1, SiTypescript, DiPython, DiJava, CgCPlusPlus],
    },
    {
      title: "Front-End",
      icons: [DiReact, SiNextdotjs, SiVuedotjs, DiAngularSimple, DiHtml5, DiCss3, SiTailwindcss],
    },
    {
      title: "Back-End",
      icons: [DiNodejs, SiExpress, SiNestjs, SiDjango, SiSpringboot],
    },
    {
      title: "Databases",
      icons: [SiPostgresql, DiMongodb, SiRedis, SiElasticsearch],
    },
    {
      title: "DevOps & Cloud",
      icons: [SiAmazonaws, DiDocker, SiKubernetes, SiTerraform],
    },
    {
      title: "Testing & QA",
      icons: [SiPostman, SiJest, SiCypress, SiSelenium, SiJunit5],
    },
    {
      title: "Other Technologies",
      icons: [SiGraphql, TbPlugConnected, SiAuth0, DiGit, SiJira],
    },
  ];

  return (
    <div className="techstack-container">
      {categories.map((category, index) => (
        <TechSection key={index} title={category.title} icons={category.icons} />
      ))}
    </div>
  );
}

export default Techstack;
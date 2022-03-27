import React from 'react';
import Icon1 from '../../images/svg-react.svg';
import Icon2 from '../../images/svg-react.svg';
import Icon3 from '../../images/svg-react.svg';
import { ProjectsContainer, ProjectsWrapper, ProjectCard, ProjectIcon, ProjectsH1, ProjectsH2, ProjectsP } from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1}/>
          <ProjectsH2>This Website</ProjectsH2>
          <ProjectsP>This website is built with React!</ProjectsP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon2}/>
          <ProjectsH2>TicTacToe Game</ProjectsH2>
          <ProjectsP>Simple TicTacToe game built with React.</ProjectsP>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon src={Icon3}/>
          <ProjectsH2>To-Do List</ProjectsH2>
          <ProjectsP>Simple to-do list built with React.</ProjectsP>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

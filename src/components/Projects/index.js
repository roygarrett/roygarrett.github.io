import React from 'react';
import Icon1 from '../../images/svg-react.svg';
import { ProjectsContainer, ProjectsWrapper, ProjectCard, ProjectIcon, ProjectsH1, ProjectsH2, ProjectsP } from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectCard>
          <ProjectIcon src={Icon1}/>
          <ProjectsH2>./Roy-Garrett</ProjectsH2>
          <ProjectsP>This website is built with React!</ProjectsP>
        </ProjectCard>
        <ProjectCard href='https://reacttictactoee.herokuapp.com' target='_blank'>
          <ProjectIcon src={Icon1}/>
          <ProjectsH2>TicTacToe Game</ProjectsH2>
          <ProjectsP>Simple TicTacToe game built with React.</ProjectsP>
        </ProjectCard>
        <ProjectCard href='https://reacttodolistt.herokuapp.com' target='_blank'>
          <ProjectIcon src={Icon1}/>
          <ProjectsH2>To-Do List</ProjectsH2>
          <ProjectsP>Simple to-do list built with React.</ProjectsP>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

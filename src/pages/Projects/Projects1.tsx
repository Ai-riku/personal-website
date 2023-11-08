import React from 'react'

import { createStyles, Title, Container} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../../components/index';
import { Routes, Route } from 'react-router-dom';
import { Projects2 } from '..';

// var links = [
//     {
//       "link": "../Projects/1", 
//       "label": "1", 
//       "image": 'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png'
//     },
//     { 
//       "link": "../Projects/2", 
//       "label": "2", 
//       "image": "https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png"
//     }
// ]

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    height: '100vh',
  },
  
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
  },

  imgContainer: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[7],
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    padding: '20px',
  },
  
  title: {
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  }
  }));

export const Projects = () => {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.wrapper}>
      <>
        {/* <PreviewCarousel links={links}/> */}
        <Container className={classes.container} >
          <Title className={classes.title} align="left">Personal Website</Title>
        </Container>
        <div className={classes.imgContainer}>
          <Container>
            <ImageCarousel />
          </Container>
        </div>
        <Container className={classes.container} >
          <ProjectDescription />
        </Container>
      </>
    </div>
  );
};
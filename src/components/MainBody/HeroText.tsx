import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Hi , I'm{' '}
          <Text component="span" className={classes.highlight} inherit>
            Sushant Jaiswal
          </Text>{' '}
          a freelance Programmer .
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          Transforming ideas into code. As a freelance programmer, I bring your vision to life with precision and innovation. Let's create something extraordinary together.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray" onClick={()=>{window.location.href="/about"}}>
            About Me
          </Button>
          <Button className={classes.control} size="lg" onClick={()=>{document.getElementById("contactMe")?.scrollIntoView({behavior : 'smooth'})}}>
            Contact Me
          </Button>
        </div>
      </div>
    </Container>
  );
}
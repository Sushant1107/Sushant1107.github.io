import {
  Container,
  Paper,
  Space,
  Divider,
  Grid,
} from "@mantine/core";

import classes from "./Pages.module.css";
import AboutHeader from "../components/AboutComponent/AboutHeader";
import EducationAndSkills from "../components/AboutComponent/EducationAndSkills";
import WorkAndExperience from "../components/AboutComponent/WorkAndExperience";

const AboutMe = () => {
  return (
    <div>
      <Space h="lg" />
      <Container size="md">
        <Paper withBorder p="xl">
          <AboutHeader/>
          <Space h="md" />
          <Divider size="md" />
          <Space h="md" />
          <Grid>
            <Grid.Col span={4.5} className={classes.thin}>
              <EducationAndSkills/>
            </Grid.Col>
            <Grid.Col span={7.5}>
              <WorkAndExperience/>
            </Grid.Col>
          </Grid>
        </Paper>
      </Container>
      <Space h="lg" />
    </div>
  );
};

export default AboutMe;

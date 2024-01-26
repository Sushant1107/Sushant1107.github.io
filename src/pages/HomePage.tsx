import {  Divider , Container , Space , Title , Center , Affix , Button, Transition, rem  } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { HeroText } from "../components/MainBody/HeroText"
import { ProjectListGrid } from '../components/ProjectsList/ProjectList';
import { UserInfoAction } from '../components/UserInfo';

const HomePage = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
        <HeroText/>
        <Divider my="xs" label="</>" labelPosition="center" />
        <Container size={'xs'}>
          <Center><Title order={1}>My Projects</Title></Center>
          <Divider my="xs"/>
        </Container>
        <ProjectListGrid/>
        <Divider id='contactMe' my="xs" label="</>" labelPosition="center" />
        <Container size="xs">
          <UserInfoAction/>
        </Container>
        <Space h="lg"/>
        <Divider my="xs" label="</>" labelPosition="center" />
        <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  )
}

export default HomePage
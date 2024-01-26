import cx from "clsx";
import {
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandItch,
  IconBrandLinkedin,
  IconSunHigh,
  IconMoonStars
} from "@tabler/icons-react";

import classes from "./HeaderSimple.module.css";
import logo from '../../assets/logo.svg'
export function HeaderSimple() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <ActionIcon
      variant="gradient"
      size="lg"
      aria-label="Gradient action icon"
      gradient={{ from: 'violet', to: 'blue', deg: 67 }}
      onClick={()=>{window.location.href="/"}}
    >
      <Image
      radius="md"
      h={24}
      w={24}
      fit="contain"
      src={logo}
    />
    </ActionIcon>
        <Group gap={10}>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href="https://github.com/freakBros" target="_blank" className={classes.simple}>
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href="https://www.linkedin.com/in/sushant-jaiswal-102069243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className={classes.simple}>
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href="https://freak-bros.itch.io/" target="_blank" className={classes.simple}>
            <IconBrandItch
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
            </a>
          </ActionIcon>
        </Group>
        <Group justify="center">
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            <IconSunHigh color="yellow" className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoonStars color="blue" className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
        </Group>
        </Group>
      </Container>
    </header>
  );
}

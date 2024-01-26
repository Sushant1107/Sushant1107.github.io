import { Avatar, Text, Button, Paper , Container , Modal , TextInput, Textarea, Group, SimpleGrid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import avatarImg from '../assets/avatar.png'
import classes from './UserInfo.module.css';

export function UserInfoAction() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src={avatarImg}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        Sushant Jaiswal
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        sushantkjaiswal5@gmail.com | +91-6203519598
      </Text>
      <Container>
        <Button variant="default" fullWidth mt="md" onClick={open}>
            Send message
        </Button>
      </Container>
        <Modal opened={opened} onClose={close} title="Get in touch ." centered>
        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" required/>
              <TextInput label="Your email" placeholder="hello@mail.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
        </Modal>
    </Paper>
  );
}
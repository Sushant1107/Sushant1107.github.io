import { Image, Card, Text, Group, Button , AspectRatio} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './CarouselCard.module.css';

interface cardInfo {
    id : string,
    title : string , 
    image : string[] , 
    date : string , 
    description : string
}

export function CarouselCard(data : cardInfo) {
  const slides = data.image.map((image) => (
    <Carousel.Slide key={image}>
        <AspectRatio ratio={1920 / 1080}>
            <Image src={image} />
        </AspectRatio>
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" key={data.id}>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} size='xl' className={classes.title}>
        {data.title}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
        ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
      </Text>

      <Group justify="right" mt="md">
        <Button radius="md">More Info</Button>
      </Group>
    </Card>
  );
}
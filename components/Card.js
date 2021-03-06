import {
  Box,
  Button,
  Text,
  Heading,
  Link,
  Center,
  Stack,
  Badge,
  Avatar,
  Image,
} from "@chakra-ui/react";

const Social = (link, alt, src) => {
  return (
    <Link href={link}>
        <Image src={src} alt={alt} borderRadius="full" />
      </Link>
  )
}

const Card = ({name, avatar, git, twitter}) => {
  return (
    <Box
      maxW={"320px"}
      w={"full"}
      rounded={"lg"}
      pr={15}
      pl={15}
      textAlign={"center"}
      alignItems="center"
      justifyContent="center"
    >
      <Avatar size={"xl"} src={avatar} alt={"Avatar Alt"} />
      <Text fontWeight={600} color={"gray.500"} mb={1}>
        {name}
      </Text>
      <Stack align={"center"} justify={"center"} direction={"row"}>
        <Link href={git}>
            <Image src="/github.svg" alt="github" borderRadius="full" />
        </Link>
        <Link href="#">
          <Image src="/twitter.svg" alt="twitter" borderRadius="full" />
        </Link>
        <Link href="#">
          <Image src="/linkedin.svg" alt="linkedin" borderRadius="full" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Card;

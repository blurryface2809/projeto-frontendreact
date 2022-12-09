import {
  Card,
  Image,
  CardBody,
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export function CardBox(props) {
  

  const addToCart = (product) => {
    const novoCart = [...props.cart];

    const findArray = novoCart.find((item) => {
      return item.id === product.id;
    });

    if (!findArray) {
      novoCart.push(product);
    } else {
      findArray.quantity = findArray.quantity + 1;
    }
    props.setCart(novoCart);
    console.log(props.cart);

    // localStorage.setItem("itensCart", JSON.stringify(props.cart))
  
  };

  return (
    <ChakraProvider>
      <Card
        maxW="xs"
        bg="white"
        _hover={{
          transform: "perspective(1000px) translateZ(30px)",
          transition: "all .3s ease",
        }}
      >
        <CardBody>
          <Image
            src={props.product.image}
            alt={props.product.alt}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.product.name}</Heading>
            <Text>{props.product.text}</Text>

            <Flex justifyContent="space-between" spacing="2">
              <Text color="orange.300" fontSize="2xl">
                {priceFormatter.format(props.product.price)}
              </Text>
              <Button
                onClick={() => addToCart(props.product)}
                variant="solid"
                colorScheme="pink"
              >
                Comprar
              </Button>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </ChakraProvider>
  );
}

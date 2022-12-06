import styled from "styled-components"
import { Card, Image, CardBody, Flex ,Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";

export function CardBox (props) {
    console.log(props)
    return (
        <ChakraProvider>
        <Card maxW='xs' bg="white">
        <CardBody>
          <Image
            src={props.product.image}
            alt={props.product.alt}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{props.product.name}</Heading>
            <Text>
             {props.product.text}
            </Text>
            
            <Flex justifyContent="space-between" spacing='2'>
            <Text color='blue.600' fontSize='2xl'>
              {props.product.price}
            </Text>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
          </Flex>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
      </ChakraProvider>
    )
}
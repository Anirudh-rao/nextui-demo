import {
    Grid,
    Card,
    Text,
    Row,
    Image,
    Button,
  } from "@nextui-org/react";

export default function ProductList({product}) {
  return (
    <Grid xs={4}>
      <Card color="black">
        <Card.Body>
          <Row justify="center" align="center">
            <Image
              objectFit="cover"
              src={product.image}
            ></Image>
          </Row>
          <Row justify="center" align="center">
            <Text h4 size={20} css={{ m: 0 }}>
              {product.name}
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Text h4 size={15} b css={{ m: 0 }}>
             $ {product.price}
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Button css={{ mt: 10 }}>Add to Cart</Button>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  );
}
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { IconButton } from "./Icons/IconButton";
import { EyeIcon } from "./Icons/EyeIcon";
import { EditIcon } from "./Icons/EditIcon";
import { DeleteIcon } from "./Icons/DeleteIcon";
import { products } from "./data";

export default function Cart() {
  const columns = [
    { name: "", uid: "img" },
    { name: "PRODUCT NAME", uid: "name" },
    { name: "CATEGORY", uid: "category" },
    { name: "PRICE", uid: "price" },
    { name: "STATUS", uid: "status" },
    { name: "QUANTITY", uid: "quantity" },
    { name: "", uid: "actions" },
  ];

  const renderCell = (products, columnKey) => {
    const cellValue = products[columnKey];
    switch (columnKey) {
      case "img":
        return (
          <User squared src={products.image} name={cellValue} css={{ p: 0 }} />
        );
      case "name":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );
      case "category":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      case "price":
        return (
          <Text b size={13} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      case "status":
        return (
          <Text b size={14} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );

      case "quantity":
        return (
          <Text b size={14} css={{ tt: "capitalize" }}>
            {cellValue}
          </Text>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton
                  onClick={() => console.log("View product", products.id)}
                >
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit product">
                <IconButton
                  onClick={() => console.log("Edit product", products.id)}
                >
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete product"
                color="error"
                onClick={() => console.log("Delete product", products.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      bordered
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={products}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
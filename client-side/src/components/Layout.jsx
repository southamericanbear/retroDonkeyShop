import { Header } from "./Header";
import { Container } from "@material-ui/core";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Container style={{ marginTop: "100px" }}>{children}</Container>
    </>
  );
};

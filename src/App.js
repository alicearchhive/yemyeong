import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Icon,
  Image,
  Grid,
  Divider,
  Header,
  List,
  Container,
  Reveal,
} from "semantic-ui-react";

import o from "./o.jpg";


function App() {
  return (
    <Container>
      <br />
      <div>
        <h1 style={{ color : "black", textAlign : "center", fontFamily : "Montserrat" }}> Kinda Orange </h1>

        <Container left>
          <Header as="h3"> </Header>
          <p>
            <List style={{ color : "black", fontFamily : "Montserrat" }}>
              <List.Item>
                <List.Icon name="student" />
                <List.Content>Hongik University</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>Seoul, Korea</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="tldhselwkdls@gmail.com">tldhselwkdls@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                </List.Content>
              </List.Item>
            </List>
          </p>
        </Container>

        <br />

        <Image src={o} centered />
        <br />
        <Reveal animated="move">
          <Reveal.Content visible>
            <Image
              src="https://m.media-amazon.com/images/M/MV5BOWU1ZjE3ZTQtZTQ5ZS00ZWFkLWFhNjEtODFhZDczOTRjYzNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
              href="http://google.com"
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              src="https://m.media-amazon.com/images/M/MV5BY2YwZmFlZjktYWYyYy00NDJhLWJkNzItMDczNDRlY2VjMjZiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
              onClick={() => window.open("http://google.com")}
            />
          </Reveal.Content>
        </Reveal>

        <br />

        <Container style={{fontFamily : "Montserrat"}}>
        <Grid>
    <Grid.Row>
    <Grid.Column width={4}>
    <p>  </p>
      </Grid.Column>
      <Grid.Column width={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>

        <Divider horizontal>
          <Header as="h4" style={{fontFamily : "Montserrat"}}>contact me</Header>
        </Divider>

        <Container centered>
          <Grid centered>
            <div>
              <br />
              <Button
                circular
                color="facebook"
                icon="facebook"
                onClick={() =>
                  window.open("https://blog.naver.com/tldhselwkdls")
                }
              />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="linkedin" icon="linkedin" />
              <Button circular color="google plus" icon="google plus" />
            </div>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}

export default App;

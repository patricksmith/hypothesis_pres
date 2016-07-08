// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff3348"
});
// "#ff4081"

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps  textColor="black">
              Hypothesis
            </Heading>
            <Heading size={1} fit caps>
              Property Based Testing
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Writing smarter tests with less code
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3}>Example based testing</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/test1.example")}
              margin="20px auto"
            />
            <CodePane
              lang="bash"
              source={require("raw!../assets/test1.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3}>More examples</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/test2.example")}
              margin="20px auto"
            />
            <CodePane
              lang="bash"
              source={require("raw!../assets/test2.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3}>Still more examples</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/test3.example")}
              margin="20px auto"
            />
            <CodePane
              lang="bash"
              source={require("raw!../assets/test3.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4}>A step in the right direction</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/paramaterized_test.example")}
              margin="20px auto"
            />
            <CodePane
              lang="bash"
              source={require("raw!../assets/paramaterized_test.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4}>Getting more confident...</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/paramaterized_test_more.example")}
              margin="20px auto"
            />
            <CodePane
              lang="bash"
              source={require("raw!../assets/parameterized_test_more.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary">What's in the box?!</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/awesome_add.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary">Enter <code>hypothesis</code></Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/hypothesis.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="bash"
              source={require("raw!../assets/hypothesis.output.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="bash"
              source={require("raw!../assets/hypothesis_print.output.example")}
              margin="20px auto"
              style={{overflow: "scroll", height: "500px"}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4} textColor="tertiary">Another Example</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/sort.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} textColor="tertiary">Easier failures</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/sort_fail.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} textColor="tertiary">More Strategies</Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>booleans</ListItem>
                  <ListItem>floats</ListItem>
                  <ListItem>fractions</ListItem>
                  <ListItem>text</ListItem>
                  <ListItem>tuples</ListItem>
                  <ListItem>sets</ListItem>
                </List>
              </Fill>
              <Fill>
                <List>
                  <ListItem>dictionaries</ListItem>
                  <ListItem>permutations</ListItem>
                  <ListItem>none</ListItem>
                  <ListItem>sampled_from</ListItem>
                  <ListItem>just</ListItem>
                  <ListItem>one_of</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide", "spin"]} align="center center" bgColor="primary">
            <Heading caps size={1} textColor="tertiary">
              Thanks!
            </Heading>
            <Heading size={6} caps>Further Learning</Heading>
            <List style={{ listStylePosition: 'outside' }}>
              <ListItem style={{ fontSize: '2rem' }}>Better Testing With Less Code
                <List>
                  <ListItem style={{ fontSize: '2rem' }}>Matt Bachmann</ListItem>
                  <ListItem style={{ fontSize: '2rem' }}>https://us.pycon.org/2016/schedule/presentation/1927/</ListItem>
                </List>
              </ListItem>
              <ListItem style={{ fontSize: '2rem' }}>
                Hypothesis
                <List>
                  <ListItem style={{ fontSize: '2rem' }}>http://hypothesis.works/</ListItem>
                </List>
              </ListItem>
              <ListItem style={{ fontSize: '2rem' }}>
                Spectacle
                <List>
                  <ListItem style={{ fontSize: '2rem' }}>Write presentations in React!</ListItem>
                  <ListItem style={{ fontSize: '2rem' }}>https://github.com/FormidableLabs/spectacle</ListItem>
                  <ListItem style={{ fontSize: '2rem' }}>https://github.com/FormidableLabs/spectacle-boilerplate</ListItem>
                </List>
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

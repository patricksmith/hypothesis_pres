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
            <Heading size={2} textColor="white">What's in the box?!</Heading>
            <CodePane
              lang="python"
              source={require("raw!../assets/awesome_add.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} textColor="white">Enter <code>hypothesis</code></Heading>
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
          {/* Remove below here */}
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

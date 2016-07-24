/**
 * Created by ge on 7/21/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import CodeMirrorExample from "../CodeMirror.example";
import CodeMirrorSource from "!!raw!../CodeMirror.example";
import CodeMirrorAST from "!!react-docgen!../CodeMirror";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>
      {`
      # React-CodeMirror demo

      ## About this

      This is not a fork of react-codemirror. This is a different react
      wrapper of codemirror that handles change events and cursors synchronously
      to make it easy to do real-time collaboration in a redux architecture.
      
      ## Usage
      `}
      <Highlight>{`npm install @episodeyang/react-codemirror`}</Highlight>
      {`
      ### How is this README written:
      This readme is written with react and markdown. It includes:
      1. a **live react-codemirror component demo**
      2. a table of the component's props that is generated automatically
      3. **source** of the example component

      ## Example Component: \`CodeMirror\`
      This component provides both the selection and the serialized document json object
      \`onChange\`.

      ### Why is this important?
      With an input element like this rich text editor, the cursor position ("selection") is part of the component
      state. Typically when we think of updating the value of such a component we only think of updating
      the content. However if we do that, the cursor position will be lost each time when such update happens,
      and the user will notice that the cursor jumps to the beginning of the input box on every keystroke.

      With redux's synchronous loop, it is necessary for the component to handle document value change and
      selection changes together.

      This react component does that.
      `}
      ### Props
      {`This table below is generated automatically`}
      <div className="table-container horizontal-scroll flex-column center">
        <PropsTable propMetaData={CodeMirrorAST.props}/>
      </div>{`
      ### Demo

      Below is a live demo. You can open the Chrome React developer tool to look at the updated props.
      `}
      <CodeMirrorExample/>
      {`
      ### Known Issues

      There are a few known issues that I am working on. However feel free to file whatever problem you ran into
      on github! You can get there by clicking the issue tracker on the top right of this page.

      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{CodeMirrorSource}</Highlight>
      {`
      ## Develop

      1. first run \`npm install\`
      2. now install codemirror. Because it is a peer dependency, you need to
         install it separately.

        ~~~shell
        npm install codemirror
        ~~~
      3. Now make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
      4. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      5. Then remember to push to master.
      `}
    </Markdown>
  )
}

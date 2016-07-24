# React-CodeMirror demo
## About this

This is not a fork of react-codemirror. This is a different react
wrapper of codemirror that handles change events and cursors synchronously
to make it easy to do real-time collaboration in a redux architecture.

## Usage
```
npm install @episodeyang/react-codemirror
```

### How is this README written:

This readme is written with react and markdown. It includes:

1. a **live react-codemirror component demo**
2. a table of the component's props that is generated automatically
3. **source** of the example component

## Example Component: `CodeMirror`
This component provides both the selection and the serialized document json object
`onChange`.

### Why is this important?
With an input element like this rich text editor, the cursor position ("selection") is part of the component
state. Typically when we think of updating the value of such a component we only think of updating
the content. However if we do that, the cursor position will be lost each time such update happens,
and the user will notice that the cursor jumps to the beginning of the input box on every keystroke.

With redux's synchronous loop, it is necessary for the component to handle document value change and
selection changes together.

This react component does that.

### Live Demo

please see this live demo here:
http://www.episodeyang.com/react-codemirror

[![react-codemirror demo](react-codemirror-demo.gif)](http://www.episodeyang.com/react-codemirror)

## Develop

1. first run `npm install`
2. now install codemirror. Because it is a peer dependency, you need to
   install it separately.

   ```shell
   npm install codemirror
   ```
3. Now make your changes, then git commit. Use `serve-docs` to view live updated at [http://localhost:5000](http://localhost:5000)
4. run `build-docs`, `build-static-docs`, `gh-pages`
5. Then remember to push to master.

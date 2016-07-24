/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from "react";
import Highlight from '@episodeyang/react-highlight.js';
import autobind from 'autobind-decorator';
import CodeMirror from "./CodeMirror";

var {number, string} = PropTypes;
const style = {
  border: '8px solid pink',
  minHeight: '200px'
};
@autobind
export default class CodeMirrorExample extends Component {
  componentWillMount() {
    this.setState({doc: undefined, selection: undefined});
  }

  onChange(doc, selection) {
    console.log('onChange: ', doc, selection);
    this.setState({doc, selection})
  }

  render() {
    const {doc, selection} = this.state;
    var prettifiedDoc = undefined;
    try {
      prettifiedDoc = JSON.stringify(doc, null, 4).split('\n')
        .map(string=>("    " + string)).join('\n').slice(4);
    } catch (e) {
      console.log(e);
    }
    return (
      <div>
        <CodeMirror style={style} onChange={this.onChange} doc={doc} selection={selection}/>
        <Highlight>
{`state = {
    selection: ${JSON.stringify(selection)},
    doc: ${prettifiedDoc}
}`}
        </Highlight>
      </div>
    );
  }
}

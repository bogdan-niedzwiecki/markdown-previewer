import React, { Component } from 'react';
import marked from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

class Output extends Component {

  render() {
    let rootClass = classNames(this.props.className, {
      'card--fullscreen': !this.props.isFullscreen.input && this.props.isFullscreen.output,
      'card--hidden': this.props.isFullscreen.input && !this.props.isFullscreen.output
    });
    return <div className={rootClass}>
      <header className="card__header"><FontAwesomeIcon icon={faHtml5} size="2x" /></header>
      <div className="card__content" dangerouslySetInnerHTML={{ __html: marked(this.props.input) }} />
      <footer className="card__footer">
        <button className="card__button" onClick={this.props.handleOutputClick}>
          {this.props.isFullscreen.output ? <FontAwesomeIcon icon={faColumns} size="2x" /> : <FontAwesomeIcon icon={faArrowsAlt} size="2x" />}
        </button>
      </footer>
    </div>
  }
}

export default Output

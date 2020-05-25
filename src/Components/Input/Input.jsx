import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

class Input extends Component {


  render() {
    let rootClass = classNames(this.props.className, {
      'card--fullscreen': this.props.isFullscreen.input && !this.props.isFullscreen.output,
      'card--hidden': !this.props.isFullscreen.input && this.props.isFullscreen.output
    });

    return <div className={rootClass}>
      <header className="card__header"><FontAwesomeIcon icon={faMarkdown} size="2x" /></header>
      <textarea className="card__content" cols="100" rows="30" value={this.props.value} onChange={this.props.handleChange}></textarea>
      <footer className="card__footer">
        <button className="card__button" onClick={this.props.handleInputClick}>
          {this.props.isFullscreen.input ? <FontAwesomeIcon icon={faColumns} size="2x" /> : <FontAwesomeIcon icon={faArrowsAlt} size="2x" />}
        </button>
      </footer>
    </div>
  }
}

export default Input

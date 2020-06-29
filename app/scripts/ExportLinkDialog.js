import React from 'react';
import PropTypes from 'prop-types';

import Dialog from './Dialog';

import '../styles/ExportLinkDialog.module.scss';

class ExportLinkDialog extends React.Component {
  render() {
    return (
      <Dialog
        okayOnly={true}
        okayTitle="Done"
        onOkay={this.props.onDone}
        title="Image Exported to Galaxy"
      ></Dialog>
    );
  }
}

ExportLinkDialog.defaultProps = {
  onDone: () => {},
  url: ''
};

ExportLinkDialog.propTypes = {
  onDone: PropTypes.func,
  url: PropTypes.string
};

export default ExportLinkDialog;

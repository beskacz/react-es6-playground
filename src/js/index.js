import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import config from './config';
import CommentBox from 'components/CommentBox.js';

ReactDOM.render(
  <CommentBox url={config.backendServerUrl + 'api/comments'} pollInterval={2000} />,
  document.getElementById('content')
);

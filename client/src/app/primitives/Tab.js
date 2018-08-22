import React from 'react';

import classNames from 'classnames';

import {
  tab
} from './Tabbed.less';


export default function Tab(props) {

  return (
    <div className={ classNames(tab, props.className) }>
      { props.children }
    </div>
  );
}
/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {createUseStyles} from 'react-jss';

const sidebarClass = {
  position: 'fixed !important',
  overflowX: 'hidden !important',
  overflowY: 'auto !important',
  boxSizing: 'border-box !important',
};

// User overridable styles
const defaultSidebarStyles = {
  color: '#000000',
  backgroundColor: '#efefef',
  height: '100vh',
  top: 0,
  maxHeight: '100vh',
  maxWidth: '80vw',
  minWidth: '45px',
  outline: 'none',
  zIndex: 2147483647,
};

const left = {
  left: 0,
};

const right = {
  right: 0,
};

const backdropClass = {
  position: 'fixed !important',
  top: '0 !important',
  left: '0 !important',
  width: '100vw !important',
  height: '100vh !important',
  /* Prevent someone from making this a full-sceen image */
  backgroundImage: 'none !important',
  zIndex: 2147483646,
};

// User overridable styles
const defaultBackdropStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const JSS = {
  sidebarClass,
  defaultSidebarStyles,
  backdropClass,
  defaultBackdropStyles,
  left,
  right,
};

// useStyles gets replaced for AMP builds via `babel-plugin-transform-jss`.
// eslint-disable-next-line local/no-export-side-effect
export const useStyles = createUseStyles(JSS);

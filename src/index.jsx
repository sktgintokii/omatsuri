import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './App';
import './styles/global';

OfflinePluginRuntime.install();

render(<App />, document.getElementById('app'));
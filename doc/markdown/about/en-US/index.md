<h1>
Ninecat-ui
</h1>
<svg t="1585388193803" class="icon" viewBox="0 0 1325 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2694" width="128" height="128"><path d="M553.714266 853.732863c-45.796784-70.886962-91.420532-141.889281-137.563388-212.545528-5.24875-7.959643-0.8075-12.227857 2.710893-17.591964Q526.836053 461.518591 635.041049 299.268776c48.79607-73.021069 96.438568-146.849638 146.907316-218.601778C820.016221 26.5645 874.695505 0.090036 941.083538 0.090036h371.796058c3.345357 0 6.690714 0.288393 10.036071 0.461429-3.114643 11.535714-11.881785 19.610714-19.379999 27.628035-40.374999 43.54732-79.884819 88.248211-119.683031 132.660709Q1113.196389 239.398421 1042.482463 318.187346C1012.431928 351.92931 981.919965 385.036808 951.696395 418.605736Q893.556397 483.321091 835.35872 548.036445c-29.41607 32.876785-59.178212 65.522855-88.709639 98.053568q-46.142856 51.391605-92.285711 102.84089c-28.839285 32.184642-58.082319 63.965533-86.517854 96.265532-3.63375 4.0375-7.094464 9.459285-14.073571 8.363392" fill="#FE9100" p-id="2695"></path><path d="M553.714266 853.732863c25.263213-23.071428 45.739106-50.238034 69.214283-74.98214 22.552321-23.417499 43.316606-48.565355 65.003748-72.848033q60.735534-68.003033 121.644103-135.833031c28.493213-31.723213 57.332498-63.100355 85.825711-94.76589q62.465891-69.214283 124.758746-138.947673c28.493213-31.665535 57.332498-63.042676 85.825711-94.76589q61.023926-67.829998 121.701781-135.833031c20.533571-23.071428 41.355534-45.277677 61.946784-68.003033 11.535714-12.400892 22.263928-24.974821 33.395892-37.49107 5.133393 6.286964-1.730357 9.69-4.0375 13.208392q-94.189104 147.080352-189.012672 293.699276Q904.573004 657.625727 679.395869 1007.157858c-2.307143 3.63375-4.787321 7.209821-7.036786 10.901249-4.383571 7.382857-8.8825 8.248035-13.785178 0.461429L553.714266 853.732863" fill="#FEC300" p-id="2696"></path><path d="M4.498928 9.491643C-5.767857-1.582642 4.0375 0.090036 10.4975 0.090036H373.468737a152.271423 152.271423 0 0 1 142.985173 206.258564c-21.398749 57.678569-45.16232 114.953389-67.829997 172.401244-7.498214 0-12.170178-5.191071-17.303571-9.459285q-95.919461-80.749997-191.954279-160.923209Q130.468924 116.658425 21.168035 25.237892C15.342499 20.277536 10.728214 14.04825 4.498928 9.491643" fill="#00AEED" p-id="2697"></path><path d="M4.498928 9.491643c18.860892 8.940178 32.64607 24.513392 48.219284 37.548749q198.183564 165.537494 395.905701 331.709452l-78.442855 199.510172-43.085891-66.849462L10.958928 20.623607c-2.307143-3.576071-4.325893-7.440535-6.46-11.131964" fill="#41CB31" p-id="2698"></path></svg>
    <h1>
      <img src="https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master">
      <img src="https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg">
      <img src="https://img.shields.io/badge/webpack-4-blue.svg">
      <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
  </h1>


`Ninecat-ui` is a light Vue 2.0 web UI framework


## Supporting environment
 Supports all major modern browsers.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /> </br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >=11                                                                                                                                                 | >= 14                                                                                                                                                  | >= 45                                                                                                                                                         | >=49                                                                                                                                                       | >=10                                                                                                                                                      |

## Install

Install using npm or yarn

We recommend using npm or yarn for development, not only for easy debugging in the development environment, but also for packaging and deployment in the production environment, and enjoy the many benefits brought by the entire ecosystem and toolchain.

```shell
// use npm

npm install ninecat-ui -S

// use yarn

yarn add ninecat-ui
```

## Example

```
import Vue from 'vue'
import Ninecat from 'ninecat-ui'
// Introduce style files
import 'ninecat-ui/package/main.css'

Vue.use(Ninecat)

// Or partially introduced
import {
  Button
  // ...
} from 'ninecat-ui'

Vue.component(Button.name, Button)
```

## Development Guide

- [Vue](https://cn.vuejs.org/index.html)
- [Contribution Guide](https://github.com/ninecat-ui/ninecat-ui/blob/master/.github/CONTRIBUTING.en-US.md)
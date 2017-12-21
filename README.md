# Quoteboard

#### 0% completed

## Overview

Quoteboard is a progressive web app that allows a user to login, join a group of friends or invite friends to their own group, share inside jokes or stupid quotes or intelligent quotes or just plain old statements that you and your friends make (in real life, hopefully) so you can remember them for however long you would like. Up or down vote the quotes so they gain or lose rank among your group. Sort by votes or date added. View quotes on or offline! 

## Tech Stack
- framework is `react`
- `redux` to manage state
- `react-detect-offline` for offline display
- `postgreSQL` to communicate with my db
- server written in `nodejs`
- `massive` and `express` to connect to my `heroku`-hosted db

## Progressive Web App Checklist (according to [Google](https://developers.google.com/web/progressive-web-apps/checklist))
- ☐ Site is served over HTTPS
- ☐ Pages are responsive on tablets & mobile devices
- ☐ All app URLs load while offline (using a `service worker`)
- ☐ Metadata provided for Add to Home screen
- ☐ First load fast even on 3G
- ☐ Site works cross-browser
- ☐ Page transitions don't feel like they block on the network
- ☑︎ Each page has an independent URL (achieved using `react-router-dom`)
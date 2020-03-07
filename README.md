# Table of Contents

1. [Scouting Draft](#use-case)
2. [Tech-stacks](#techs-tacks)
3. [Installation](#installation)
   [ For dev machine](#dev-machine)
4. [Api - beginner](#beginner)
5. [Api : getAllByType()](#getAllByType)
6. [Api : GetSingleByTypeAndId()](#GetSingleByTypeAndId)
7. [Api : GetMatchData()](#GetMatchData)
8. [Api : GetMatchDataByTeamAndCompetition()](#GetMatchDataByTeamAndCompetition)
9. [Api : getAllStudentsToCsv()](#getAllStudentsToCsv)
10. [Api : getAllMatchesToCsv()](#getAllMatchesToCsv)
11. [Api : getAllMatchesToCsvFilterOnBalanceClimber()](#getAllMatchesToCsvFilterOnBalanceClimber)
12. [TODO/InProgress](#TODO)

## Scouting Draft - Use Cases <a name="use-case"></a>

Scouting Draft Web Api handles

- get all for given entity ( type in 2019 {
  students,
  devices,
  competitions,
  rank,
  pit-data,
  matches,
  maatch-data,
  current-match})

- get single item for given entity
- get single match result for given competition and match
- get all match result for specific team in specfic competition
- [future] filter by given param (for example, HAB Level >= 2)
- [future] filter by given param (for example, anels/balls during SS (Auto), Cargo-Ship panels/balls during SS, Rocket scoring during SS)

## Tech-stacks <a name="tech-stacks"></a>

- firebase real-time database
- node
- firebase functions

## Installation <a name="installation"></a>

### For dev machine <a name="dev-machine"></a>

- Recommended: just the latest node and npm, then open in PowerShell:

  ```powershell
  npm install -g firebase-tools
  firebase login
  firebase init
  npm install firebase-admin@latest firebase-functions@latest //get the latest code
  firebase deploy
  firebase deploy --only functions
  firebase deploy --only functions:getAllByTypeToCsv,functions:GetMatchDataByTeamAndCompetition
  ```

- for testing purpose ONLY, recommended to create your own firebase project:

  ```powershell
  1) create new firebase

  2) export the data (as json .~10mb) from existing team DB -> pearadox-2019 https://console.firebase.google.com/u/0/project/pearadox-2019/database/pearadox-2019/data~2F

  3) for iinstance, I created my own instance called "pearadox-2020-test-only"
  https://console.firebase.google.com/u/0/project/pearadox-2020-test/database

  ```

## Api - for beginner <a name="beginner"></a>

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- Match data - RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/pearadox-2020/data~2Fmatch-data
- (for beginner) helloworld : https://us-central1-pearadox-2020.cloudfunctions.net/helloWorld

## Api - getAllByType() <a name="getAllByType"></a>

- this will return all the reords by given type

  ```powershell

      GET /getAllByType/{EntityType}

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/

- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/current-match
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/devices
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/match-data
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/matches
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/rank
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/students
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/competitions
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/teams
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllByType/pit-data

## Api - GetSingleByTypeAndId() <a name="GetSingleByTypeAndId"></a>

- this will return a single reord by given type and id

  ```powershell

      GET /GetSingleByTypeAndId/{EntityType}/{EntityId}

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/

- https://us-central1-pearadox-2020.cloudfunctions.net/GetSingleByTypeAndId/competitions/txpla
- https://us-central1-pearadox-2020.cloudfunctions.net/GetSingleByTypeAndId/teams/txpla
- https://us-central1-pearadox-2020.cloudfunctions.net/GetSingleByTypeAndId/match-data/txpla
- https://us-central1-pearadox-2020.cloudfunctions.net/GetSingleByTypeAndId/match-data/test

## Api - GetMatchData() <a name="GetMatchData"></a>

- this will return all match reord (~6 matches in 2019) by given competition {Competition-Id} and event-Id {match-id-prefix} (\*)
- (\*) : it is doing the string matching as wide-card for any match name matching as prefix.

  ```powershell

      GET /GetSingleByTypeAndId/{Competition-Id}/{match-id-prefix}

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/
- all 6 matches in match [001] in competition [gal]
  -- https://us-central1-pearadox-2020.cloudfunctions.net/GetMatchData/txpla/001-
- one result (as there is only 1 team-name starting with '45') :- with string matching logic
  -- https://us-central1-pearadox-2020.cloudfunctions.net/GetMatchData/txpla/001-45

## Api - GetMatchDataByTeamAndCompetition() <a name="GetMatchDataByTeamAndCompetition"></a>

- this will return all match reord for a given team and in a given competition {Competition-Id}

  ```powershell

      GET /GetMatchDataByTeamAndCompetition/{Competition-Id}/{TeamId}

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/
- https://us-central1-pearadox-2020.cloudfunctions.net/GetMatchDataByTeamAndCompetition/txpla/5414

## Api - getAllStudentsToCsv() <a name="getAllStudentsToCsv"></a>

- this will downlaod a CSV file which contains all the student

  ```powershell

      GET /getAllStudentsToCsv

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllStudentsToCsv

## Api - getAllMatchesToCsv() <a name="getAllMatchesToCsv"></a>

- this will downlaod a CSV file which contains all the match properties (explicit list)
  NO FILTER

  ```powershell

      GET /getAllMatchesToCsv

  ```

- Root Page : https://console.firebase.google.com/u/0/project/pearadox-2020/overview
- RealTime DB: https://console.firebase.google.com/u/0/project/pearadox-2020/database/
- https://us-central1-pearadox-2020.cloudfunctions.net/getAllMatchesToCsv

## Api - getAllMatchesToCsvFilterOnBalanceClimber() <a name="getAllMatchesToCsvFilterOnBalanceClimber"></a>

- this will downlaod a CSV file which contains all the match properties (explicit list)
  with filtering on the climb and balance total value (sum of those two booleans )

```powershell

    GET /getAllMatchesToCsvFilterOnBalanceClimber/{target-value}

```

the matches with both climb and balance

- https://us-central1-pearadox-2020.cloudfunctions.net/getAllMatchesToCsvFilterOnBalanceClimber/2

the matches with at least one on ( climb and balance)

- https://us-central1-pearadox-2020.cloudfunctions.net/getAllMatchesToCsvFilterOnBalanceClimber/1

## TODO/InProgress <a name="TODO"></a>

- revisit the use-case in the existing app
- webUI mockup

--junk below--
firebase deploy --only functions:getAllByTypeToCsv,functions:getAllMatchesWithTargetValueToCsv
https://github.com/Pearadox/Scout-19_5414/blob/master/app/src/main/java/com/pearadox/scout_5414/matchData.java

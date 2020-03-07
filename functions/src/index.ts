import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Student, Match } from "./student";

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("log-test as log on 03072020");
  console.warn("log-warn as log  on 03072020");
  console.error("log-error as log on 03072020");
  response.send("Hello from Firebase  for repo scouting-data-service.2020!");
});
//my-project.firebaseapp.com/event/123/
//https://scouting-draft-test.firebaseio.com/students/0
//target URL : https://us-central1-scouting-draft-test.cloudfunctions.net/showStudent/student/1

exports.getAllByType = functions.https.onRequest(async (req, res) => {
  const params = req.url.split("/");
  const domainType = params[1];
  const temp = await admin
    .database()
    .ref(domainType)
    .once("value");

  console.log("getAllByType | domainType >> " + domainType);
  return res.status(200).send(temp);
});

exports.GetSingleByTypeAndId = functions.https.onRequest(async (req, res) => {
  const params = req.url.split("/");
  const domainType = params[1];
  const domainEntityId = params[2];
  const temp = await admin
    .database()
    .ref(domainType.concat("/", domainEntityId))
    .once("value");
  console.log("GetSingleByTypeAndId | domainType >> " + domainType);
  return res.status(200).send(temp);
});

exports.GetMatchData = functions.https.onRequest(async (req, res) => {
  const params = req.url.split("/");
  const competitionId = params[1];
  const EventId = params[2];

  console.log("GetMatchData | EventId-data >> " + EventId);

  const temp = await admin
    .database()
    .ref("match-data/".concat(competitionId))
    .orderByKey()
    .startAt(EventId)
    .endAt(EventId.concat("uf8ff"))
    .once("value");

  console.log("GetMatchData | match-data >> " + competitionId);
  return res.status(200).send(temp);
});

exports.GetMatchDataByTeamAndCompetition = functions.https.onRequest(
  async (req, res) => {
    const params = req.url.split("/");
    const competitionId = params[1];
    const TeamId = params[2];

    console.log("GetMatchDataByTeamAndCompetition | TeamId-data >> " + TeamId);

    const temp = await admin
      .database()
      .ref("match-data/".concat(competitionId))
      // .orderByKey()
      .orderByChild("team_num")
      .equalTo(TeamId)
      .once("value");

    console.log("GetMatchDataByTeamAndCompetition | TeamId-data >> " + TeamId);
    return res.status(200).send(temp);
  }
);

exports.GetMatchDataByTeamForAllCompetitions = functions.https.onRequest(
  async (req, res) => {
    const params = req.url.split("/");
    const competitionId = params[1];
    const TeamId = params[2];

    console.log("GetMatchDataByTeam | TeamId-data >> " + TeamId);

    const temp = await admin
      .database()
      .ref("match-data/".concat(competitionId))
      // .orderByKey()
      .orderByChild("team_num")
      .equalTo(TeamId)
      .once("value");

    //TODO : filter on EventId as string widecard matching
    console.log("GetMatchDataByTeam | TeamId-data >> " + TeamId);
    return res.status(200).send(temp);
  }
);

exports.getAllStudentsToCsv = functions.https.onRequest(
  async (req, response) => {
    const studentsArray: Student[] = [];

    await admin
      .database()
      .ref("students")
      .once(
        "value",
        function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            const key = childSnapshot.key as string;
            const childData = childSnapshot.val();
            studentsArray.push(
              new Student(key, childData.name, childData.status)
            );
          });
        },
        function(error2: any) {
          console.error(error2);
        }
      );

    try {
      const { Parser } = require("json2csv");
      const csv = new Parser(["key", "name", "status"]).parse(studentsArray);
      response.setHeader(
        "Content-disposition",
        "attachment; filename=students.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(csv);
    } catch (err) {
      console.error(err);
    }
    console.log("getAllStudentsToCsv - end");
  }
);

exports.getAllMatchesToCsv = functions.https.onRequest(
  async (req, response) => {
    const matches: Match[] = [];

    await admin
      .database()
      // .ref("match-data/".concat(competitionId))
      .ref("match-data/txpla")
      .once(
        "value",
        function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            const childData = childSnapshot.val();
            matches.push(
              new Match(
                childData.team_num,
                childData.match,
                childData.tele_Balanced,
                childData.tele_Climbed,
                childData.pre_startPos,
                childData.auto_HighClose,
                childData.auto_HighFrontCP,
                childData.auto_HighLine,
                childData.auto_Low,
                childData.tele_Hang_num,
                childData.tele_HighBackCP,
                childData.tele_HighClose,
                childData.tele_HighFrontCP,
                childData.tele_HighLine,
                childData.tele_Low,
                childData.tele_liftedNum,
                childData.tele_num_Penalties,
                childData.tele_comment,
                childData.final_comment,
                childData.final_dateTime
              )
            );
          });
        },
        function(error2: any) {
          console.error(error2);
        }
      );

    try {
      const { Parser } = require("json2csv");
      const csv = new Parser([
        "team_num",
        "match",
        "pre_startPos",
        "auto_HighClose",
        "auto_HighFrontCP",
        "auto_HighLine",
        "auto_Low",
        "tele_Hang_num",
        "tele_HighBackCP",

        "tele_HighClose",
        "tele_HighFrontCP",
        "tele_HighLine",
        "tele_Low",
        "tele_liftedNum",
        "tele_num_Penalties",
        "tele_comment",
        "final_comment",
        "final_dateTime"
      ]).parse(matches);
      response.setHeader(
        "Content-disposition",
        "attachment; filename=match.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(csv);
    } catch (err) {
      console.error(err);
    }
    console.log("getAllMatchesToCsv - end");
  }
);

exports.getAllMatchesWithTargetValueToCsv = functions.https.onRequest(
  async (req, response) => {
    const matches: Match[] = [];

    await admin
      .database()
      // .ref("match-data/".concat(competitionId))
      .ref("match-data/txpla")
      .once(
        "value",
        function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            const childData = childSnapshot.val();
            matches.push(
              new Match(
                childData.team_num,
                childData.match,
                childData.tele_Balanced,
                childData.tele_Climbed,
                childData.pre_startPos,
                childData.auto_HighClose,

                childData.auto_HighFrontCP,
                childData.auto_HighLine,
                childData.auto_Low,
                childData.tele_Hang_num,
                childData.tele_HighBackCP,

                childData.tele_HighClose,
                childData.tele_HighFrontCP,
                childData.tele_HighLine,
                childData.tele_Low,

                childData.tele_liftedNum,
                childData.tele_num_Penalties,
                childData.tele_comment,
                childData.final_comment,
                childData.final_dateTime
              )
            );
          });
        },
        function(error2: any) {
          console.error(error2);
        }
      );

    try {
      const { Parser } = require("json2csv");
      const csv = new Parser([
        "team_num",
        "match",
        "tele_Balanced",
        "tele_Climbed",
        "pre_startPos",
        "auto_HighClose",
        "auto_HighFrontCP",
        "auto_HighLine",
        "auto_Low",
        "tele_Hang_num",
        "tele_HighBackCP",
        "tele_HighClose",
        "tele_HighFrontCP",
        "tele_HighLine",
        "tele_Low",
        "tele_liftedNum",
        "tele_num_Penalties",
        "tele_comment",
        "final_comment",
        "final_dateTime"
      ]).parse(matches.filter(isLargerThanTwo));
      response.setHeader(
        "Content-disposition",
        "attachment; filename=match.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(csv);
    } catch (err) {
      console.error(err);
    }
    console.log("getAllMatchesToCsv - end");
  }
);

function isLargerThanTwo(element: any, index: any, array: any) {
  return element.BalanceClimbed >= 1;
}

exports.getAllMatchesToCsvFilterOnBalanceClimber = functions.https.onRequest(
  async (req, response) => {
    const params = req.url.split("/");
    const limitValue = Number(params[1]);
    const matches: Match[] = [];

    await admin
      .database()
      // .ref("match-data/".concat(competitionId))
      .ref("match-data/txpla")
      .once(
        "value",
        function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            const childData = childSnapshot.val();
            matches.push(
              new Match(
                childData.team_num,
                childData.match,
                childData.tele_Balanced,
                childData.tele_Climbed,
                childData.pre_startPos,
                childData.auto_HighClose,

                childData.auto_HighFrontCP,
                childData.auto_HighLine,
                childData.auto_Low,
                childData.tele_Hang_num,
                childData.tele_HighBackCP,

                childData.tele_HighClose,
                childData.tele_HighFrontCP,
                childData.tele_HighLine,
                childData.tele_Low,

                childData.tele_liftedNum,
                childData.tele_num_Penalties,
                childData.tele_comment,
                childData.final_comment,
                childData.final_dateTime
              )
            );
          });
        },
        function(error2: any) {
          console.error(error2);
        }
      );

    try {
      const { Parser } = require("json2csv");
      const csv = new Parser([
        "team_num",
        "match",
        "tele_Balanced",
        "tele_Climbed",
        "pre_startPos",
        "auto_HighClose",
        "auto_HighFrontCP",
        "auto_HighLine",
        "auto_Low",
        "tele_Hang_num",
        "tele_HighBackCP",
        "tele_HighClose",
        "tele_HighFrontCP",
        "tele_HighLine",
        "tele_Low",
        "tele_liftedNum",
        "tele_num_Penalties",
        "tele_comment",
        "final_comment",
        "final_dateTime"
      ]).parse(
        matches.filter(function(e) {
          return e.BalanceClimbed >= limitValue;
        })
      );
      response.setHeader(
        "Content-disposition",
        "attachment; filename=match.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(csv);
    } catch (err) {
      console.error(err);
    }
    console.log("getAllMatchesToCsv - end");
  }
);
//TODO
// 1) find the generic approach (seems working)
// 1.a) without specifiying the propertt list
// 2) how to GetMatchDataByTeamForAllCompetitions

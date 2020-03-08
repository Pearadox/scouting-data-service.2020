interface IMatch {
  auto_CollectCP: boolean;
  auto_CollectFloor: boolean;
  auto_CollectRobot: boolean;
  auto_CollectSGboundary: boolean;
  auto_CollectTrench: boolean;
  auto_Dump: boolean;
  auto_HighClose: number;
  auto_HighFrontCP: number;
  auto_HighLine: number;
  auto_Low: number;
  auto_comment: string;
  auto_conInnerClose: boolean;
  auto_conInnerFrontCP: boolean;
  auto_conInnerLine: boolean;
  auto_leftSectorLine: boolean;
  auto_mode: boolean;
  final_comment: string;
  final_dateTime: Date;
  final_def_Block: boolean;
  final_def_TrenchInt: boolean;
  final_defense_good: boolean;
  final_lostComms: boolean;
  final_lostParts: boolean;
  final_studID: string;
  match: string;
  pre_PlayerSta: number;
  pre_cells_carried: number;
  pre_startPos: string;
  team_num: string;
  tele_Balanced: boolean;
  tele_CPcolor: boolean;
  tele_CPspin: boolean;
  tele_Climbed: boolean;
  tele_Hang_num: number;
  tele_HighBackCP: number;
  tele_HighClose: number;
  tele_HighFrontCP: number;
  tele_HighLine: number;
  tele_Low: number;
  tele_PowerCell_Boundary: boolean;
  tele_PowerCell_CP: boolean;
  tele_PowerCell_LoadSta: boolean;
  tele_PowerCell_Robot: boolean;
  tele_PowerCell_Trench: boolean;
  tele_PowerCell_floor: boolean;
  tele_UnderSG: boolean;
  tele_comment: string;
  tele_conInnerBackCP: boolean;
  tele_conInnerClose: boolean;
  tele_conInnerFrontCP: boolean;
  tele_conInnerLine: boolean;
  tele_got_lift: boolean;
  tele_lifted: boolean;
  tele_liftedNum: number;
  tele_num_Penalties: number;
}

export class Match implements IMatch {
  BalanceClimbed: number;
  constructor(
    public auto_CollectCP: boolean,
    public auto_CollectFloor: boolean,
    public auto_CollectRobot: boolean,
    public auto_CollectSGboundary: boolean,
    public auto_CollectTrench: boolean,
    public auto_Dump: boolean,
    public auto_HighClose: number,
    public auto_HighFrontCP: number,
    public auto_HighLine: number,
    public auto_Low: number,
    public auto_comment: string,
    public auto_conInnerClose: boolean,
    public auto_conInnerFrontCP: boolean,
    public auto_conInnerLine: boolean,
    public auto_leftSectorLine: boolean,
    public auto_mode: boolean,
    public final_comment: string,
    public final_dateTime: Date,
    public final_def_Block: boolean,
    public final_def_TrenchInt: boolean,
    public final_defense_good: boolean,
    public final_lostComms: boolean,
    public final_lostParts: boolean,
    public final_studID: string,
    public match: string,
    public pre_PlayerSta: number,
    public pre_cells_carried: number,
    public pre_startPos: string,
    public team_num: string,
    public tele_Balanced: boolean,
    public tele_CPcolor: boolean,
    public tele_CPspin: boolean,
    public tele_Climbed: boolean,
    public tele_Hang_num: number,
    public tele_HighBackCP: number,
    public tele_HighClose: number,
    public tele_HighFrontCP: number,
    public tele_HighLine: number,
    public tele_Low: number,
    public tele_PowerCell_Boundary: boolean,
    public tele_PowerCell_CP: boolean,
    public tele_PowerCell_LoadSta: boolean,
    public tele_PowerCell_Robot: boolean,
    public tele_PowerCell_Trench: boolean,
    public tele_PowerCell_floor: boolean,
    public tele_UnderSG: boolean,
    public tele_comment: string,
    public tele_conInnerBackCP: boolean,
    public tele_conInnerClose: boolean,
    public tele_conInnerFrontCP: boolean,
    public tele_conInnerLine: boolean,
    public tele_got_lift: boolean,
    public tele_lifted: boolean,
    public tele_liftedNum: number,
    public tele_num_Penalties: number
  ) {
    this.auto_CollectCP = auto_CollectCP;
    this.auto_CollectFloor = auto_CollectFloor;
    this.auto_CollectRobot = auto_CollectRobot;
    this.auto_CollectSGboundary = auto_CollectSGboundary;
    this.auto_CollectTrench = auto_CollectTrench;
    this.auto_Dump = auto_Dump;
    this.auto_HighClose = auto_HighClose;
    this.auto_HighFrontCP = auto_HighFrontCP;
    this.auto_HighLine = auto_HighLine;
    this.auto_Low = auto_Low;
    this.auto_comment = auto_comment;
    this.auto_conInnerClose = auto_conInnerClose;
    this.auto_conInnerFrontCP = auto_conInnerFrontCP;
    this.auto_conInnerLine = auto_conInnerLine;
    this.auto_leftSectorLine = auto_leftSectorLine;
    this.auto_mode = auto_mode;
    this.final_comment = final_comment;
    this.final_dateTime = final_dateTime;
    this.final_def_Block = final_def_Block;
    this.final_def_TrenchInt = final_def_TrenchInt;
    this.final_defense_good = final_defense_good;
    this.final_lostComms = final_lostComms;
    this.final_lostParts = final_lostParts;
    this.final_studID = final_studID;
    this.match = match;
    this.pre_PlayerSta = pre_PlayerSta;
    this.pre_cells_carried = pre_cells_carried;
    this.pre_startPos = pre_startPos;
    this.team_num = team_num;
    this.tele_Balanced = tele_Balanced;
    this.tele_CPcolor = tele_CPcolor;
    this.tele_CPspin = tele_CPspin;
    this.tele_Climbed = tele_Climbed;
    this.tele_Hang_num = tele_Hang_num;
    this.tele_HighBackCP = tele_HighBackCP;
    this.tele_HighClose = tele_HighClose;
    this.tele_HighFrontCP = tele_HighFrontCP;
    this.tele_HighLine = tele_HighLine;
    this.tele_Low = tele_Low;
    this.tele_PowerCell_Boundary = tele_PowerCell_Boundary;
    this.tele_PowerCell_CP = tele_PowerCell_CP;
    this.tele_PowerCell_LoadSta = tele_PowerCell_LoadSta;
    this.tele_PowerCell_Robot = tele_PowerCell_Robot;
    this.tele_PowerCell_Trench = tele_PowerCell_Trench;
    this.tele_PowerCell_floor = tele_PowerCell_floor;
    this.tele_UnderSG = tele_UnderSG;
    this.tele_comment = tele_comment;
    this.tele_conInnerBackCP = tele_conInnerBackCP;
    this.tele_conInnerClose = tele_conInnerClose;
    this.tele_conInnerFrontCP = tele_conInnerFrontCP;
    this.tele_conInnerLine = tele_conInnerLine;
    this.tele_got_lift = tele_got_lift;
    this.tele_lifted = tele_lifted;
    this.tele_liftedNum = tele_liftedNum;
    this.tele_num_Penalties = tele_num_Penalties;

    this.BalanceClimbed = (tele_Balanced ? 1 : 0) + (tele_Climbed ? 1 : 0);
    // this.CargoRPanCount =
    //   (tele_CargoRPan1 ? 1 : 0) +
    //   (tele_CargoRPan2 ? 1 : 0) +
    //   (tele_CargoRPan3 ? 1 : 0);
  }
}

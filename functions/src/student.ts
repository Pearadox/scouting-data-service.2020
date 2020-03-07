interface Usercheck {
  key: string;
  name: string;
  status: string;
}

export class Student implements Usercheck {
  constructor(public key: string, public name: string, public status: string) {
    this.key = key;
    this.name = name;
    this.status = status;
  }
}

interface IMatch {
  team_num: string;
  match: string;
  tele_Balanced: boolean;
  tele_Climbed: boolean;
  pre_startPos: string;
  auto_HighClose: number;
  auto_HighFrontCP: number;
  auto_HighLine: number;
  auto_Low: number;
  tele_Hang_num: number;
  tele_HighBackCP: number;
  tele_HighClose: number;
  tele_HighFrontCP: number;
  tele_HighLine: number;
  tele_Low: number;
  tele_liftedNum: number;
  tele_num_Penalties: number;
  tele_comment: string;
  final_comment: string;
  final_dateTime: Date;

  BalanceClimbed: number;
}

export class Match implements IMatch {
  BalanceClimbed: number;
  constructor(
    public team_num: string,
    public match: string,
    public tele_Balanced: boolean,
    public tele_Climbed: boolean,
    public pre_startPos: string,
    public auto_HighClose: number,
    public auto_HighFrontCP: number,
    public auto_HighLine: number,
    public auto_Low: number,
    public tele_Hang_num: number,
    public tele_HighBackCP: number,

    public tele_HighClose: number,
    public tele_HighFrontCP: number,
    public tele_HighLine: number,
    public tele_Low: number,
    public tele_liftedNum: number,
    public tele_num_Penalties: number,
    public tele_comment: string,
    public final_comment: string,
    public final_dateTime: Date
  ) {
    this.team_num = team_num;
    this.match = match;
    this.pre_startPos = pre_startPos;
    this.auto_HighClose = auto_HighClose;
    this.auto_HighFrontCP = auto_HighFrontCP;
    this.auto_HighLine = auto_HighLine;
    this.auto_Low = auto_Low;
    this.tele_Hang_num = tele_Hang_num;
    this.tele_HighBackCP = tele_HighBackCP;

    this.BalanceClimbed = (tele_Balanced ? 1 : 0) + (tele_Climbed ? 1 : 0);
    // this.CargoRPanCount =
    //   (tele_CargoRPan1 ? 1 : 0) +
    //   (tele_CargoRPan2 ? 1 : 0) +
    //   (tele_CargoRPan3 ? 1 : 0);
  }
}

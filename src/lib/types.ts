export interface TCulturalEventInfo {
  list_total_count: number;
  RESULT: TResultCode;
  row: TList[];
}

export interface TResultCode {
  CODE: string;
  MESSAGE: string;
}

export interface TList {
  CODENAME: string;
  GUNAME: string;
  TITLE: string;
  DATE: string;
  PLACE: string;
  ORG_NAME: string;
  USE_TRGT: string;
  USE_FEE: string;
  PLAYER: string;
  PROGRAM: string;
  ETC_DESC: string;
  ORG_LINK: string;
  MAIN_IMG: string;
  RGSTDATE: string;
  TICKET: string;
  STRTDATE: string;
  END_DATE: string;
  THEMECODE: string;
  LOT: string;
  LAT: string;
  IS_FREE: string;
  HMPG_ADDR: string;
}

export interface MonthOption {
  label: string;
  value: string;
}

export interface FetchForm {
  codeName: string;
  title: string;
  date: string;
}

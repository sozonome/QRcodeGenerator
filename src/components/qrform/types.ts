import { IProps } from "react-qrcode-logo";

export type QRFormType = Pick<
  IProps,
  | "value"
  | "logoImage"
  | "logoWidth"
  | "logoHeight"
  | "logoOpacity"
  | "bgColor"
  | "fgColor"
  | "quietZone"
  | "qrStyle"
>;

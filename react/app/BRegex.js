import { BOtpLength } from './HiveConfig';

export const BRName = /^[a-zA-Z_ ]+$/;
export const BRZip = /^\d{6}$/;
export const BRPan = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
export const BRPhoneNumber = /^[6789]\d{9}$/;
export const BR4Otp = /^\d{4}$/;
export const BR6Otp = /^\d{6}$/;
export const BROtp = BOtpLength === 4 ? BR4Otp : BR6Otp;
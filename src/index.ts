import colors from 'colors/safe';

type ColorizedLogger = {
  print(...args: any[]): void;
  info(...args: any[]): void;
  test(...args: any[]): void;
  error(...args: any[]): void;
  warn(...args: any[]): void;
};


export function print(...args: any[]): void {
  console.log(colors.reset(args.join(' ')));
}

export function info(...args: any[]): void {
  console.info(colors.bold(colors.blue(' [ INFO ] \t')), colors.blue(args.join(' ')));
}

export function test(...args: any[]): void {
  console.info(colors.bold(colors.bgMagenta(colors.white(' [ TEST ] \t'))), colors.magenta(args.join(' ')));
}

export function error(...args: any[]): void {
  console.error(colors.bold(colors.bgRed(colors.white(' [ ERROR ] \t'))), colors.bold(colors.red(args.join(' '))));
}

export function warn(...args: any[]): void {
  console.warn(colors.bold(colors.yellow(' [ WARNING ] \t')), colors.bold(colors.yellow(args.join(' '))));
}

const colorizedLogger: ColorizedLogger = { print, info, test, error, warn }


export default colorizedLogger;

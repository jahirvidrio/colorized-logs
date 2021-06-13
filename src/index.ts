import colors from 'colors/safe';


export default {
  print(...args: any[]): void {
    console.log(colors.reset(args.join(' ')));
  },

  info(...args: any[]): void {
    console.info(colors.bold(colors.blue(' [ INFO ] \t')), colors.blue(args.join(' ')));
  },

  test(...args: any[]): void {
    console.info(colors.bold(colors.bgMagenta(colors.white(' [ TEST ] \t'))), colors.magenta(args.join(' ')));
  },

  error(...args: any[]): void {
    console.error(colors.bold(colors.bgRed(colors.white(' [ ERROR ] \t'))), colors.bold(colors.red(args.join(' '))));
  },

  warn(...args: any[]): void {
    console.warn(colors.bold(colors.yellow(' [ WARNING ] \t')), colors.bold(colors.yellow(args.join(' '))));
  },
};

import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";

export default class Runner {
  public async run(): Promise<void> {
    const argv = await yargs(hideBin(process.argv)).argv;
    const script = await import(`./${argv._[0]}/index.js`);
    const ScriptClass = script.default;

    new ScriptClass().run();
  }
}

import { Command } from '../models/command';
import { Arguments } from '../models/interface';
import { Schema as ConfigCommandSchema } from './config';
export declare class ConfigCommand extends Command<ConfigCommandSchema> {
    run(options: ConfigCommandSchema & Arguments): Promise<0 | 1>;
    private get;
    private set;
}

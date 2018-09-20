/**
 * Builds your app and places it into the output path (dist/ by default).
 */
export interface Schema {
    /**
     * Specify the configuration to use.
     */
    configuration?: string;
    /**
     * Shows a help message. You can pass the format as a value.
     */
    help?: HelpUnion;
    /**
     * Flag to set configuration to 'production'.
     */
    prod?: boolean;
    /**
     * The name of the project to build.
     */
    project?: string;
}
/**
 * Shows a help message. You can pass the format as a value.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJSON = "JSON",
    JSON = "json"
}

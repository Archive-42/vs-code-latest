<a href="../../index.html" class="icon icon-home">vscode</a>

-

- [Home](../../index.html)

-

- - Customization
  - [Keyboard shortcuts](../../customization/keyboard-shortcuts/index.html)

-

- - Editor
  - [Accessibility](../accessibility/index.html)
  - [Codebasics](../codebasics/index.html)
  - [Command line](../command-line/index.html)
  - [Debugging](../debugging/index.html)
  - [Editingevolved](../editingevolved/index.html)
  - [Emmet](../emmet/index.html)
  - [Extension gallery](../extension-gallery/index.html)
  - [Integrated terminal](../integrated-terminal/index.html)
  - [Intellisense](../intellisense/index.html)
  - [Tasks appendix](../tasks-appendix/index.html)
  - <a href="index.html" class="current">Tasks v1 appendix</a>
    - [Appendix](#appendix)
    - <a href="#schema-for-tasksjson" class="toctree-l4">Schema for tasks.json</a>
  - [Tasks v1](../tasks-v1/index.html)
  - [Tasks](../tasks/index.html)
  - [Userdefinedsnippets](../userdefinedsnippets/index.html)
  - [Versioncontrol](../versioncontrol/index.html)
  - [Whyvscode](../whyvscode/index.html)

-

- - extensionAPI
  - [Activation events](../../extensionAPI/activation-events/index.html)
  - [Api debugging](../../extensionAPI/api-debugging/index.html)
  - [Api markdown](../../extensionAPI/api-markdown/index.html)
  - [Api scm](../../extensionAPI/api-scm/index.html)
  - [Extension manifest](../../extensionAPI/extension-manifest/index.html)
  - [Extension points](../../extensionAPI/extension-points/index.html)
  - [Language support](../../extensionAPI/language-support/index.html)
  - [Overview](../../extensionAPI/overview/index.html)
  - [Patterns and principles](../../extensionAPI/patterns-and-principles/index.html)
  - [Vscode api commands](../../extensionAPI/vscode-api-commands/index.html)
  - [Vscode api](../../extensionAPI/vscode-api/index.html)

-

- - Extensions
  - [Debugging extensions](../../extensions/debugging-extensions/index.html)
  - [Example debuggers](../../extensions/example-debuggers/index.html)
  - [Example hello world](../../extensions/example-hello-world/index.html)
  - [Example language server](../../extensions/example-language-server/index.html)
  - [Example word count](../../extensions/example-word-count/index.html)
  - [Overview](../../extensions/overview/index.html)
  - [Publish extension](../../extensions/publish-extension/index.html)
  - [Samples](../../extensions/samples/index.html)
  - [Testing extensions](../../extensions/testing-extensions/index.html)
  - [Themes snippets colorizers](../../extensions/themes-snippets-colorizers/index.html)
  - [Yocode](../../extensions/yocode/index.html)

-

- - Getstarted
  - [Introvideos](../../getstarted/introvideos/index.html)
  - [Keybindings](../../getstarted/keybindings/index.html)
  - [Locales](../../getstarted/locales/index.html)
  - [Settings](../../getstarted/settings/index.html)
  - [Theme color reference](../../getstarted/theme-color-reference/index.html)
  - [Themes](../../getstarted/themes/index.html)
  - [Userinterface](../../getstarted/userinterface/index.html)

-

- - Introvideos
  - [Basics](../../introvideos/basics/index.html)
  - [Codeediting](../../introvideos/codeediting/index.html)
  - [Configure](../../introvideos/configure/index.html)
  - [Debugging](../../introvideos/debugging/index.html)
  - [Extend](../../introvideos/extend/index.html)
  - [Intellisense](../../introvideos/intellisense/index.html)
  - [Quicktour](../../introvideos/quicktour/index.html)
  - [Versioncontrol](../../introvideos/versioncontrol/index.html)

-

- - Languages
  - [Cpp](../../languages/cpp/index.html)
  - [Csharp](../../languages/csharp/index.html)
  - [Css](../../languages/css/index.html)
  - [Dockerfile](../../languages/dockerfile/index.html)
  - [Go](../../languages/go/index.html)
  - [Html](../../languages/html/index.html)
  - [Identifiers](../../languages/identifiers/index.html)
  - [Javascript](../../languages/javascript/index.html)
  - [Jsconfig](../../languages/jsconfig/index.html)
  - [Json](../../languages/json/index.html)
  - [Markdown](../../languages/markdown/index.html)
  - [Overview](../../languages/overview/index.html)
  - [Php](../../languages/php/index.html)
  - [Python](../../languages/python/index.html)
  - [Tsql](../../languages/tsql/index.html)
  - [Typescript](../../languages/typescript/index.html)

-

- - Nodejs
  - [Angular tutorial](../../nodejs/angular-tutorial/index.html)
  - [Extensions](../../nodejs/extensions/index.html)
  - [Javascript transpilers](../../nodejs/javascript-transpilers/index.html)
  - [Nodejs debugging](../../nodejs/nodejs-debugging/index.html)
  - [Nodejs deployment](../../nodejs/nodejs-deployment/index.html)
  - [Nodejs tutorial](../../nodejs/nodejs-tutorial/index.html)
  - [Other javascript runtimes](../../nodejs/other-javascript-runtimes/index.html)
  - [Overview](../../nodejs/overview/index.html)
  - [Reactjs tutorial](../../nodejs/reactjs-tutorial/index.html)
  - [Tasks](../../nodejs/tasks/index.html)

-

- - Other
  - [Dotnet](../../other/dotnet/index.html)
  - [Office](../../other/office/index.html)
  - [Unity](../../other/unity/index.html)

-

- - Setup
  - [Additional components](../../setup/additional-components/index.html)
  - [Linux](../../setup/linux/index.html)
  - [Mac](../../setup/mac/index.html)
  - [Network](../../setup/network/index.html)
  - [Setup overview](../../setup/setup-overview/index.html)
  - [Windows](../../setup/windows/index.html)

-

- - Supporting
  - [Errors](../../supporting/errors/index.html)
  - [Faq](../../supporting/faq/index.html)
  - [Requirements](../../supporting/requirements/index.html)

-



[vscode](../../index.html)

- [Docs](../../index.html) »
- Editor »
- Tasks v1 appendix
-

---

# Appendix

This is additional information for [tasks](https://vscode.readthedocs.io/docs/editor/tasks-v1.md).

## Schema for tasks.json

The following interfaces define the schema of the tasks.json file.

    interface TaskConfiguration extends BaseTaskConfiguration {

        /**
         * The configuration's version number
         */
        version: string;

        /**
         * Windows specific task configuration
         */
        windows?: BaseTaskConfiguration;

        /**
         * Mac specific task configuration
         */
        osx?: BaseTaskConfiguration;

        /**
         * Linux specific task configuration
         */
        linux?: BaseTaskConfiguration;
    }

    interface BaseTaskConfiguration {

        /**
         * The command to be executed. Can be an external program or a shell
         * command.
         */
        command: string;

        /**
         * Specifies whether the command is a shell command and therefore must
         * be executed in a shell interpreter (e.g. cmd.exe, bash, ...).
         *
         * Defaults to false if omitted.
         */
        isShellCommand?: boolean | ShellConfiguration;

        /**
         * Specifies whether a global command is a background task.
         */
        isBackground?: boolean;

        /**
         * The command options used when the command is executed. Can be omitted.
         */
        options?: CommandOptions;

        /**
         * The arguments passed to the command. Can be omitted.
         */
        args?: string[];

        /**
         * Controls whether the output view of the running tasks is brought to front or not.
         *
         * Valid values are:
         *   "always": bring the output window always to front when a task is executed.
         *   "silent": only bring it to front if no problem matcher is defined for the task executed.
         *   "never": never bring the output window to front.
         *
         * If omitted "always" is used.
         */
        showOutput?: string;

        /**
         * If set to false the task name is added as an additional argument to the
         * command when executed. If set to true the task name is suppressed. If
         * omitted false is used.
         */
        suppressTaskName?: boolean;

        /**
         * Some commands require that the task argument is highlighted with a special
         * prefix (e.g. /t: for MSBuild). This property can be used to control such
         * a prefix.
         */
        taskSelector?:string;

        /**
         * The problem matcher to be used if a global command is executed (e.g. no tasks
         * are defined). A tasks.json file can either contain a global problemMatcher
         * property or a tasks property but not both.
         */
        problemMatcher?: string | ProblemMatcher | (string | ProblemMatcher)[];

        /**
         * The configuration of the available tasks. A tasks.json file can either
         * contain a global problemMatcher property or a tasks property but not both.
         */
        tasks?: TaskDescription[];
    }

    /**
     * Configuration of the shell when run in terminal
     */
    export interface ShellConfiguration {

        /**
         * The shell executable.
         */
        executable: string;

        /**
         * The arguments to be passed to the shell executable.
         */
        args?: string[];
    }

    /**
     * Options to be passed to the external program or shell
     */
    export interface CommandOptions {

        /**
         * The current working directory of the executed program or shell.
         * If omitted Ticino's current workspace root is used.
         */
        cwd?: string;

        /**
         * The environment of the executed program or shell. If omitted
         * the parent process' environment is used.
         */
        env?: { [key:string]:string; };
    }

    /**
     * The description of a task.
     */
    export interface TaskDescription {

        /**
         * The task's name
         */
        taskName: string;

        /**
         * Additional arguments passed to the command when this task is
         * executed.
         */
        args?: string[];

        /**
         * Whether this task maps to the default build command.
         */
        isBuildCommand?:boolean;

        /**
         * Whether this task maps to the default test command.
         */
        isTestCommand?: boolean;

        /**
         * Whether the executed command is kept alive and runs in the background.
         */
        isBackground?: boolean;

        /**
         * Controls whether the output view of the running tasks is brought to front or not.
         * See BaseTaskConfiguration#showOutput for details.
         */
        showOutput?: string;

        /**
         * See BaseTaskConfiguration#suppressTaskName for details.
         */
        suppressTaskName?: boolean;

        /**
         * The problem matcher(s) to use to capture problems in the tasks
         * output.
         */
        problemMatcher?: string | ProblemMatcher | (string | ProblemMatcher)[];
    }

    /**
     * A description of a problem matcher that detects problems
     * in build output.
     */
    export interface ProblemMatcher {

        /**
         * The name of a base problem matcher to use. If specified the
         * base problem matcher will be used as a template and properties
         * specified here will replace properties of the base problem
         * matcher
         */
        base?: string;

        /**
         * The owner of the produced VS Code problem. This is typically
         * the identifier of a VS Code language service if the problems are
         * to be merged with the one produced by the language service
         * or 'external'. Defaults to 'external' if omitted.
         */
        owner?: string;

        /**
         * The severity of the VS Code problem produced by this problem matcher.
         *
         * Valid values are:
         *   "error": to produce errors.
         *   "warning": to produce warnings.
         *   "info": to produce infos.
         *
         * The value is used if a pattern doesn't specify a severity match group.
         * Defaults to "error" if omitted.
         */
        severity?: string;

        /**
         * Defines how filename reported in a problem pattern
         * should be read. Valid values are:
         *  - "absolute": the filename is always treated absolute.
         *  - "relative": the filename is always treated relative to
         *    the current working directory. This is the default.
         *  - ["relative", "path value"]: the filename is always
         *    treated relative to the given path value.
         */
        fileLocation?: string | string[];

        /**
         * The name of a predefined problem pattern, the inline definition
         * of a problem pattern or an array of problem patterns to match
         * problems spread over multiple lines.
         */
        pattern?: string | ProblemPattern | ProblemPattern[];

        /**
         * Additional information used to detect when a background task (like a watching task in Gulp)
         * is active.
         */
        watching?: WatchingMatcher;
    }

    /**
     * A description to track the start and end of a watching task.
     */
    export interface WatchingMatcher {

        /**
         * If set to true the watcher is in active mode when the task
         * starts. This is equals of issuing a line that matches the
         * beginPattern.
         */
        activeOnStart?: boolean;

        /**
         * If matched in the output the start of a watching task is signaled.
         */
        beginsPattern?: string;

        /**
         * If matched in the output the end of a watching task is signaled.
         */
        endsPattern?: string;
    }

    export interface ProblemPattern {

        /**
         * The regular expression to find a problem in the console output of an
         * executed task.
         */
        regexp: string;

        /**
         * The match group index of the filename.
         */
        file: number;

        /**
         * The match group index of the problems's location. Valid location
         * patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn).
         * If omitted the line and column properties are used.
         */
        location?: number;

        /**
         * The match group index of the problem's line in the source file.
         * Can only be omitted if location is specified.
         */
        line?: number;

        /**
         * The match group index of the problem's column in the source file.
         */
        column?: number;

        /**
         * The match group index of the problem's end line in the source file.
         *
         * Defaults to undefined. No end line is captured.
         */
        endLine?: number;

        /**
         * The match group index of the problem's end column in the source file.
         *
         * Defaults to undefined. No end column is captured.
         */
        endColumn?: number;

        /**
         * The match group index of the problem's severity.
         *
         * Defaults to undefined. In this case the problem matcher's severity
         * is used.
         */
        severity?: number;

        /**
         * The match group index of the problem's code.
         *
         * Defaults to undefined. No code is captured.
         */
        code?: number;

        /**
         * The match group index of the message. Defaults to 0.
         */
        message: number;

        /**
         * Specifies if the last pattern in a multi line problem matcher should
         * loop as long as it does match a line consequently. Only valid on the
         * last problem pattern in a multi line problem matcher.
         */
        loop?: boolean;
    }

<a href="../tasks-v1/index.html" class="btn btn-neutral float-right" title="Tasks v1">Next <span class="icon icon-circle-arrow-right"></span></a> <a href="../tasks-appendix/index.html" class="btn btn-neutral" title="Tasks appendix"><span class="icon icon-circle-arrow-left"></span> Previous</a>

---

<span class="rst-current-version" toggle="rst-current-version"> <span class="fa fa-book"> Read the Docs</span> <span class="fa fa-caret-down"></span> </span>

<a href="../../index.html" class="icon icon-home">vscode</a>

-

- [Home](../../index.html)

-

- - Customization
  - [Keyboard shortcuts](../../customization/keyboard-shortcuts/index.html)

-

- - Editor
  - [Accessibility](../../editor/accessibility/index.html)
  - [Codebasics](../../editor/codebasics/index.html)
  - [Command line](../../editor/command-line/index.html)
  - [Debugging](../../editor/debugging/index.html)
  - [Editingevolved](../../editor/editingevolved/index.html)
  - [Emmet](../../editor/emmet/index.html)
  - [Extension gallery](../../editor/extension-gallery/index.html)
  - [Integrated terminal](../../editor/integrated-terminal/index.html)
  - [Intellisense](../../editor/intellisense/index.html)
  - [Tasks appendix](../../editor/tasks-appendix/index.html)
  - [Tasks v1 appendix](../../editor/tasks-v1-appendix/index.html)
  - [Tasks v1](../../editor/tasks-v1/index.html)
  - [Tasks](../../editor/tasks/index.html)
  - [Userdefinedsnippets](../../editor/userdefinedsnippets/index.html)
  - [Versioncontrol](../../editor/versioncontrol/index.html)
  - [Whyvscode](../../editor/whyvscode/index.html)

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
  - [Cpp](../cpp/index.html)
  - [Csharp](../csharp/index.html)
  - [Css](../css/index.html)
  - [Dockerfile](../dockerfile/index.html)
  - [Go](../go/index.html)
  - [Html](../html/index.html)
  - <a href="index.html" class="current">Identifiers</a>
    - [Language Identifiers](#language-identifiers)
    - <a href="#new-identifier-guidelines" class="toctree-l4">New identifier guidelines</a>
    - <a href="#known-language-identifiers" class="toctree-l4">Known language identifiers</a>
  - [Javascript](../javascript/index.html)
  - [Jsconfig](../jsconfig/index.html)
  - [Json](../json/index.html)
  - [Markdown](../markdown/index.html)
  - [Overview](../overview/index.html)
  - [Php](../php/index.html)
  - [Python](../python/index.html)
  - [Tsql](../tsql/index.html)
  - [Typescript](../typescript/index.html)

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
- Languages »
- Identifiers
-

---

# Language Identifiers

In Visual Studio Code, each language mode has a unique specific language identifier. That identifier is rarely seen by the user except in the settings, for example, when associating file extensions to a language:

        "files.associations": {
            "*.myphp": "php"
        }

Note that casing matters for exact identifier matching ('Markdown' != 'markdown')

The language identifier becomes essential for VS Code extension developers when adding new language capabilities or when replacing a language support.

Every language defines its _id_ through the `languages` configuration point:

        "languages": [{
            "id": "java",
            "extensions": [ ".java", ".jav" ],
            "aliases": [ "Java", "java" ]
        }]

Language supports are added using the language identifier:

        "grammars": [{
            "language": "groovy",
            "scopeName": "source.groovy",
            "path": "./syntaxes/Groovy.tmLanguage"
        }],
        "snippets": [{
            "language": "groovy",
            "path": "./snippets/groovy.json"
        }]

    languages.registerCompletionItemProvider('php', new PHPCompletionItemProvider(), '.', '$')

## New identifier guidelines

When defining a new language identifier, use the following guidelines:

- Use the lowercased programming language name.
- Search for other extensions in the Marketplace to find out if a language identifier has already been used.

## Known language identifiers

The following table lists all known language identifiers:

<table><thead><tr class="header"><th>Language</th><th>Identifier</th></tr></thead><tbody><tr class="odd"><td>Windows Bat</td><td><code>bat</code></td></tr><tr class="even"><td>BibTeX</td><td><code>bibtex</code></td></tr><tr class="odd"><td>Clojure</td><td><code>clojure</code></td></tr><tr class="even"><td>Coffeescript</td><td><code>coffeescript</code></td></tr><tr class="odd"><td>C</td><td><code>c</code></td></tr><tr class="even"><td>C++</td><td><code>cpp</code></td></tr><tr class="odd"><td>C#</td><td><code>csharp</code></td></tr><tr class="even"><td>CSS</td><td><code>css</code></td></tr><tr class="odd"><td>Diff</td><td><code>diff</code></td></tr><tr class="even"><td>Dockerfile</td><td><code>dockerfile</code></td></tr><tr class="odd"><td>F#</td><td><code>fsharp</code></td></tr><tr class="even"><td>Git</td><td><code>git-commit</code> and <code>git-rebase</code></td></tr><tr class="odd"><td>Go</td><td><code>go</code></td></tr><tr class="even"><td>Groovy</td><td><code>groovy</code></td></tr><tr class="odd"><td>Handlebars</td><td><code>handlebars</code></td></tr><tr class="even"><td>HTML</td><td><code>html</code></td></tr><tr class="odd"><td>Ini</td><td><code>ini</code></td></tr><tr class="even"><td>Java</td><td><code>java</code></td></tr><tr class="odd"><td>JavaScript</td><td><code>javascript</code></td></tr><tr class="even"><td>JSON</td><td><code>json</code></td></tr><tr class="odd"><td>LaTeX</td><td><code>latex</code></td></tr><tr class="even"><td>Less</td><td><code>less</code></td></tr><tr class="odd"><td>Lua</td><td><code>lua</code></td></tr><tr class="even"><td>Makefile</td><td><code>makefile</code></td></tr><tr class="odd"><td>Markdown</td><td><code>markdown</code></td></tr><tr class="even"><td>Objective-C</td><td><code>objective-c</code></td></tr><tr class="odd"><td>Objective-C++</td><td><code>objective-cpp</code></td></tr><tr class="even"><td>Perl</td><td><code>perl</code> and <code>perl6</code></td></tr><tr class="odd"><td>PHP</td><td><code>php</code></td></tr><tr class="even"><td>Powershell</td><td><code>powershell</code></td></tr><tr class="odd"><td>Pug</td><td><code>jade</code></td></tr><tr class="even"><td>Python</td><td><code>python</code></td></tr><tr class="odd"><td>R</td><td><code>r</code></td></tr><tr class="even"><td>Razor (cshtml)</td><td><code>razor</code></td></tr><tr class="odd"><td>Ruby</td><td><code>ruby</code></td></tr><tr class="even"><td>Rust</td><td><code>rust</code></td></tr><tr class="odd"><td>Sass</td><td><code>scss</code> (syntax using curly brackets), <code>sass</code> (indented syntax)</td></tr><tr class="even"><td>ShaderLab</td><td><code>shaderlab</code></td></tr><tr class="odd"><td>Shell Script (Bash)</td><td><code>shellscript</code></td></tr><tr class="even"><td>SQL</td><td><code>sql</code></td></tr><tr class="odd"><td>Swift</td><td><code>swift</code></td></tr><tr class="even"><td>TypeScript</td><td><code>typescript</code></td></tr><tr class="odd"><td>TeX</td><td><code>tex</code></td></tr><tr class="even"><td>Visual Basic</td><td><code>vb</code></td></tr><tr class="odd"><td>XML</td><td><code>xml</code></td></tr><tr class="even"><td>XSL</td><td><code>xsl</code></td></tr><tr class="odd"><td>YAML</td><td><code>yaml</code></td></tr></tbody></table>

<a href="../javascript/index.html" class="btn btn-neutral float-right" title="Javascript">Next <span class="icon icon-circle-arrow-right"></span></a> <a href="../html/index.html" class="btn btn-neutral" title="Html"><span class="icon icon-circle-arrow-left"></span> Previous</a>

---

<span class="rst-current-version" toggle="rst-current-version"> <span class="fa fa-book"> Read the Docs</span> <span class="fa fa-caret-down"></span> </span>

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
  - [Activation events](../activation-events/index.html)
  - [Api debugging](../api-debugging/index.html)
  - [Api markdown](../api-markdown/index.html)
  - [Api scm](../api-scm/index.html)
  - [Extension manifest](../extension-manifest/index.html)
  - [Extension points](../extension-points/index.html)
  - [Language support](../language-support/index.html)
  - <a href="index.html" class="current">Overview</a>
    - [Extensibility Reference](#extensibility-reference)
    - <a href="#the-extensibility-reference-documents" class="toctree-l4">The Extensibility Reference Documents</a>
    - <a href="#language-extension-guidelines" class="toctree-l4">Language Extension Guidelines</a>
  - [Patterns and principles](../patterns-and-principles/index.html)
  - [Vscode api commands](../vscode-api-commands/index.html)
  - [Vscode api](../vscode-api/index.html)

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
- extensionAPI »
- Overview
-

---

# Extensibility Reference

This section of our documentation goes into detail on the various features of VS Code extensibility. It's worth reviewing the introduction on the [extensions](https://vscode.readthedocs.io/docs/extensions/overview.md) as well as going through the ['Hello World'](https://vscode.readthedocs.io/docs/extensions/example-hello-world.md) example before digging in too deeply here.

The easiest way to see VS Code extensions in action is via the [Extension Marketplace](https://vscode.readthedocs.io/docs/editor/extension-gallery.md). Once you have built your first extension, it can be [published](https://vscode.readthedocs.io/docs/extensions/publish-extension.md) for others to install.

## The Extensibility Reference Documents

This section of our documentation covers the following topics...

<table><thead><tr class="header"><th>Topic</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/extension-manifest.md">package.json Extension Manifest</a></strong></td><td>Every Visual Studio Code extension needs a manifest file <code>package.json</code> at the root of the extension folder. This document provides an overview of the structure of that file and the mandatory fields.</td></tr><tr class="even"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/extension-points.md">Contribution Points</a></strong></td><td>Building on the base <code>package.json</code>, there are a number of additional extension points you can contribute to e.g. commands, themes, debuggers,...</td></tr><tr class="odd"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/activation-events.md">Activation Events</a></strong></td><td>VS Code lazily activates extensions. This document outlines the activation options supported in <code>package.json</code> e.g. when a specific file type is loaded, when a command is fired, etc</td></tr><tr class="even"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/vscode-api.md">API vscode namespace</a></strong></td><td>Review the full vscode namespace API reference.</td></tr><tr class="odd"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/vscode-api-commands.md">API complex commands</a></strong></td><td>See the VS Code complex command API reference.</td></tr><tr class="even"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/api-debugging.md">Debugging API</a></strong></td><td>Learn the details about integrating debuggers into VS Code.</td></tr><tr class="odd"><td><strong><a href="https://github.com/Microsoft/vscode-extension-samples">API samples</a></strong></td><td>Sample code illustrating the VS Code extension API.</td></tr><tr class="even"><td><strong><a href="https://vscode.readthedocs.io/docs/extensionAPI/api-markdown.md">Markdown extensions API</a></strong></td><td>Sample code illustrating the VS Code extension API.</td></tr></tbody></table>

## Language Extension Guidelines

If you are implementing programming language support, we have a [Language Extension Guidelines](https://vscode.readthedocs.io/docs/extensionAPI/language-support.md) topic which shows the various language features available in VS Code (for example, code suggestions and actions, formatting, renaming) and provides guidance on how to implement them.

<a href="../patterns-and-principles/index.html" class="btn btn-neutral float-right" title="Patterns and principles">Next <span class="icon icon-circle-arrow-right"></span></a> <a href="../language-support/index.html" class="btn btn-neutral" title="Language support"><span class="icon icon-circle-arrow-left"></span> Previous</a>

---

<span class="rst-current-version" toggle="rst-current-version"> <span class="fa fa-book"> Read the Docs</span> <span class="fa fa-caret-down"></span> </span>

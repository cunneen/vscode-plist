# ![icon] vscode-plist

A custom editor for property list files. This is a fork of [Ivan Hernandez's vscode-plist extension][ivhernandez.vscode-plist] for visual studio code.

![Custom Editor]

## Features

#### Collapse/Expand All

The contents of a plist can be expanded or collapsed in its entirety with commands via the context
menu (i.e. right click menu).

![Collapse or Expand all]

#### Switching to plain text

Description

![View as plain text]

#### Binary Plists

This extension can __view__ and __edit__ binary plists by converting the binary plist into its XML
representation. This XML version is a separate file in a temporary directory. The temporary file
is watched for changes and any changes are automatically saved back to the binary version.

<!-- ![view and edit binary plists](images/binary_plist.png) -->

#### Other supported file types

This extension can  __view__ and __edit__ entitlements files (i.e. .entitlements) which are simply
property list files with a different file extension.

It can also __view__ provisioning profiles (i.e. .mobileprovision) by decrypting them into their
plist representation. Editing provisioning profiles is __not__ supported. [macOS only]

<!-- ![view provisioning profiles](images/provisioning_profile.png) -->

## Known Issues

* Inefficient file saves. When saving changes to a file this extension replaces the entire contents
  of the file. This should be optimized to edit only the portion that has changed.
* Inefficient editor rendering. When changes are made to the webview (e.g. adding an item, expanding
  an item, editing a value, etc) the webview is rerendered in its entirety. This should be optimized
  to edit the DOM in place.

## Changelog

See [Changelog]

<!-- 
 ======= Links, styles, images etc go below this point ========
--->

<!-- LINKS -->

[ivhernandez.vscode-plist]: https://marketplace.visualstudio.com/items?itemName=ivhernandez.vscode-plist
[Changelog]: ./CHANGELOG.md

<!-- IMAGES -->

[icon]:./ui/resources/icons/icon.png "icon"
[Custom Editor]:images/editor.png "Custom Editor"
[View as plain text]:images/plain_text.png "View as plain text"
[Collapse or Expand all]:images/collapse_expand_all.png "Collapse or Expand all"

<!-- STYLES -->
<!--
Note: GitHub will ignore the <style> element and will render its contents,
 so we embed it in a collapsed <details> accordion, which itself gets hidden in other
 markdown renderers that respect the <style> element (i.e. not github).
-->

<hr />
<details id="cssblock">
<summary>
<!-- GH logo -->
<img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
  width="30" alt="github logo"
/>
</summary>

> GitHub renders the following CSS as gibberish, while other Markdown viewers will apply the CSS styles.

<style type="text/css">
  img[title~="icon"] {
   float: left;
   width: 128px;
   max-width: 25%;
   margin: 1em;
   vertical-align: middle;
  }

</style>
</details>

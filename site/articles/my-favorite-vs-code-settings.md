---
layout: index
title: 'My Favorite VS Code Settings'
date: 2020-03-22 15:32:07
tags:
  - blog
  - vs code
  - editor
thumbnail: My_Favorite_VS_Code_Settings_b2cqy6
description: "These are my favorite VS Code settings: Breadcrumbs, Minimap, Saving and Formatting, Bars and Windows."
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--gamma margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
        </form>
---

Last week I saw [an interesting tweet about showing modified tabs in the VS Code] from Matt Bierner. Although I already knew about this super useful setting, it made me revisit my VS Code settings.

<!-- more -->

By the way, the setting could be found as “Workbench > Editor: Highlight Modified Tabs” in VS Code Settings. If you also want to see the modified indicator in your current VS Code window, go to Settings, search “Window: Title”, and add `${dirty}` option. Here is how it looks in my settings:

``` js
${dirty} ${activeEditorMedium}${separator}${rootName}
```

## Modified settings

I have 364 modified settings in my VS Code. To see these modified settings, go to Settings, and select “Show modified settings” from the drop-down menu or type `@modified` in the input field. Some of these settings aren't modified in a way that they have a non-default value—they are just present in the `settings.json` file.

{% cldnry "vs-modified-setttings_wju4zh" "Screenshot of modified VS Code Settings window." %}

> Tip: you could see this file by clicking the “Open Settings” icon.

I am not going to write about all these settings. I am going to describe my favorite settings:

- breadcrumbs,
- bars,
- saving and formatting,
- window management, and
- minimap.

### Breadcrumbs

I like to have breadcrumbs turned on. However, I don't prefer cluttered breadcrumbs with unnecessary information. That's why I turned off all fancy settings, like showing icons or file contents (classes, constants, etc.) in my breadcrumbs. Here's how it looks:

{% cldnry "vs-breadcrumbs_hempo7" "Screenshot of breadcrumbs in VS Code editor." %}

### Bars

From the very start, I was quite fond of the VS Code interface. Activity bar, status bar and sidebar are handy features that hold a lot of information. I like to display the activity bar and sidebar on the right side. That way toggling the sidebar won't affect my primary window location which otherwise may cause distraction.

{% cldnry "vs-bars_onlhxt" "Screenshot of Bar Settings in VS Code editor." %}

I particularly like my status bar. In it, I could see the following information:

- the name of the Git branch I am currently working on,
- the status of Git synchronisation,
- the number of errors and warnings from linters,
- the name of the current project ([Project Manager extension]),
- how much time I spent working ([Wakatime extension]),
- the position of cursor and length of selected text,
- “spaces vs tabs” preference,
- which encoding the file uses,
- which end of file sequence the file uses,
- the depth of the indent of the current line, and
- what is the current time.

{% cldnry "vs-statusbar_prx3m1" "Screenshot of VS Code status bar." %}

Note that not all information is visible in the screenshot.

### Saving and Formatting

I prefer not to allow VS Code to format my code automatically. The main reason is that I tend to save files often as I usually use [BrowserSync] or [Live Server extension] to see the changes in the browser.

I turned off the following settings: ”Editor: Format on Save” and ”Files: Auto Save”.

{% cldnry "vs-save_jynrn6" "Screenshot of Saving Settings in VS Code editor." %}

I also turned off all settings related to formatting:

- “Editor: Format on Paste”,
- “Editor: Format on Save”, and
- “Editor: Format on Type”.

I usually use [Beautify] plugin to format my code. Here are my settings for the plugin:

``` json
{
  "beautify.language": {
    "css": [
      "css",
      "scss"
    ],
    "html": [
      "htm",
      "html",
      "njk",
      "pug",
      "liquid",
      "php",
      "erb"
    ],
    "js": {
      "filename": [
        ".jshintrc",
        ".jsbeautify"
      ],
      "type": [
        "javascript",
        "json"
      ]
    }
  }
}
```

> Tip: To prevent losing the unsaved changes on exit, set the “Files: Hot Exit” to `onExitAndWindowClose`.

### Window management

VS Code allows you to configure the window behaviour. I prefer the following VS Code window settings:

``` json
{
  "window.closeWhenEmpty": false,
  "window.newWindowDimensions": "inherit",
  "window.openFilesInNewWindow": "off",
  "window.openFoldersInNewWindow": "on",
  "window.restoreFullscreen": false,
  "window.restoreWindows": "all",
  "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
  "window.titleBarStyle": "custom",
}
```

Besides already mentioned Window Title settings, I like to open files in the current window, open folders in the new window, inherit windows size for the new window and restore all windows after the restart. I also like to keep the current window opened after closing the last tab and open recently closed window in “windowed”, not full-screen mode.

### Minimap

I am using minimap since I first saw this feature in Sublime Text. I find it quite useful, especially with longer files. It makes it easier to find and navigate certain parts of code for me.

{% cldnry "vs-minimap_yxslkw" "Screenshot of Minimap Settings in VS Code editor." %}

## Conclusion

There are so many meaningful settings in VS Code. You might be overwhelmed by the number of options, but every choice is very well explained, which is helpful. Also, most default values are enough to make you start using the editor easily. However, when you feel the editor should behave differently, try to search for the option and set it to your preference. And don't forget to share your settings with the community.

Now, what are your favorite VS Code settings?

[an interesting tweet about showing modified tabs in the VS Code]: https://twitter.com/mattbierner/status/1241039298750746624
[Project Manager extension]: https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager
[Wakatime extension]: https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime
[BrowserSync]: https://www.browsersync.io/
[Live Server extension]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
[Beautify]: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

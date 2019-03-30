# Text-to-Speech Browser

There used to be a plugin for Firefox that activated the Windows' built-in TTS engine and the horrible voice of Microsoft Sam would speak the website's content. Since the release of Windows 8 the voice of Microsoft David has become much more human-like, however the content on the websites has also become much more cluttered and the plugin for Firefox no longer works... `:(`

But all that is behind us! Introducing the perfect tool for reading web articles and blog posts without having to scroll the page with those greasy lunch fingers. The Text-to-Speech Browser scrolls for you as it reads highlighting the current word.

![screenshot-image](https://i.ibb.co/C7zsdqX/Screenshot-tts-browser1.jpg)

Limit the spoken text by writing custom jQuery selectors for those elements you wish excluded. Use `Ctrl` + `~` to open the pruning script editor and `Ctrl` + `G` to generate a new template block for the current URL. The following Wikipedia sample pruning is and excellent example of excluding the various Wikipedia clutter leaving just the main article to be read:

    https://en.wikipedia.org/*
        container:
            .mw-parser-output
        exclude:
            .thumb
            #toc
            .hatnote
            .wikitable
            .ambox
            sup
            .IPA
            .haudio
            #References
            .reflist
            .refbegin
            #Bibliography
            #Further_reading
            #External_links
            .mw-editsection
            .noprint
            .infobox
            .metadata
            .navbox
            table.vertical-navbox
            .mw-highlight pre

Note the text is selected in painful orange to help you see what exctly will be read out loud:

![screenshot-image](https://i.ibb.co/1Xb5Z3J/Screenshot-tts-browser2.png)

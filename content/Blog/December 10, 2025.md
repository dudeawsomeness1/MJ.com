---
title: Linux Digital Document Viewers
publish: true
---
Today's Song: [Family Affair • Mary J. Blige](https://music.youtube.com/watch?v=byFdFFgTnCc)

![[ChadReading.webp]]	![[boekenkar.webp]]	![[ProfessorReading.webp]]	![[GuyReading.webp]]

After realizing that the default document viewer for Linux Mint, Xreader, is super slow, I went looking for the fastest ones. I got a few notable recommendations from forums, like Zathura, which I haven't tested yet. But then I found [this blog post](https://ahrm.github.io/jekyll/update/2022/09/11/pdf-viewer-text-search-benchmark.html) with benchmarks of various readers, with the featured program being [Sioyek](https://github.com/hexomancer/sioyek). After testing Sioyek (2.0.0+dfsg-4build2), it is definitely very fast; one of the fastest I've tested so far.

This was all brought on by trying to read the Delta Green Need-to-Know PDF, which is, apparently, a very intense PDF. (Probably because it has a lot of very high quality assets along with the vectorized text.) The first thing I tried was opening it in my browser of choice: Brave (Chromium) version 1.85.111, which outperformed Xreader. Unlike Xreader (version 4.2.6), this was a usable experience.

**Brave**: less CPU intensive than Xreader, but only single-core; maximum of ~225 MB memory usage. (Using the Delta Green Need-to-Know PDF as a benchmark.) Unfortunately, it doesn't have a lot of features, like color inversion. Still, a good choice.

I also tried [OnlyOffice](https://www.onlyoffice.com/) (9.1.0.173 (deb)), which had slightly worse performance than Brave: single-core, mostly smooth, about double memory usage, ~596 MB maximum. LibreOffice Draw (24.2.7.2) takes forever to open the file and I don't know if you can actually scroll through the pages instead of clicking through them, but it handles it very well when it opens (at least one page at a time).

A good alternative to Xreader is Okular, which has lots of features, including TTS, various dark modes, and a full GUI. Still single-core and ~500 MB maximum. The pages load much slower than Brave, but it is more fully-featured and doesn't lock up like Xreader.

Zathura has very good performance according to [that blog post](https://ahrm.github.io/jekyll/update/2022/09/11/pdf-viewer-text-search-benchmark.html) and has a minimal interface, which can be customized to be less minimal.

Master PDF Editor 5.9.94 has excellent, smooth, single-core performance, ~650 MB maximum. However, it does have a registration:

> "Activation allows you to use all Master PDF Editor functions without watermarks in the output file.
> "After activation, you will receive free updates for your Master PDF Editor copy for one year." — (https://code-industry.net/masterpdfeditor-help/on-line_activation/)

I'm not sure how permissive it is without registration.

Sioyek has excellent performance with absolutely no stuttering on my PC (Ryzen 9 9900X3D). Unlike the other readers, this one is multi-core, which is quite cool. The biggest downside is that it has an impressive 1.7 GB maximum memory usage, starting from 210 MB when opened. The good news is this only happens after scrolling through the document for a long time. It can take a short time to get that much memory usage if you scroll through the entire document extremely fast like I have been (in order to benchmark). The memory usage only comes down to 1.5 GB after I stop scrolling.

My PC has 32 GB of RAM, so it's not a big deal, and less intense PDFs probably use much less memory. I'm guessing Sioyek has some *classic* computation-memory trade-offs causing the high memory usage, but it would be cool if they optimized the memory usage a bit. I also ran into some very minor bugs that I don't even recall at the time of writing. Hopefully, it will still get updates.

Sioyek is meant for reading academic papers, specifically, but I like using it for all my PDFs. It has some cool features, but it has a very minimal interface, which may not be great for some people. You can scroll through a list of every command, which is useful. It has some customization but probably not as much as Zathura, but I haven't done much with it. Sioyek has some cool features, like reading focus, links/portals, etc., and it performs very well with multi-core capabilities.
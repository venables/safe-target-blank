# Safe `target="_blank"` links

Using `target="_blank"` can be insecure.  Especially if you use these from within a web app.

## Wait, what?

Links that are opened using `target="_blank"` can control the opener tab in some limited ways.

Yes, you read that right.  Thank to the [window.opener](https://developer.mozilla.org/en-US/docs/Web/API/Window.opener) property, new windows have a reference to the window that opened them.

## What's the big deal?

Imagine this scenario:

1. I log in to my favorite web app.
2. I click over to some section, and click a link to a 3rd party.  The developers of the web app don't want me leaving their app, so they made it `target="_blank"`
3. Unbeknownst to me, the 3rd party was compromised, and a little bit of javascript was injected into their page. This javascript redirected my original window to a copy-cat page which says I need to log in again.
4. I close the 3rd party tab, and am back on my original (now "logged out") tab. Everything looks legit, so I log in again.

I just gave some hackers my login information.

If you want to see this in action, check out [test/index.html](http://code.mattvenables.com/safe-target-blank/test/index.html) versus [test/index-safe.html](http://code.mattvenables.com/safe-target-blank/test/index-safe.html).

## Wow. So how do I fix this?

The solution, it turns out, is pretty simple.

Just add `rel="noreferrer"` to your links that use `target="_blank"` ([HTML spec](https://html5.org/r/1950))

## Simple enough, so why does this library exist?

We're humans, and adding `rel="noreferrer"` is easy to forget, let alone spell (is that one "r" or two?)

So, just add this script to the bottom of your page, like so:

```html
<html>
<head>
</head>
<body>
  <!-- stuff -->

  <script src="//code.mattvenables.com/safe-target-blank/safe-target-blank.min.js"></script>
</body>
</html>

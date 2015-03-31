#GoogleAnalyticsTracker.js

Easily track **Events & Pageviews** with *Google Analytics*.

---

###Use:

- Add you favorite flavor of **Google Analytics**: the old one (`_gaq`):

``` js
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXX-X']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
```

or the new one (`ga`):

```js 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 ga('create', 'UA-XXXXX-X', 'auto');
 ga('send', 'pageview');
 ```

- Call this script:

``` html
<script src="../googleAnalyticsTracker.js"></script>
```
 
If you need to track an Event or a Pageview, just change the way the data is binded to the element (link, button) using the `data` attribute:

####Track Pageview: *data-trackpageview=""*

```html
<a href="#" data-trackpageview="Pageview.html">Pageview</a>
```

####Track Event: *data-trackevent=""*

```html
 <a href="#" data-trackevent="Arg1/Arg2/Arg3">Event</a>
```

### Test:

To test it, I recommend you to download the Chrome Extension [GA Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) and run it on your localhost. Open the console and click the tracked buttons / links, you'll see what's being sent to Google:

`Running command: ga("send", "event", "Zone", "Element", "Event")`

### Dependencies:

- None, vanilla JavaScript.

### Thanks:
To my mentor `@LordTeluco` and his awesome [functions_mark.js](https://github.com/jmelgarejo/simple_analytics_mark/blob/master/assets/js/functions_mark.js)


# SeedColors: a jQuery plugin

SeedColors is a jQuery plugin that makes it easy to colorize text using him as random seed.
Useful for chat username or same things.
Plugin use [seedrandom](https://github.com/davidbau/seedrandom) javascript library.

## Usage

First, load jQuery and the plugin:

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="seedrandom.js" type="text/javascript"></script>
<script src="jquery.seed-colors.js" type="text/javascript"></script>
```

Now, let's attach it to your dom elements:

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $(".username").seedColors();
   });
</script>
```

Create dom elements that should be colorized:

```html
<div><span class="username">username1</span> some text</div>
<div><span class="username">username2</span> some text</div>
<div><span class="username">username3</span> some text</div>
```

## Links
[Генерация цвета в чате на основе имени пользователя](http://www.itlessons.info/javascript/generate-chat-colors-by-username/)

## Author
[itlessons](http://www.itlessons.info) ([@itlessonsinfo](http://twitter.com/itlessonsinfo))

## Other
[MIT License](http://www.opensource.org/licenses/mit-license.php)
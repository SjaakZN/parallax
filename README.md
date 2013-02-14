# Parallax

A parallax scroller for section-based websites.

## Usage

```html
<script type="text/javascript" src="dist/parallax.min.js"></script>
```

To initialize the scroller, set the `slide` and `data` attributes:

```js
Parallax.initialize({
	slide: '.slide',
	data: 'data-ratio'
});
```

`slide` should be the name of the sections<br />
`data` will be the name of the data-* attribute that indicates the ratio of the parallax scroll

In your HTML, add the ratio to the slide using the data-* attribute you selected above:

```html
<section class="slide" data-ratio="0.5">
	Lorem ipsum dolor sit amet...
</section>
```

You have several choices for ratios:

+	*Decimal*: `0.25`, `0.5`, `0.75`
+	*Percentage*: `25%`, `50%`, `75%`
+	*Traditional*: `4to1`, `2to1`, `3to4`

The ratio is the relationship between how much the page scrolls vs. how much the section background scrolls. So, if the ratio is `50%`, the background scroll with be half of the page scroll. Hence, a ratio of `100%` will cause the slide background to appear fixed.

You may set a global scroll ratio as well. If the data-* ratio is not set in your HTML, it will look to this global ratio:

```js
Parallax.global.ratio = '0.5';
```

### Demo

For demo purposes, you may activate demo mode.

Add:

```html
<script type="text/javascript" src="dist/parallax.demo.min.js"></script>
```

Then add this to the head of your document:

```js
Parallax.demo({
	tour: '#tour',
	top: '#top',
	duration: 10000
});
```

`tour` is the ID of the element that will start the tour, a full-page scroll down<br />
`top` is the ID of the element that will scroll up to the top of the page<br />
`duration` is the length of the downward scroll
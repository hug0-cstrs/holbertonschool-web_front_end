# Advanced CSS

In this project a page is styled to see CSS in depth developed step by step in different files.

## Project with finished styles

<img src="https://i.imgur.com/qsmK0YV.png" alt="Sitemap">

# Tasks
## [0. Let's get some images!]()

The description of the project contains some inspiration for the final look of the project but we’ll have to download some images.

Head to `unsplash` and download 10 high resolution images that look as close to the final product that you’re going to make. You will be using these same high res images for a project on `Responsive Design` in the future. Remember to also include the 3 images (the 2 logos and the favicon) linked in the description of the project.

The images should all be representative of category they belong to. Images in the `work` category should be closely related to `work`.

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: images/pic-about-01.jpg, images/pic-work-01.jpg, images/pic-work-02.jpg, images/pic-work-03.jpg, images/pic-article-01.jpg,
images/pic-article-02.jpg, images/pic-article-03.jpg, images/pic-person-01.jpg, images/pic-person-02.jpg, images/pic-person-03.jpg
```

## [1. Effortless transitions when scrolling](styles/1-style.css)

When scrolling is triggered on the `html` element itself, we’d like the behavior of the scroll to be as fluid as possible.

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/1-style.css
```

## [2. Do you know your color values?](styles/2-style.css)

Based on `styles/1-style.css`, create the following declarations:

- For the `body`, set the foreground color value to `#161616`
- For all anchor elements, set the foreground color value to `#161616`
- All elements with the class `visually-hidden` should have their display to `none`
- All elements with the class `card-category`, should have their foreground color set to `#D73953`
- All elements with the class `section-tagline` should have their foreground color set to `#D73953`

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/2-style.css
```

## [3. Reuse and repeat. A programmer's life should be simple with variables](styles/3-style.css)

Based on `styles/2-style.css`:

- Target the `root` element and define the following custom properties:
  - `color-primary` set to `#d73953`
  - `color-black` set to `#090909`
  - `color-white` set to `#ffffff`
  - `color-light-grey` set to `#f3f3f3`
  - `color-dark-grey` set to `#353535`
  - `text-color` set to `color-black`
- Revisit the `section-tagline` and `card-category` declarations and reset their color to `color-primary`
- Revisit the `body` and anchor declarations and reset their color to `text-color`

### Does not have to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/3-style.css
```

## [4. Variables for storing certain font types](styles/4-style.css)

Based on `styles/3-style.css`:

- Targeting the `root` element, create 2 custom font-family properties `font-family-base` and `font-family-title` with the same list of fonts:
  - set the first choice font as `Helvetica Neue`
  - set the second choice font as `Helvetica`
  - set the third choice font as `Arial`
  - set the last choice font as `sans-serif`
- Set `body`‘s font-family to `font-family-base`
- Create a new declaration targeting all 6 levels of section headings, positioned before the links declaration
  - set its font-family to `font-family-title`

### Does not need to pass W3C
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/4-style.css
```

## [5. Variables for the font size](styles/5-style.css)

Based on `styles/4-style.css`:

- Targeting the `root` selector, create the following custom properties:
  - `font-size-small` set to `1.2rem`
  - `font-size-medium` set to `1.6rem`
  - `font-size-large` set to `1.8rem`
  - `font-size-x-large` set to `2.3rem`
  - `font-size-xx-large` set to `4.8rem`
- All fonts in the `html` element should be at `62.5%` of their normal size
- Any fonts in the `body` should have their sizes set to `font-size-medium`

### Does not need to pass W3C
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/5-style.css
```

## [6. Variables for the font-weight](styles/6-style.css)

Based on `styles/5-style.css`:

- Targeting the `root` element, create the following custom properties:
  - `font-weight-regular` set to `400`
  - `font-weight-bold` set to `700`
- Set the boldness of fonts in the `body` to `font-weight-regular`
- Set the boldness of fonts in the headings to `font-weight-bold`
### Does not need to pass W3C
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/6-style.css
```

## [7. Integrating Google Fonts into the CSS file](styles/7-style.css)

Based on `styles/6-style.css`:

- Add `Open Sans` as the first choice font for `font-family-base`, with the previous fonts shifted down accordingly
- Add `Raleway` as the first choice font for `font-family-title`, with the previous fonts shifted down accordingly

### Does not need to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/7-style.css
```

## [8. Defining line heights](styles/8-style.css)

Based on `styles/7-style.css`:

- Targeting `root`, create the following custom properties:
  - `line-height-small` set to `1.2`
  - `line-height-base` set to `1.5`
  - `line-height-big` set to `1.8`
- Set the minimum height of line boxes in the `body` to `line-height-base`

### Does not need to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/8-style.css
```

## [9. Links are decorated by default, time to remove them](styles/9-style.css)

Based on `styles/8-style.css`:

Style the anchor elements so the text isn’t decorated with anything

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/9-style.css
```

### 10. Centering the section titles

Based on `styles/9-style.css`:

- Create a new custom property `section-header-align` and set it to `center`
- Just above the `section-tagline` declaration, create a new declaration targeting the class `section-header`
  - Set horizontal alignment of that class with `section-header-align`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/10-style.css
```

## [11. Add more styles to the section tagline](styles/11-style.css)

Based on styles/10-style.css:

- Create a custom property `section-tagline-transform` and set it to `uppercase`
- Targeting the `section-tagline` class:
  - Set the family of fonts to `font-family-title`
  - By using the property `section-tagline-transform`, transform the text
  - Set the weight of fonts to `font-weight-bold`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/11-style.css
```

## [12. Adding more styling to the section title](styles/12-style.css)

Based on `styles/11-style.css`:

- Create the following custom properties:
  - `section-title-margin` set to `0`
  - `section-title-color` set to color-black

- Just above the `section-tagline` declaration, create a new declaration targeting the `section-title` class

  - Set the family of fonts to `font-family-title`
  - Set the font size to `font-size-xx-large`
  - Set the font weight to `font-weight-bold`
  - Use the `section-title-margin` to set the margin
  - Use the `section-title-color` to set the text color

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/12-style.css
```

### 13. Pseudo Classes (styles/13-style.css)

Based on `styles/12-style.css`:

- Ensure that the declaration targeting anchor elements only targets those containing a hyperlink
- Directly after this declaration, target the visited state for the link
  - Italicize the text
- Directly after the visited state, target the hover state for the link
  - Decorate the links with an underline when hovering
- Directly after the hover state, target the active state for the link
  - Set the color of the background with the variable `color-light-grey`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/13-style.css
```

## [14. Resetting the CSS stylesheet for browser consistency](14-style.css)

Based on `styles/13-style.css`:

Normalize your CSS file using [necolas’ normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css) with this [version](https://intranet.hbtn.io/rltoken/SE65V_9HBDJxYAuoJfK2YQ)

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/14-style.css
```

## [15. Add universal box-sizing](styles/15-style.css)

Based on `styles/14-style.css`:

Just before the styling for `html`, add a universal box sizing rule

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/15-style.css
```

## [16. Styling the container](styles/16-style.css)

Based on `styles/15-style.css`:

After the styles for `.section-tagline`,

Target the container class and set the following:

  - `960px` wide
  - evenly distribute the margins on both the left and and right side

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/16-style.css
```

## [17. Adding padding to sections](styles/17-style.css)

Based on `styles/16-style.css`:

- Create the following custom properties:
  - `section-padding` set to `5rem 0`
  - `section-header-padding` set to `0 0 3rem`
  - `section-body-padding` set to `0 0 3rem`
  - `section-footer-padding` set to `3rem 0 0`
  - `section-footer-align` set to `center`
  - `footer-padding` set to `5rem 0 1rem`


- Just before the `section-header` declaration, target the class `section` and set the padding on all 4 sides to `section-padding`
- Set `.section-header`‘s pad all 4 sides with `section-header-padding`
- Following the `section-header` declaration, target the `section-body` class, pad all 4 sides with `section-body-padding`
- Following the `section-body` declaration, target the `section-footer` class, pad all 4 sides with `section-footer-padding` and set the horizontal alignment with `section-footer-align`
- At the end of your style file, target the class `footer`, pad all 4 sides of the selected element with `footer-padding`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/17-style.css
```

## [18. Customizing the navbar](styles/18-style.css)

Based on `styles/17-style.css`:

- Targeting the `navbar-menu` class, let it float to the right
- For the nav class:
  - the margin on all sides should be set to `0`
  - the padding on all sides should be set to `0`
  - The styling on the list should not use anything
  - center align the text

- For the `nav-item` class in `nav` class:
  - set the family of fonts to `nav-item-font-family`
  - set the boldness of fonts to `nav-item-font-weight`
  - set the size of fonts to `nav-item-font-size`
  - set the spacing between text characters to `nav-item-letter-spacing`
  - set the display to `nav-item-display`
  - set the margin on all sides to `nav-item-margin`

- For the `nav-link` class in `nav` class:

  - set the display to `block`
  - set the padding to half of the root element for top and bottom, and equal to the root element for left and right

- While hovering over the `nav-link` class in `navè` class, set their foreground color value to `nav-item-link-hover`

- Create the following custom properties:
  - `nav-item-font-family` set to `font-family-title`
  - `nav-item-font-weight` set to `font-weight-bold`
  - `nav-item-font-size` set `tofont-size-medium`
  - `nav-item-letter-spacing` set to 4% of the root element
  - `nav-item-display` to `inline-block`
  - `nav-item-marginto` 3 times the root element on the bottom and `0` elsewhere
  - `nav-item-link-hover` set to `color-primary`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/18-style.css
```

## [19. Grid styling and custom variables](styles/19-style.css)

Based on `styles/18-style.css`:

- Create the custom property `section-tagline-margin` set to `0`
- Set the margins for the `section-tagline` class to `section-tagline-margin`

- For all `ul` with the class `row`:
  - 0 margins all around
  - No padding all around
  - the list should not have any default styles at all

- For the `col-1-3 class`:
  - set the width to 33.33% of its parent
  - float it to the left
  - set its padding to half of the root element

- For the `col-1-2 class`:
  - set the width to 50% of the parent
  - float it to the left
  - set its padding to half of the root element

- For the `footer-copyright` class:
  - No margins
  - Set the size of the fonts to `font-size-small`
  - set the foreground color to `text-color`

- For all `ul` tag in the `footer` class, align the text to the right

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/19-style.css
```

## [20. Clear the context of the grid](styles/20-style.css)

Based on `styles/19-style.css`:

Write a CSS rule that creates a new `row` after each instance of the class row with the following properties:

- no content
- displayed as a table
- do not allow any floating elements on either side

### Does not have to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/20-style.css
```

## [21. Simplify the col- selector](styles/21-style.css)

Based on `styles/20-style.css`:

- Select all classes that start with col-
  - float them to the left
  - set their padding to half of the root element
  - Hint: be mindful of specificity
- Remove references to these common properties for the individual col-1-3 and col-1-2 classes

### Does not need w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/21-style.css
```

## [22. Add a dark theme to sections](styles/22-style.css)

Based on `styles/21-style.css`:

Style the data-section-theme=“dark” with these rules:

- Redefine the custom property `text-color` to the `color-white`
- Redefine the custom property `section-title-color` to `color-white`
- Set the background to the variable `color-black`

### Does not need to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/22-style.css
```

## [23. Fix issues for dark theme](styles/23-style.css)

Based on `styles/22-style.css`:

Style the footer-address class

- Set the color of the text to the `text-color` property

Style the `social-link` class:

- Style it so that it renders as a block element

Style the `social-link` class that also selects the `svg` children

- Fill in the color of the svg children with the `text-color` variable

### Does not have to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/23-style.css
```

## [24. Add background and hover state to services](styles/24-style.css)

Based on `styles/23-style.css`

Target `card-title` that is inside `card-services`

- The margin on all sides should be none at all

Target `a` that is inside `card-services`

- Have them render as block level elements
- The padding should be set to 2x the root element
- Set the background color to the variable `color-light-grey`

Target the hover state of `a` that is inside `card-services`

- Set the foreground color to the variable `color-white`
- Set the color of the background to the variable `color-primary`
- Text should not be decorated at all

### Does not need to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/24-style.css
```

## [25. Add border to the button](styles/25-style.css)

Based on `styles/24-style.css`

Add custom properties to the root selector in the css file

- Name: `button-display`, Value: `inline-block`
- Name: `button-padding`, Value: `1.5rem 3rem`
- Name: `utton-border`, Value: `0.2rem solid var(--color-primary)`
- Name: `button-color`, Value: `color-black`
- Name: `button-text-decoration`, Value: `none`
- Name: `button-font-size`, Value: `font-size-large`
- Name: `button-hover-color`, Value: `color-white`
- Name: `button-hover-text-decoration`, Value: `none`
- Name: `button-hover-background`, Value: `color-primary`

Add these selectors after the selector for anchor links in active state:

- Create the button class selector

  - Set the display of the button to the variable `button-display`
  - Add padding all around with the variable `button-padding`
  - Style the border with the variable `button-border`
  - Set the size of fonts to the variable `button-font-size`
  - Set the foreground color to the variable `button-color`
  - Decorated text should have the value of the variable `button-text-decoration`
- Create the hover state of the button class selector

  - Set the foreground color value to the variable `button-hover-color`
  - Decorated text should have the value of the variable `button-hover-text-decoration`
  - Use the value of the variable `button-hover-background` for the background
- In `[data-section-theme="dark"]`, add the variable

  - Create a custom property `button-color` pointing to the variable `color-white`

### Does not have to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/25-style.css
```

## [26. Add border radius to images](styles/26-style.css)

Based on `styles/25-style.css`

Add the `card-testimonial` selector

- Center align the text

Target the `card-avatar` that is inside the `card-testimonial`

- Round the radius on all sides at 50%
- Set the width to 10x the root element
- Set the height to 10x the root element

Target the `<cite>` HTML tag which is inside `card-quote` inside the `card-testimonial`

Style as a block level element
Pad the top with 1x the root element
Set the foreground color value to the value of the color-primary variable
Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/26-style.css
```

## [27. Styling the section hero](styles/27-style.css)

Based on `styles/26-style.css`

Add the `section-hero` selector

- Set the size of the background using 2-value syntax
- Width should be `90rem` and the height should be set automatic

Target the `section-title` inside the `section-hero`

- Add 5rem of margin to the bottom

Target the `section-inner` inside the `section-hero`

- Add 10rem, 40rem, 2rem, and 0 to the padding on the top, right, bottom, left all in 1 rule
Does not have to pass w3c
```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/27-style.css

```

## [28. Fixing the header and menu navigation bar](styles/28-style.css)

Based on `styles/27-style.css`

Create these custom properties

- Name: `header-padding`, Value: `4rem 0 0`
- Name: `header-logo-position`, Value: `relative`
- Name: `header-logo-link-display`, Value: `inline-block`
- Name: `header-logo-link-position`, Value: `absolute`
- Name: `header-logo-link-top`, Value: `-1rem`
- Name: `header-logo-link-left`, Value: `0`

Create a header class selector

- Pad the header with the value within the variable `header-padding`

Create a `header-logo` class selector

- Position the `header-logo` with the value of the variable `header-logo-position`

Target the link inside the `header-logo` class

- Render the display using the value of the variable `header-logo-link-display`
- Position the links with the value of the variable `header-logo-link-position`
- Set the vertical position of the element using `header-logo-link-top`
- Set the horizontal position of the element using `header-logo-link-left`

### Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/28-style.css
```

## [29. Styling and custom properties for the nav](styles/29-style.css)

Based on `styles/28-style.css`

Edit the nav-item-link-hover property by setting its value to the `color-white` variable

Target the before pseudo elements of `nav-link` that is inside the `nav`

- Set the values of these elements to `empty` using `content`
- Absolutely position the targeted elements
- Set the vertical position to 0
- The horizontal position of the targeted elements should be 0
- Set the color of the background color of the targeted elements to the value `color-white`
- The width of the targeted elements should be set to 0
- Set the height to 20% of the root element value

Target the before pseudo elements of `nav-link` when `nav-item` is hover and is inside `nav`

- Set the background color of the elements to the variable `color-primary`
- Set the width of the elements to `100%`

### Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/29-style.css
```

## [30. Fix the works section](styles/30-style.css)

Based on `styles/29-style.css`

Target `card-outer` within the `card-work`

- Relatively position the element
- Hide any overflow

Target the image inside `card-image` inside `card-work`

The height of these elements should be `30rem`
The width of this element should be 100%
Property: `object-fit`, Value: `cover`
Vertically align to the bottom

Target `card-inner` inside `card-work`

- Absolutely position the element
- Vertically position with `-0.1rem` on the top
- Horizontally position the element with `-0.1rem` on the left
- Horizontally position the element with `-0.1rem` on the right
- Set the z-order to `1`

Target `card-inner` when `card-workè is hover

- Set the background color to this value: `rgba(0, 0, 0, 0.7)`

Target `card-title` inside `card-work`

- Center align the text
- Margins all around should be `0`
- Opacity should be set to its lowest value
- The height of the selected elements should be `100%`
- The position should be relative

Target the link inside `card-title` and `card-work`

- Make sure elements display as blocks
- Text should not be decorated
- Padding on the top should be `45%`

Create the after pseudo elements of the link (inside `card-title` and `card-work`)

- Absolutely position the selected elements
- Set the top, right, left, and bottom positions to be 0
- The content property of these elements should have an empty value

Target `card-title` when `card-work` is hover

- The opacity of these elements should be set to the value of 1

### Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/30-style.css
```

## [31. Add quotes decoration on testimonials](styles/31-style.css)

### Target the card-quote that is inside the card-testimonial

- Style it so that the position is relative to its parent

### Target the before pseudo-element of card-quote that is inside the card-testimonial

- The content should be set to the value `\201C`
- Absolutely position the selected elements
- The vertical position of the selected elements should be `-4.5rem`
- The horizontal position from the left should be `-1rem`
- The foreground color of the selected elements should be set to `#efededÈ
- The size of fonts should be `10rem`
- The z-order should be set to `-1`

### Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/31-style.css
```

## [32. Incorporating transitions](styles/32-style.css)

### Create some custom properties

- Name: `transition-duration`, Value: `.3s`
- Name: `transition-cubic-bezier`, Value: `cubic-bezier(0.17, 0.67, 0, 1.01)`
### Add transformations on the card work

Target the card-image when card-work is hover

- Use the transform property to apply a scale transform with a value of `scale(1.2)`

Target the card-outer when card-work is hover

- Use the transform property apply a scale transform to make the elements shrink. Use `scale(0.95)`

### Add animations on the navigation items

Inside `.nav .nav-link::before`

Use the shorthand property `transition` and have it use the value of `var(–transition-duration) var(transition-cubic-bezier)`

### Animate the button background

In the hover state of the button class

- The duration of the transition should be set to the variable `transition-duration`
- The transition effect should be applied to the `color` and `background-color` properties `(transition-property)`

### Add transitions on the card works

Inside `card-work:hover .card-image`

- Use the shorthand property `transition` and have it use the value of `var(–transition-duration) var(transition-cubic-bezier)`

Inside `.card-work .card-inner`

- Use the shorthand property `transition` and have it use the value of `var(–transition-duration) var(transition-cubic-bezier)`

### Does not have to pass w3c

```
Repo:

GitHub repository: holbertonschool-web_front_end
Directory: CSS_advanced
File: styles/32-style.css
```

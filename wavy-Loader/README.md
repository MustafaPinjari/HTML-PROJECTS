# Wavy Circle Loader Using CSS Animations

## Project Overview

This project demonstrates a visually appealing wavy circle loader using HTML and CSS animations. The loader consists of 15 concentric circles, each animated to move up and down in a wavy pattern, creating a mesmerizing effect. The project is simple yet effective, showcasing the power of CSS animations in creating engaging loading indicators.

## Files in the Project

- `index.html`: Contains the HTML structure of the loader.
- `style.css`: Defines the styles and animations for the loader.

## CSS Styling and Animations

The CSS file contains styles for the body, the main circle container, and the individual circles. The animation is defined using the `@keyframes` rule.

### Global Styles

The global styles reset the padding and margin for all elements and set up the body to center the loader on the page with a blueviolet background color.

### Circle Container

The `.circle` class defines the size and position of the container, ensuring that child elements are rendered in a 3D space using the `transform-style` property.

### Individual Circles

The `.circle span` class defines common styles for all circles, including their border, size, and animation. Each `span` element has a unique size, position, and animation delay to create the wavy effect.

### Keyframes Animation

The `@keyframes` rule defines the `load` animation, which moves the circles up and down, creating a wavy effect. The animation is set to run infinitely with an easing effect.

### Specific Circle Styles

Each `span` element within the `.circle` class is styled individually to create the concentric circle effect, with specific `top`, `bottom`, `left`, and `right` properties and unique animation delays.

## How to Use

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to view the wavy circle loader.

## Customization

- **Colors**: Change the background color in the `body` style and the circle colors in the `.circle span` styles.
- **Size**: Adjust the size of the loader by changing the height and width of the `.circle` class and the corresponding `top`, `bottom`, `left`, and `right` properties of the `span` elements.
- **Animation**: Modify the `@keyframes` rule to create different animation effects.

## Real-World Example

Loading indicators are essential in web applications to provide visual feedback to users while content is being loaded. This wavy circle loader can be used in any web project where a stylish and engaging loading animation is needed, enhancing the user experience during content loading times.

## Conclusion

This project demonstrates how to create a captivating wavy circle loader using simple HTML and CSS animations. It is a great example of how creative and effective loading animations can be implemented with minimal code.
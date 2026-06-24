/**
 * Utility function to conditionally join class names together.
 * Filters out falsy values (undefined, null, false, empty strings) and joins
 * the remaining valid strings with a single space. Highly useful for Tailwind CSS.
 * * @param {...Array<string | undefined>} classes - An array of class strings or undefined values.
 * @returns {string} The final merged class string.
 */
function joinClasses(...classes: Array<string | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export { joinClasses };

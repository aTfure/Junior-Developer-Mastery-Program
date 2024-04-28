/\*\*

- Converts a string to title case, capitalizing the first letter of each word.
- @param {string} str - The input string to convert to title case.
- @returns {string} The input string in title case.
  _/
  function toTitleCase(str) {
  return str.replace(/\w\S_/g, function(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  }

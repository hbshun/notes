

function get (obj, path, defaultValue) {
  const paths = path.split('.');
  if (obj[paths[0]]) {
    return get(obj[paths[0]], paths.slice(1).join('.'), defaultValue);
  } else {
    return defaultValue;
  }
}
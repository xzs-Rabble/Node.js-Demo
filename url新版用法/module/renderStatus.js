function renderStatus(urlObj) {
  let arr = ["/home", "/index"];
  return arr.includes(urlObj.pathname) ? 200 : 404;
}

exports.renderStatus = renderStatus;

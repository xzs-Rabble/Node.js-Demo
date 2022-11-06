function renderStatus(urlObj) {
  let arr = ["/home", "/index", "/index/list"];
  return arr.includes(urlObj.pathname) ? 200 : 404;
}

exports.renderStatus = renderStatus;

function renderHTML(urlObj) {
  let query = urlObj.searchParams;
  console.log(query);
  for (let [key, value] of query) {
    console.log(key, value); //取出键值对
  }
  switch (urlObj.pathname) {
    case "/home":
      return `
          <html>
              <b>hello HOME</b>  
          </html>
      `;
    case "/index":
      return `
          <html>
              <b>hello INDEX</b>  
          </html>
      `;
    default:
      return `
          <html>
              <b>404 found</b>  
          </html>
      `;
  }
}

module.exports = {
  renderHTML,
};

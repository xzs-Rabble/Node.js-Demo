function renderHTML(urlObj) {
  let query = urlObj.query;
  console.log(query);
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
    case "/index/list":
      return `
            <html>
                <b>hello INDEX-list</b>  
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

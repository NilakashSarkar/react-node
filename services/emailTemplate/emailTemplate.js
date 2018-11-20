const keys=require('../../config/keys')
module.exports=(survey)=>{
    return `
          <html>
          <head>
          <title style=""color:red>This is test mail</title>
          </head>
          <body>
            <div style="text-align:center;color:red">
            <p>please answer the following question</p>
            <p>${survey.body}</p>
            <div><a href="${keys.sendRedirectURL}/api/surveys/${survey.id}/yes">Yes</a></div>
            <div><a href="${keys.sendRedirectURL}/api/surveys/${survey.id}/no">No</a></div>
            </div>
          </body>
          </html>
    `
}
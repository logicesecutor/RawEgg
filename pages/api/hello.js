// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function cacca(req, res) {

  console.log(req.body.mail)
  
  res.status(200).json({mail:req.body.mail})
}

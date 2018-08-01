let AV = require('leancloud-storage');
let Contact = AV.Object.extend('Contact');

export const getAll = () => {
  let query= new AV.Query('Contact');
  return query.find();
}


export const remove = (contact) =>{
  console.log("contact.id",contact.id);
  let c = AV.Object.createWithoutData('Contact',contact.id);
  return c.destroy();
}

export const create = (contact) =>
{
  let ct=new Contact();
  ct.set('name',contact.name);
  ct.set('email',contact.email);
  ct.set('avatarURL',contact.avatarURL);
  console.log(ct);
  return ct.save();
}
 
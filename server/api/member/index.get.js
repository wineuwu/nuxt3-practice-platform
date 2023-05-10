import userModel from '~/server/models/user.model';

export default eventHandler(async e => { 
  const user = await userModel.find();
  
  return user
})
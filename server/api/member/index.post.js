import userModel from '~/server/models/user.model';

 export default defineEventHandler(async (e) => { 
  const body =  await readBody(e);
  const {_id, name, email, registerFrom} = body;
  const user = new userModel({_id, name, email, registerFrom});
  await user.save();

  return {
    sucess: true,
    body
  }
})
// @ts-check
const { DataStore } = require('@aws-amplify/datastore');
const {schema}  = require('./schema');


const model = async () =>{
  try{
    const data = await DataStore.query(schema);
    console.log(JSON.stringify(data[0], null, 2));
  }
  catch(e){
    console.log(e);
  }
}


console.log(model);

module.exports = {
  model
};
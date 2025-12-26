async function Load(CMD,info="10",obj={}){
        const response = await fetch('https://hidebanck-cloudserves.onrender.com/submit',
          {
            method : 'POST',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({ command: CMD  , info : info , object : obj})
          }
        );

        if (!response.ok) {
          console.log(`Server error: ${response.status}`);
        }

        let data = await response.json();
        return data ;

}
async function LogIpAdress(){
  await fetch('https://hidebanck-cloudserves.onrender.com/get-ip');
  return ;
}
function IND(arr,att,val){
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i][att]==val){
      return i ;
    }
  }
  return -1;
}

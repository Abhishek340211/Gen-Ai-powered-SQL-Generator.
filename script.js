document.getElementById("generateBtn").addEventListener("click", async () => {

  const prompt = document.getElementById("prompt").value;

  try{
    const response = await fetch("http://localhost:5000/generate-sql", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({prompt})
    });

    const data = await response.json();

    document.getElementById("result").innerText = data.sql;

  }catch(error){
    document.getElementById("result").innerText = "Server not running!";
  }

});
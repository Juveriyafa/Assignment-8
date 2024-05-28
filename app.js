document.getElementById("submitbtn").addEventListener("click",()=>{
  event.preventDefault(); 
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    
    const response = fetch("https://abaya-looks-backend.vercel.app/api/v1/test", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user:username,
            type:password,
        })
      }).then(res=>{
        
        res.json().then(data=>{
            window.localStorage.setItem('token',data.msg)
            console.log('done')
        })
      }).catch(err=>{
        alert('You have entered an invalid username or password')
      })
})
import React,{useState} from 'react';

function Form() {
    const [name,setName] = useState("");
    const [eMail,setMail] = useState("");
    const [usn,setusn] = useState("");
    const [sem,setsem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            name: name,
            eMail: eMail,
            usn: usn,
            sem: sem,
        }
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value={name}
        placeholder="Student name"
         onChange={(e) => setName(e.target.value)}/><br></br>
         <input type="text" value={eMail}
         placeholder="mail"
         onChange={(e) => setMail(e.target.value)}/><br></br>
         <input type="text" value={usn}
         placeholder="usn"
          onChange={(e) => setusn(e.target.value)}/><br></br>

        <input type="text" value={sem}
        placeholder="sem"
         onChange={(e) => setsem(e.target.value)}/><br></br>
         <input type="submit" value={"submit"} />
        
        


         


     </form>
        <p>{name}</p>
        <p>{eMail}</p>
        <p>{usn}</p>
        <p>{sem}</p>


    </div>
  )
}

export default Form
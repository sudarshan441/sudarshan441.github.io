import myResume from '../assets/Sudarshan-Resume-fw20_0365.pdf'
export default function Resume(){
    return(
        <section id="resume"  className="py-10 text-white">
          <h3 className="text-4xl font-semibold">
          RESU<span className="text-cyan-600">ME</span>
        </h3>
         <a href={myResume} download={"Sudarshan-Resume-fw20_0365.pdf"} target={"_blank"}>
           <button style={{backgroundColor:"rgb(8 145 178 / var(--tw-bg-opacity))",padding:"12px",borderRadius:"20px",color:"white",marginTop:"100px"}}>Download cv</button>
         </a> 
           
        </section>
    )
}
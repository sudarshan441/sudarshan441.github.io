import GitHubCalendar  from "react-github-calendar"
export default function GithubCalender(){
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
   return (

    <div> <div textAlign={"center"} margin={"auto"}>
        <div style={{marginTop:"40px",marginBottom:"40px"}}>
          <h3 className="text-4xl font-semibold">
          Github <span className="text-cyan-600">Calendar</span>
        </h3>
       </div>

       
     
          <GitHubCalendar 
               style={{margin:"auto",width:"70%"}}
               username="sudarshan441" 
               transformData={selectLastHalfYear} 
                fontSize={12}
                blockSize={20}
                
           />

       {/* <ReactTooltip delayShow={20} html/> */}
     
</div></div>
    
   )
}
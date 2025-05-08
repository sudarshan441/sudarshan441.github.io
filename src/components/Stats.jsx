export default function Stats() {
  return (
    <div>
      <div style={{ marginTop: "50px", display: "grid", gap: "50px" }}>
        <div style={{ margin: "auto" }}>
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sudarshan441&show_icons=true&locale=en&layout=compact"
            alt="sudarshan441"
          />
        </div>
        <div style={{ margin: "auto" }}>
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=sudarshan441&show_icons=true&locale=en"
            alt="sudarshan441"
          />
        </div>
        <div style={{ margin: "auto" }}>
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=sudarshan441&"
            alt="sudarshan441"
          />
        </div>
      </div>
    </div>
  );
}

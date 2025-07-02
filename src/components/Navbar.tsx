export default function Navbar(){
    return(
        <div className="Navbar">

<img
  className='logo'
  src="/assets/Asset.png"
  alt="Logo"
  onError={(e) => {
    (e.target as HTMLImageElement).style.display = 'none';
    // Optionally, you can display a fallback here
    // e.g., (e.target as HTMLImageElement).src = '/assets/fallback.png';
  }}
/>

<button className="setting-btn">
  <span className="bar bar1"></span>
  <span className="bar bar2"></span>
  <span className="bar bar1"></span>
</button>

        </div>
       
    );
}
export default function Navbar(){
    return(
        <div className="Navbar">

<img
  className='logo'
  src="/assets/Asset.png"
  alt="Logo"
  onError={(e) => {
    (e.target as HTMLImageElement).style.display = 'none';
 
  }}
/>

<button className="header-btn">
 Get in Touch
</button>

        </div>
       
    );
}
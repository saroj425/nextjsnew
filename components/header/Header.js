import Link from "next/link";
import { useRouter } from "next/router";

export default function Headers(){
    const router =  useRouter();
    const loginClick = ()=>{
        router.push('/login')
    }
    const signupClick = ()=>{
        router.push("/signup")
    }

    return(
        <div className="headerdiv" style={{background:"#ffc400",padding:"15px"}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className="d-flex">
                        <button className="btn btn-outline-success" onClick={()=>loginClick()}>Login</button>
                        <button className="btn btn-outline-success" onClick={()=>signupClick()}>Signup</button>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
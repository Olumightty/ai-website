import OrangeButton from "./OrangeButton"

function NavBar(){
    return(
        <nav className="flex justify-between items-center text-white">
            <div>
                <img src="/GPT-3.png" alt="logo" />
            </div>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>What is GPT?</li>
                <li>Open AI</li>
                <li>Case Studies</li>
                <li>Library</li>
            </ul>
            <div className="flex gap-4">
                <button>Sign In</button>
                <OrangeButton>Sign Up</OrangeButton>
            </div>
        </nav>
    )
}

export default NavBar
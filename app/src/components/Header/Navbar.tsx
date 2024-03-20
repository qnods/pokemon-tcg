import { AboutUs } from './AboutUs';

function Navbar() {


    return (
        <div className="container mx-auto px-4 grid grid-cols-5 gap-4">
            <AboutUs />
            <div className="col-span-2 bg-blue-300">Dropdown Set</div>
            <div className="col-span-2 bg-blue-300">Search Card</div>
        </div>

    );
}

export {Navbar};
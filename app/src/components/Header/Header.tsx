import { Brand } from "./Brand";
import { Navbar } from "./Navbar";

function Header() {
  return (
    <div className="p-4">
      <Brand />
      <Navbar />
    </div>
  );
}

export { Header };
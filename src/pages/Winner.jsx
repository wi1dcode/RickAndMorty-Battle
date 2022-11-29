import { Link } from "react-router-dom";
import { useContext } from "react";
import CharactersContext from "../context/Characters";
import WinnerCard from "../components/WinnerCard";

import replayButton from "../assets/replay"

function Winner() {
  const { winner } = useContext(CharactersContext);

  return (
    <div className="flex justify-center flex-col items-center text-white">
      <div className="uppercase text-5xl my-4">winner:</div>
      {winner ? <WinnerCard name={winner.name} image={winner.image} /> : ""}
      <Link to="/">
        <button type="button" className={`replay bg-[url(${replayButton})]`} aria-label="replay" />
      </Link>
    </div>
  );
}

export default Winner;

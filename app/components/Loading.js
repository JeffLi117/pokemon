import Image from "next/image";
import pokeball from "../../public/pokeball.png";

export default function Loading () {
    return (
        <div className="spinner-container">
          <div className="loading-spinner">
            <Image
                src={pokeball}
                alt={`Pokeball`}
                width={250}
                height={250}
            />
          </div>
        </div>
      );
}
import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

type Props = {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
};

export enum Countries {
  Brazil = "Brazil",
  France = "France",
  Poland = "Poland",
  Germany = "Germany",
}

export default function User(props: Props) {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const [personBio, setpersonBio] = useState<string | null>("");

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setpersonBio(e.target.value);
  }

  //   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //   }

  //   const { users, updateUser, addUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <button onClick={toggleInfo}>{!isShowInfo ? "show" : "hide"}</button>
      {isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>
            This person: {props.isMarried ? "is married." : "is free agent."}
          </p>
          <p>Country: {props.country}</p>
        </>
      )}
      <p>
        {props.name} Bio: {!personBio ? "No bio avaible" : personBio}
      </p>
      <input onChange={handleChange} />
    </div>
  );
}

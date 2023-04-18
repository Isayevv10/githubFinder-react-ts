import React, { FC, useState } from "react";
import styles from "./Search.module.scss";
import IconSearch from "../../assets/icon-search.svg";
import Button from "../Button";

interface ISearchProps {
  hasError?: boolean;
  onSubmit?: (text: string) => void;
}

const Search: FC<ISearchProps> = ({ hasError, onSubmit }) => {
  const [username, setUserName] = useState<string>("");
  // console.log(username);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit?.(username);
      setUserName("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <img src={IconSearch} alt='' />
        </label>

        <input
          type='text'
          id='search'
          placeholder='Search Github User'
          className={styles.textField}
          name='username'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        {hasError && <div className={styles.hasError}>No Result</div>}

        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;

import css from "./style.module.css";
import { useDebouncedCallback } from "use-debounce";

type SearchBoxType = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBox({ value, onChange }: SearchBoxType) {
  const debounced = useDebouncedCallback((val: string) => {
    onChange(val);
  }, 1000);

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        defaultValue={value}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;

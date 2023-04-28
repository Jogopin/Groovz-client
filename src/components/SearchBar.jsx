const SearchBar = ({ isSearchBarOn }) => {
  if (!isSearchBarOn) return <></>;

  return (
    <>
      <form>
        <input
          type="text"
          className="w-64 rounded-md border-2  border-zinc-600  bg-zinc-900 px-3 py-1.5 font-bold text-zinc-600 placeholder-zinc-700 "
          placeholder="Lorem ipsum"
        />
      </form>
    </>
  );
};

export default SearchBar;

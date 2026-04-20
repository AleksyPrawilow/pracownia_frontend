import {
  Card,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useRef, useState } from "react";

export function ShopSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
      handleSearch(searchQuery);
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (query: string) => {};
  return (
    <>
      <Card sx={{ p: 2, m: 4, flexGrow: 1 }}>
        <FormControl fullWidth color="secondary" variant="outlined">
          <InputLabel color="primary">Czego szukasz?</InputLabel>
          <OutlinedInput
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            color="primary"
            value={searchQuery}
            onChange={handleSearchChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    handleSearch(searchQuery);
                    setSearchQuery("");
                  }}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            label="Czego szukasz?"
          />
        </FormControl>
      </Card>
    </>
  );
}

import React from "react";
import "./FlightSearch.css";
import { Container } from "@mui/material";
import SearchResult from "../components/Flight Search Components/SearchResult";
import SearchForm from "../components/Flight Search Components/SearchForm";
import { Typography } from "@mui/material/";
import SearchHeader from "../components/Flight Search Components/SearchHeader";

function FlightSearch() {
  return (
    <div className="search-background">
      <Container maxWidth="lg">
        <SearchHeader/>
        <SearchForm/>
        <SearchResult />
        <SearchResult/>
      </Container>
    </div>
  );
}

export default FlightSearch;

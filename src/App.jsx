import React, { useCallback, useEffect, useState } from "react";
import { Container, alpha } from "@mui/material";
import LoadingState from "./components/LoadingState";
import UserList from "./components/UserList";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux/user/userSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setUsers(data));
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        background: (theme) => theme.palette.grey[100],
        display: "grid",
        placeItems: "center",
        minHeight: "97vh",
      }}
    >
      {loading ? <LoadingState /> : <UserList error={error} />}
    </Container>
  );
}

export default App;

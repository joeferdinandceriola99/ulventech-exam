import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import UserCard from "./UserCard";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const UserList = ({ error }) => {
  const userList = useSelector(({ users }) => users);

  return (
    <Box width="100%" height="100%">
      <Typography component="h1" variant="h4" marginY={2}>
        User List
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          placeItems: "center",
        }}
      >
        {error ? (
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.error.main,
            }}
          >
            {error}
          </Typography>
        ) : userList?.length > 0 ? (
          <Grid container spacing={2} width="100%" data-testid="user-list">
            {userList.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} lg={4}>
                <UserCard userDetails={user} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6">Empty User</Typography>
        )}
      </Box>
    </Box>
  );
};

export default UserList;

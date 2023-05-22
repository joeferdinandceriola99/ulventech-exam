import React from "react";

import PropType from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/user/userSlice";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Switch,
  Tooltip,
} from "@mui/material";
import {
  Build,
  Business,
  Delete,
  Edit,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { stringAvatar } from "../utils/helpers";

const UserCard = ({ userDetails }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const fullAddress = `${userDetails?.address?.street + "," || ""} ${
    userDetails?.address?.suite + "," || ""
  } ${userDetails?.address?.city + "," || ""} ${
    userDetails?.address?.zipcode + "," || ""
  }`;

  return (
    <Card
      sx={{
        height: "auto",
      }}
      data-testid="user-item"
    >
      <Box
        sx={{
          p: 2,
          paddingBottom: 0,
          display: "flex",
          width: "100%",
          gap: 1,
          flexDirection: {
            xs: "column", // Use 'xs' for small devices
            md: "row", // Changes to 'row' from 'md' breakpoint onwards
          },
        }}
      >
        <Avatar
          variant="rounded"
          src="avatar1.jpg"
          {...stringAvatar(userDetails.name)}
        />
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{userDetails.name}</Typography>
          <Typography variant="caption">{userDetails.email}</Typography>
        </Stack>
      </Box>
      <Box padding={2}>
        <Tooltip title={fullAddress}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "calc(100% - 50px)", // Or any width you want to set
            }}
          >
            <LocationOn sx={{ color: (theme) => theme.palette.grey[500] }} />{" "}
            {fullAddress}
          </Typography>
        </Tooltip>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "calc(100% - 50px)", // Or any width you want to set
          }}
        >
          <Phone sx={{ color: (theme) => theme.palette.grey[500] }} />{" "}
          {userDetails.phone}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "calc(100% - 50px)", // Or any width you want to set
          }}
        >
          <Business sx={{ color: (theme) => theme.palette.grey[500] }} />{" "}
          {userDetails.company?.name}
        </Typography>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={() => handleDeleteUser(userDetails.id)}
          title={`Delete user with id ${userDetails.id}`}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  );
};

export default UserCard;

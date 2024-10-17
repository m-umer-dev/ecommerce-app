import {
  Box,
  Button,
  Card,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { style } from "./styles";
import contactImage from "../../assets/contactBanner.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ClockIcon from "@mui/icons-material/WatchLater";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/customButtons/customButton";
import { getUserData } from "../../redux/slices/usersSlice";
import Badges from "../../components/badges/badges";

interface ContactFormValues {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const dispatch = useDispatch();
  const allContact = useSelector((state: any) => state.users.allUsers);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();
  //   const navigate = useNavigate();

  const onSubmit = (data: ContactFormValues) => {
    dispatch(
      getUserData([
        ...allContact,
        {
          id: Math.random(),
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
      ])
    );
    // console.log(...allUsers)
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "66px",
          height: "400px",
        }}
      ></Box>

      <Box sx={style.mainBox}>
        <Box>
          <Grid2>
            <Typography sx={style.title}>Get In Touch With Us</Typography>
            <Typography variant="subtitle2" gutterBottom sx={style.subTitle}>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </Typography>
          </Grid2>
        </Box>

        <Box
          sx={{
            background: "white",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {/* Location and Phone etc */}
          <Box maxWidth={350} sx={{ padding: "50px",}}>
            <Grid2>
              <Stack>
                <LocationOnIcon sx={style.icons} />
                <Typography sx={style.shopDetailTitle}>Address</Typography>
                <Typography sx={style.shopDetailSubTitle}>
                  236 5th SE Avenue, New York NY10000, United States
                </Typography>
              </Stack>
            </Grid2>

            <Grid2>
              <Stack>
                <PhoneIcon sx={style.icons} />
                <Typography sx={style.shopDetailTitle}>Phone</Typography>
                <Typography sx={style.shopDetailSubTitle}>
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </Typography>
              </Stack>
            </Grid2>

            <Grid2>
              <Stack>
                <ClockIcon sx={style.icons} />
                <Typography sx={style.shopDetailTitle}>Working Time</Typography>
                <Typography sx={style.shopDetailSubTitle}>
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </Typography>
              </Stack>
            </Grid2>
          </Box>

          <Box>
            <Box
              sx={{
                maxWidth: 550,
                background: "white",
                padding: "50px",
              }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                id="standard-basic"
                label="Your Name"
                variant="outlined"
                type="text"
                fullWidth
                {...register("name", { required: "Enter Your Name" })}
                sx={{
                  marginTop: "20px",
                  width: "450px",
                  color: "white",
                }}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}

              <TextField
                id="standard-basic"
                label="Email Address"
                variant="outlined"
                type="email"
                fullWidth
                {...register("email", { required: "email" })}
                sx={{
                  marginTop: "20px",
                  width: "450px",
                  color: "white",
                }}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}

              <TextField
                id="standard-basic"
                label="Subject"
                variant="outlined"
                type="text"
                fullWidth
                {...register("subject", { required: "Enter Subject" })}
                sx={{
                  marginTop: "20px",
                  width: "450px",
                  color: "white",
                }}
              />
              {errors.subject && (
                <span style={{ color: "red" }}>{errors.subject.message}</span>
              )}

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                type="text"
                {...register("message", { required: "message" })}
                sx={{
                  marginTop: "20px",
                  width: "450px",
                  color: "white",
                }}
                rows={3}
              />
              {errors.message && (
                <span style={{ color: "red" }}>{errors.message.message}</span>
              )}

              <Button
                type="submit"
                sx={{
                  marginTop: "20px",
                }}
              >
                <CustomButton buttonText="Submit" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Badges/>
    </>
   
  );
};

export default Contact;

import {
  Box,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { style } from "./styles";
import contactImage from "../../assets/contactBanner.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ClockIcon from "@mui/icons-material/WatchLater";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUserData } from "../../redux/slices/usersSlice";
import Badges from "../../components/badges/badges";
import { toast, ToastContainer } from "react-toastify";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import CustomButtonComponent from "../../components/customButtons/customButtonComponent";

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
    console.log(data);
    toast.success("Submitted", {
      position: "top-right",
      className: "foo-bar",
    });
   

  };

  const navigate = useNavigate();
  const goTo = () => {
    navigate("/");
  };
  
  return (
    <>
      <ToastContainer />

      <Box
        sx={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "66px",
          height: "400px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} />
          <Box sx={{ display: "flex", alignItems: "center", padding: "5px" }}>
            <Typography
              className="txt"
              onClick={goTo}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "550",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              Home{" "}
            </Typography>

            <Stack>
              <ArrowForwardIosIcon sx={{ fontSize: "1.10rem" }} />
            </Stack>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
              }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={style.mainBox}>
        <Grid2 size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Typography sx={style.title}>Get In Touch With Us</Typography>
          <Typography variant="subtitle2" gutterBottom sx={style.subTitle}>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </Typography>
        </Grid2>

        <Box
          sx={{
            background: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Box maxWidth={350} sx={{ padding: "50px" }}>
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
                padding: "10px",
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
                sx={style.inputLabelTitle}
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
                // sx={{
                //   marginTop: "20px",
                //   color: "white",
                // }}
                sx={style.inputLabelTitle}
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
                sx={style.inputLabelTitle}
              />
              {errors.subject && (
                <span style={{ color: "red" }}>{errors.subject.message}</span>
              )}

              <TextField
                id="standard-basic"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                type="text"
                {...register("message", { required: "message" })}
                sx={style.inputLabelTitle}
                rows={3}
              />
              {errors.message && (
                <span style={{ color: "red" }}>{errors.message.message}</span>
              )}

              <Button type="submit" sx={{ marginTop: "20px" }}>
                <CustomButtonComponent
                  type="submit"
                  border="none"
                  color="white"
                  background="#B88E2F"
                  height="50px"
                  radius="5px"
                  width="150px"
                  children="Submit"
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Badges />
    </>
  );
};

export default Contact;
